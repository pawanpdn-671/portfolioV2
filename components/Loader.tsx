import { AppContext } from "@/utils/Context";
import { useContext } from "react";

const Loader = () => {
	const {} = useContext(AppContext);
	return (
		<div>
			<h1>Loader</h1>
		</div>
	);
};

export default Loader;
