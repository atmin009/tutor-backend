import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base upload directory
// __dirname in utils/upload.ts points to src/utils, so we go up two levels to find uploads
const uploadsDir = path.join(__dirname, "..", "..", "uploads");
const coursesDir = path.join(uploadsDir, "courses");
const sectionsDir = path.join(uploadsDir, "sections");

// Ensure upload directories exist
[uploadsDir, coursesDir, sectionsDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created upload directory: ${dir}`);
  }
});

console.log("📁 Upload directories configured:");
console.log("  - Base:", uploadsDir);
console.log("  - Courses:", coursesDir);
console.log("  - Sections:", sectionsDir);

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine destination based on request path
    // Check multiple path properties to ensure we catch the route
    const originalUrl = req.originalUrl || "";
    const url = req.url || "";
    const path = req.path || "";
    const baseUrl = req.baseUrl || "";
    
    // Combine all possible paths
    const allPaths = [originalUrl, url, path, baseUrl + path, baseUrl + url].join(" ");
    
    console.log("📤 File upload debug:");
    console.log("  - originalUrl:", originalUrl);
    console.log("  - url:", url);
    console.log("  - path:", path);
    console.log("  - baseUrl:", baseUrl);
    console.log("  - allPaths:", allPaths);
    
    // Check for section uploads first (more specific)
    // Look for upload-attachment or upload-video in any of the path variations
    if (allPaths.includes("upload-attachment") || allPaths.includes("upload-video")) {
      console.log("📁 Destination: sections");
      cb(null, sectionsDir);
    } else if (allPaths.includes("upload-cover") || allPaths.includes("upload-preview")) {
      console.log("📁 Destination: courses");
      cb(null, coursesDir);
    } else {
      // Default to courses
      console.log("📁 Destination: courses (default)");
      cb(null, coursesDir);
    }
  },
  filename: (req, file, cb) => {
    // Generate filename: timestamp-originalname
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9]/g, "-");
    const filename = `${timestamp}-${name}${ext}`;
    cb(null, filename);
  },
});

// File filter for images
const imageFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (JPEG, PNG, GIF, WebP) are allowed"));
  }
};

// File filter for videos
const videoFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimes = ["video/mp4", "video/webm", "video/ogg", "video/quicktime"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only video files (MP4, WebM, OGG, QuickTime) are allowed"));
  }
};

// File filter for attachments (PDF, DOCX, etc.)
const attachmentFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    "text/plain",
  ];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only document files (PDF, DOC, DOCX, XLS, XLSX, TXT) are allowed"));
  }
};

// Upload middleware exports
export const uploadImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

export const uploadVideo = multer({
  storage,
  fileFilter: videoFilter,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB
  },
});

export const uploadAttachment = multer({
  storage,
  fileFilter: attachmentFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
});

