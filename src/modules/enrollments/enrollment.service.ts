import prisma from "../../prisma.js";

export type EnrollmentDto = {
  courseId: number;
  courseTitle: string;
  courseCover: string | null;
  progressPercentage: number;
  lastAccessedAt: Date | null;
};

export type CourseLearningDto = {
  course: {
    id: number;
    title: string;
    description: string | null;
    teacher: {
      id: number;
      name: string;
    } | null;
    sections: Array<{
      id: number;
      title: string;
      sortOrder: number;
      videoUrl: string | null;
      attachmentUrl: string | null;
      lessons: Array<{
        id: number;
        title: string;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
        sortOrder: number;
      }>;
    }>;
  };
  progress: {
    completedLessons: number;
    totalLessons: number;
    percentage: number;
  };
};

export const getUserEnrollments = async (
  userId: number
): Promise<EnrollmentDto[]> => {
  const enrollments = await prisma.enrollment.findMany({
    where: {
      userId,
    },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          coverImage: true,
        },
      },
    },
    orderBy: {
      enrolledAt: "desc",
    },
  });

  // Calculate progress based on completed lessons
  const enrollmentsWithProgress = await Promise.all(
    enrollments.map(async (enrollment) => {
      // Get total lessons count for the course
      const totalLessons = await prisma.lesson.count({
        where: {
          courseId: enrollment.courseId,
        },
      });

      // Get completed lessons count for this user and course
      const completedLessons = await prisma.lessonCompletion.count({
        where: {
          userId: userId,
          lesson: {
            courseId: enrollment.courseId,
          },
        },
      });

      // Calculate progress percentage
      const progressPercentage =
        totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      // Get last accessed lesson completion time
      const lastCompletion = await prisma.lessonCompletion.findFirst({
        where: {
          userId: userId,
          lesson: {
            courseId: enrollment.courseId,
          },
        },
        orderBy: {
          completedAt: 'desc',
        },
      });

      return {
        courseId: enrollment.course.id,
        courseTitle: enrollment.course.title,
        courseCover: enrollment.course.coverImage,
        progressPercentage,
        lastAccessedAt: lastCompletion
          ? lastCompletion.completedAt.toISOString()
          : enrollment.enrolledAt
            ? enrollment.enrolledAt.toISOString()
            : null,
      };
    })
  );

  return enrollmentsWithProgress;
};

export const getCourseForLearning = async (
  userId: number,
  courseId: number
): Promise<CourseLearningDto | null> => {
  // Check if user is enrolled
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  if (!enrollment) {
    return null;
  }

  // Get course with sections and lessons
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
        },
      },
      sections: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
  });

  if (!course) {
    return null;
  }

  // Calculate progress based on completed lessons
  const totalLessons = course.sections.reduce(
    (acc, section) => acc + section.lessons.length,
    0
  );

  // Get completed lessons count for this user
  const completedLessons = await prisma.lessonCompletion.count({
    where: {
      userId: userId,
      lesson: {
        courseId: courseId,
      },
    },
  });

  const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return {
    course: {
      id: course.id,
      title: course.title,
      description: course.description,
      teacher: course.teacher,
      sections: course.sections.map((section) => ({
        id: section.id,
        title: section.title,
        sortOrder: section.sortOrder,
        videoUrl: section.videoUrl,
        attachmentUrl: section.attachmentUrl,
        lessons: section.lessons.map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          contentType: lesson.contentType,
          contentUrl: lesson.contentUrl,
          contentText: lesson.contentText,
          duration: lesson.duration,
          sortOrder: lesson.sortOrder,
        })),
      })),
    },
    progress: {
      completedLessons,
      totalLessons,
      percentage,
    },
  };
};

export const checkEnrollment = async (
  userId: number,
  courseId: number
): Promise<boolean> => {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  return enrollment !== null;
};

export const updateProgress = async (
  userId: number,
  courseId: number,
  lessonId: number
): Promise<void> => {
  // Check if user is enrolled
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  if (!enrollment) {
    throw new Error("User is not enrolled in this course");
  }

  // Verify that the lesson belongs to the course
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
  });

  if (!lesson || lesson.courseId !== courseId) {
    throw new Error("Lesson does not belong to this course");
  }

  // Upsert lesson completion
  await prisma.lessonCompletion.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
    create: {
      userId,
      lessonId,
      completedAt: new Date(),
    },
    update: {
      completedAt: new Date(),
    },
  });
};

