import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime()
        const fileName = file.originalname

        cb(null, `${timestamp}-${fileName}`)
    }
})

const upload = multer({storage: storage})

export default upload