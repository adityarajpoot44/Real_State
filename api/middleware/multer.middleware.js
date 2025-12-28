import multer from 'multer';
import fs from 'fs';

const uploadDir = './public/temp';

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now()+'_'+'multer';
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });
