import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  deploymentLink: {
    type: String,
  },
  description: {
    type: String,
  },
  technologies: [],
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
