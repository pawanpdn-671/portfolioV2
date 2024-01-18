import { Like } from "../../../lib/model/like";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		await mongoose.connect(process.env.MONGODB_URL as string);
		const data = await Like.find();
		return NextResponse.json({ result: data, success: true });
	} catch (error) {
		return NextResponse.json({ result: "error", error: error, success: false });
	}
}

export async function PATCH(req: NextRequest, res: NextResponse) {
	//@ts-ignore
	const body = await req.json();
	const { _id, counts } = body;

	try {
		await mongoose.connect(process.env.MONGODB_URL as string);

		const updatedLike = await Like.findOneAndUpdate({ _id }, { counts });

		return NextResponse.json({ result: updatedLike, success: true });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({ success: false, error: "An error occurred." });
	}
}
