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
export declare const getUserEnrollments: (userId: number) => Promise<EnrollmentDto[]>;
export declare const getCourseForLearning: (userId: number, courseId: number) => Promise<CourseLearningDto | null>;
export declare const checkEnrollment: (userId: number, courseId: number) => Promise<boolean>;
export declare const updateProgress: (userId: number, courseId: number, lessonId: number) => Promise<void>;
//# sourceMappingURL=enrollment.service.d.ts.map