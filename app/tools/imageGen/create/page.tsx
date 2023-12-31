"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getRandomPrompt } from "@/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import InputField from "@/components/InputField";
import Image from "next/image";
import { RiLoader3Fill } from "react-icons/ri";
import { AppContext } from "@/utils/Context";
import Button from "@/components/Button";

const Page = () => {
	const router = useRouter();
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		photo: "",
	});
	const [generateImg, setGenerateImg] = useState(false);
	const [loading, setLoading] = useState(false);
	const { theme } = useContext(AppContext);

	const handleSubmit = () => {};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleGenerateImg = async () => {
		// if (form.prompt) {
		// 	try {
		// 		setGenerateImg(true);
		// 		const response = await fetch("https://api.openai.com/v1/images/generations", {
		// 			method: "POST",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 				Authorization: `Bearer ${key}`,
		// 			},
		// 			body: JSON.stringify({ prompt: form.prompt, n: 2, size: "512x512", response_format: "b64_json" }),
		// 		});
		// 		const { data } = await response.json();
		// 		// setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
		// 		console.log(data);
		// 	} catch (error) {
		// 		alert(error);
		// 	} finally {
		// 		setGenerateImg(false);
		// 	}
		// } else {
		// 	alert("Please enter a prompt");
		// }
	};

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	};

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
							labelName="Your Name"
							name="name"
							placeholder="Name"
							type="text"
							value={form.name}
						/>
						<InputField
							handleChange={handleChange}
							labelName="Prompt"
							name="prompt"
							placeholder="prompt"
							type="text"
							value={form.prompt}
							handleSurpriseMe={handleSurpriseMe}
							isSurpriseMe
						/>

						<div className="relative p-3 w-64 h-64 justify-center flex items-center">
							{form.photo ? (
								<Image src={form.photo} alt={form.prompt} className="w-full h-full object-contain" />
							) : (
								<div className="w-9/12 h-9/12 object-contain opacity-40">
									<PreviewImg theme={theme} />
								</div>
							)}

							{generateImg && (
								<div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-textLight/30">
									<RiLoader3Fill className="animate-spin h-10 w-10 text-bodyColor" />
								</div>
							)}
						</div>
					</div>
					<div className="mt-5 flex gap-5">
						<Button
							style="w-full py-3"
							onClick={handleGenerateImg}
							text={generateImg ? "Generating..." : "Generate "}
						/>
					</div>
					<div className="mt-10">
						<p className="mt-2 text-sm">
							Once you have created the image you want, you can share it with others in the community
						</p>
						<Button style="mt-3 py-2.5 w-full" text={loading ? "Sharing..." : "Share with the community"} />
					</div>
				</form>
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;

const PreviewImg = ({ theme }: { theme: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			shape-rendering="geometricPrecision"
			text-rendering="geometricPrecision"
			image-rendering="optimizeQuality"
			fill-rule="evenodd"
			clip-rule="evenodd"
			viewBox="0 0 512 420.94"
			fill={theme === "dark-theme" ? "#efefef" : "#333333"}>
			<path
				fill-rule="nonzero"
				d="M7.6 0h496.8c4.2 0 7.6 3.27 7.6 7.29v406.36c0 4.02-3.4 7.29-7.6 7.29H7.6c-4.2 0-7.6-3.27-7.6-7.29V7.29C0 3.27 3.4 0 7.6 0zm187.57 109.29c4.71 0 9.15.87 13.29 2.58 4.19 1.73 7.95 4.27 11.26 7.58 3.29 3.29 5.8 6.98 7.51 11.05 1.72 4.07 2.57 8.44 2.57 13.07 0 4.75-.85 9.2-2.56 13.35-1.71 4.16-4.22 7.89-7.52 11.2l-.45.41c-3.21 3.15-6.81 5.53-10.76 7.17-4.16 1.72-8.61 2.58-13.34 2.58-4.74 0-9.21-.86-13.38-2.57-4.14-1.7-7.88-4.24-11.22-7.61-3.32-3.29-5.83-7.02-7.54-11.18-1.7-4.15-2.56-8.6-2.56-13.35 0-4.61.86-8.97 2.57-13.04 1.7-4.07 4.21-7.78 7.52-11.08 3.31-3.31 7.07-5.85 11.27-7.58 4.15-1.71 8.6-2.58 13.34-2.58zm7.53 16.59c-2.23-.93-4.75-1.4-7.53-1.4-2.81 0-5.34.47-7.58 1.39-2.24.93-4.34 2.37-6.29 4.32-1.93 1.93-3.35 3.99-4.26 6.16-.91 2.18-1.37 4.59-1.37 7.22 0 2.84.46 5.37 1.37 7.59.91 2.21 2.33 4.28 4.26 6.22l.03.06c1.89 1.91 3.97 3.34 6.22 4.26 2.24.92 4.78 1.38 7.62 1.38 2.81 0 5.34-.46 7.58-1.39 2.1-.86 4.05-2.17 5.84-3.91l.38-.4c1.94-1.94 3.36-4.01 4.27-6.22.91-2.22 1.37-4.75 1.37-7.59 0-2.61-.46-5.01-1.38-7.2-.9-2.2-2.33-4.25-4.26-6.18-1.94-1.95-4.04-3.39-6.27-4.31zM73.52 296.05h50.24l27.07-64.62c1.57-3.77 6-5.58 9.88-4.06a7.42 7.42 0 0 1 4.25 4.22l18.98 44.14h26.2l35.43-89.04c1.5-3.78 5.89-5.67 9.79-4.21a7.54 7.54 0 0 1 3.7 2.98l40.44 62.71 63.08-105.91c2.1-3.52 6.74-4.72 10.36-2.68a7.42 7.42 0 0 1 3.08 3.28l62.46 131.45V72.89H73.52v223.16zm364.96 12.45a7.332 7.332 0 0 1-1.4-2l-68.7-144.59-61.92 103.95a7.39 7.39 0 0 1-2.71 2.82c-3.55 2.15-8.23 1.09-10.44-2.36l-39.08-60.62-31.61 79.47c-.93 3.06-3.84 5.3-7.3 5.3h-36.43c-2.97-.01-5.79-1.72-7-4.55l-13.93-32.4-21.92 52.33c-1.03 2.87-3.86 4.94-7.17 4.94H73.52v37.24h364.96V308.5zM65.93 58.3h380.14c4.2 0 7.6 3.27 7.6 7.3v289.72c0 4.02-3.4 7.29-7.6 7.29H65.93c-4.2 0-7.6-3.27-7.6-7.29V65.6c0-4.03 3.4-7.3 7.6-7.3zm430.88-43.72H15.19v391.78h481.62V14.58z"
			/>
		</svg>
	);
};
