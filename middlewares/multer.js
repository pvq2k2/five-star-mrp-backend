const multer = require("multer");   
const storage = multer.diskStorage({});

const imageFileFilter = (req, file, cb)=>{
        if(!file.mimetype.startsWith("image")){
            cb("supported only image files!", false); 
        }
        cb(null, true);
}

const videoFileFilter = (req, file, cb)=>{
    if(!file.mimetype.startsWith("video")){
        cb("supported only image files!", false); 
    }
    cb(null, true);
}

exports.uploadImage = multer({storage, fileFilter: imageFileFilter})
exports.uploadVideo = multer({storage, fileFilter: videoFileFilter})
