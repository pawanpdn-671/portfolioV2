import mongoose from "mongoose";

const likeModel = new mongoose.Schema({
	counts: Number,
});

export const Like = mongoose.models.likes || mongoose.model("likes", likeModel);
