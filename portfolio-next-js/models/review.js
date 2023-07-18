import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  occuption: {
    type: String,
  },
  reviewContent: {
    type: String,
  },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
