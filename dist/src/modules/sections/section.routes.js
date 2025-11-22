import { Router } from "express";
import { createSectionHandler, deleteSectionHandler, getSectionHandler, listSectionsHandler, updateSectionHandler, } from "./section.controller.js";
import { requireAuth, requirePermission, } from "../../middlewares/authMiddleware.js";
import { uploadVideo, uploadAttachment } from "../../utils/upload.js";
import { success, error } from "../../utils/apiResponse.js";
const sectionRouter = Router({ mergeParams: true });
sectionRouter.use(requireAuth);
sectionRouter.use(requirePermission("manage_courses"));
sectionRouter.get("/", listSectionsHandler);
sectionRouter.post("/", createSectionHandler);
sectionRouter.get("/:id", getSectionHandler);
sectionRouter.put("/:id", updateSectionHandler);
sectionRouter.delete("/:id", deleteSectionHandler);
// Upload routes
sectionRouter.post("/:id/upload-video", uploadVideo.single("video"), (req, res, next) => {
    try {
        if (!req.file) {
            return error(res, 400, "No file uploaded");
        }
        const url = `/uploads/sections/${req.file.filename}`;
        return success(res, { url }, "Video uploaded successfully");
    }
    catch (err) {
        return next(err);
    }
});
sectionRouter.post("/:id/upload-attachment", uploadAttachment.single("file"), (req, res, next) => {
    try {
        if (!req.file) {
            return error(res, 400, "No file uploaded");
        }
        const url = `/uploads/sections/${req.file.filename}`;
        return success(res, { url }, "Attachment uploaded successfully");
    }
    catch (err) {
        return next(err);
    }
});
export default sectionRouter;
//# sourceMappingURL=section.routes.js.map