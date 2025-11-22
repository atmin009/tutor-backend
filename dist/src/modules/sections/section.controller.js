import { createSection, deleteSection, getSectionById, listSectionsByCourse, updateSection, } from "./section.service.js";
import { error, success } from "../../utils/apiResponse.js";
export const listSectionsHandler = async (req, res, next) => {
    const courseId = Number(req.params.courseId);
    if (Number.isNaN(courseId)) {
        return error(res, 400, "Invalid course ID");
    }
    try {
        const sections = await listSectionsByCourse(courseId);
        return success(res, sections, "Sections retrieved successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const getSectionHandler = async (req, res, next) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return error(res, 400, "Invalid section ID");
    }
    try {
        const section = await getSectionById(id);
        if (!section) {
            return error(res, 404, "Section not found");
        }
        return success(res, section, "Section retrieved successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const createSectionHandler = async (req, res, next) => {
    const courseId = Number(req.params.courseId);
    if (Number.isNaN(courseId)) {
        return error(res, 400, "Invalid course ID");
    }
    const { title, sortOrder, videoUrl, attachmentUrl } = req.body ?? {};
    if (!title || typeof title !== "string" || !title.trim()) {
        return error(res, 400, "Title is required");
    }
    try {
        const section = await createSection({
            courseId,
            title: title.trim(),
            sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
            videoUrl: videoUrl || null,
            attachmentUrl: attachmentUrl || null,
        });
        return success(res.status(201), section, "Section created successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const updateSectionHandler = async (req, res, next) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return error(res, 400, "Invalid section ID");
    }
    try {
        const { title, sortOrder, videoUrl, attachmentUrl } = req.body ?? {};
        const updateData = {};
        if (title !== undefined) {
            if (typeof title !== "string" || !title.trim()) {
                return error(res, 400, "Title must be a non-empty string");
            }
            updateData.title = title.trim();
        }
        if (sortOrder !== undefined) {
            updateData.sortOrder = Number(sortOrder);
        }
        if (videoUrl !== undefined) {
            updateData.videoUrl = videoUrl || null;
        }
        if (attachmentUrl !== undefined) {
            updateData.attachmentUrl = attachmentUrl || null;
        }
        const section = await updateSection(id, updateData);
        return success(res, section, "Section updated successfully");
    }
    catch (err) {
        return next(err);
    }
};
export const deleteSectionHandler = async (req, res, next) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return error(res, 400, "Invalid section ID");
    }
    try {
        await deleteSection(id);
        return success(res, null, "Section deleted successfully");
    }
    catch (err) {
        return next(err);
    }
};
//# sourceMappingURL=section.controller.js.map