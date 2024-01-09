import AppProvider from "@/utils/Context";
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
