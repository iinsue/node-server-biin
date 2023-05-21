import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import dayjs from "dayjs";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
  },
  region: "ap-northeast-2",
});

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "boardtest-ssu",
    key: function (req, file, cb) {
      const nowDate = dayjs(Date.now()).format("YYMMDDHHMM");
      cb(null, `original/${nowDate}_${file.originalname}`);
    },
  }),
  limits: { fileSize: 3 * 1024 * 1024 },
});

export const uploadImg = async (req, res) => {
  try {
    const { files } = req;
    const image = await files.map((s3File) => s3File.location);
    const imageUrl = await image[0];
    return res.status(200).send({ imageUrl });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
