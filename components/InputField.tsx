import { InputFieldProps } from "@/types";
import Button from "./Button";

const InputField = (props: InputFieldProps) => {
	const { handleChange, labelName, name, placeholder, type, value, handleSurpriseMe, isSurpriseMe } = props;

	return (
		<div>
			<div className="flex items-center gap-4 mb-2">
				<label htmlFor={name} className="block text-sm font-medium text-textLight">
					{labelName}
				</label>
				{isSurpriseMe && <Button onClick={handleSurpriseMe} text="Surprise Me" style={"text-sm py-1 px-2"} />}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className="bg-bodyColor border-textDark text-textLight text-sm rounded-lg border outline-none block w-full h-12 py-2 px-3"
			/>
		</div>
	);
};
export default InputField;
