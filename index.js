import express from "express";
import fetch from "node-fetch";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/edit-video", upload.single("video"), async (req, res) => {
  try {
    const response = {
      output_url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    };

    res.json({
      success: true,
      videoUrl: response.output_url
    });

  } catch (error) {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running...");
});
