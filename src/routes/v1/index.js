import express from "express";
import { createTweet } from "../../controllers/tweetController.js";
import { createLike } from "../../controllers/likeController.js";
import { createComment } from "../../controllers/commentControllers.js";
import { createuser, loginUser } from "../../controllers/userController.js";
import { authenticate } from "../../midllewares/authenticate.js";
import upload from "../../config/aws-s3-config.js";

const router = express.Router();

router.post("/tweets", authenticate,upload.single("image"), createTweet);

router.post("/image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  console.log("request object", req.file);
  return res.status(201).json({
    message: req.file
  });
});

router.post("/tweet/like", authenticate, createLike);

router.post("/comment", authenticate, createComment);

router.post("/user/signup", createuser);
router.post("/user/login", loginUser);

export default router;
