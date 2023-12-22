"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getRandomPrompt } from "@/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import InputField from "@/components/InputField";

const Page = () => {
	const router = useRouter();
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		photo: "",
	});
	const [generateImg, setGenerateImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

	return (
		<MaxWidthWrapper>
			<div className="py-10">
				<div className="mt-6">
					<h1 className="font-extrabold text-textLight text-5xl font-titleFont">Create</h1>
					<p className="mt-2 text-textDark text-lg">
						Create imaginative and visually stunning images through DALL-E AI and share them with the community.
					</p>
				</div>
				<form className="mt-16 max-w-3xl">
					<div className="flex flex-col gap-5">
						<InputField
							handleChange={handleChange}
							labelName="Name"
							name="name"
							placeholder="Name"
							type="text"
							value={form.name}
						/>
						<InputField
							handleChange={handleChange}
							labelName="Name"
							name="name"
							placeholder="Name"
							type="text"
							value={form.name}
							isSurpriseMe
						/>
					</div>
				</form>
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;
