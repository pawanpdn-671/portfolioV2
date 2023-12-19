import { ReactNode, useContext } from "react";
import { AppContext } from "@/utils/Context";

const NavSpaceTop = ({ children }: { children: ReactNode }) => {
	const { scrolled } = useContext(AppContext);
	return <div className={`${scrolled ? "pt-[72px]" : "pt-[84px]"}`}>{children}</div>;
};

export default NavSpaceTop;
