const aws = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,

        // acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '.pdf')
        }
    }),
    fileFilter: (req, file, cb) => {
        // console.log(file.mimetype);
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("not acceptable"), false);
        }
    }
}).single('resume');



module.exports = upload;