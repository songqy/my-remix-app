import express from "express";

const router = express.Router();

let count = 0;

router.get("/info", (req, res) => {
  res.json({
    version: "1.0.0",
    tag: "tag-1",
    count,
  });
});

router.post("/update", (req, res) => {
  res.json({
    count: count++,
  });
});

export default router;
