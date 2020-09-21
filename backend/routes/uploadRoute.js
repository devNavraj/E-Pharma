import express from 'express'
import multer from 'multer'

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/');
    },
    filename(req, file, cb){
        cb(null, `${Date.now()}.jpg`);
    },
});

const upload = multer({ storage });

const router = express.Router();

//Middleware
router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);    /* when sent to the client, save the address of file in MongoDB */
});

export default router;