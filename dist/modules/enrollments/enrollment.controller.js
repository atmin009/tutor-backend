import { getUserEnrollments, getCourseForLearning, updateProgress, checkEnrollment, } from "./enrollment.service.js";
import { success, error } from "../../utils/apiResponse.js";
export const getMyEnrollmentsHandler = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const enrollments = await getUserEnrollments(req.user.userId);
        return success(res, enrollments, "Enrollments retrieved successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const getCourseForLearningHandler = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const courseId = Number(req.params.courseId);
        if (Number.isNaN(courseId)) {
            return error(res, 400, "Invalid course ID");
        }
        const courseData = await getCourseForLearning(req.user.userId, courseId);
        if (!courseData) {
            return error(res, 404, "Course not found or you are not enrolled");
        }
        return success(res, courseData, "Course retrieved successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const checkEnrollmentHandler = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const courseId = Number(req.params.courseId);
        if (Number.isNaN(courseId)) {
            return error(res, 400, "Invalid course ID");
        }
        const isEnrolled = await checkEnrollment(req.user.userId, courseId);
        return success(res, { isEnrolled }, "Enrollment status checked");
    }
    catch (err) {
        return next(err);
    }
};
export const updateProgressHandler = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const courseId = Number(req.body.courseId);
        const lessonId = Number(req.body.lessonId);
        if (Number.isNaN(courseId) || Number.isNaN(lessonId)) {
            return error(res, 400, "Invalid course ID or lesson ID");
        }
        await updateProgress(req.user.userId, courseId, lessonId);
        return success(res, null, "Progress updated successfully");
    }
    catch (err) {
        if (err.message === "User is not enrolled in this course") {
            return error(res, 403, err.message);
        }
        return next(err);
    }
};
//# sourceMappingURL=enrollment.controller.js.map