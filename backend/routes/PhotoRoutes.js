const express = require("express");
const router = express.Router();

// controller
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  toggleLikePhoto,
  commentPhoto,
  searchPhotos,
} = require("../controllers/PhotoController");

// middlewares
const {
  photoInsertValidation,
  photoUpdateValidation,
  commentsValidation,
} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/ImageUpload");

// routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, toggleLikePhoto);
router.put(
  "/comment/:id",
  authGuard,
  commentsValidation(),
  validate,
  commentPhoto
);

module.exports = router;
