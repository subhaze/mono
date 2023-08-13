import "../styles/globals.css";
import Image from "next/image";
import almondBlossoms from "../almond-blossom.jpg";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-50 px-6 dark:bg-slate-950 lg:px-0">
				<div className="background absolute inset-0" />
				<Image
					alt=""
					src={almondBlossoms.src}
					className="absolute inset-0 object-cover opacity-60"
					fill
				/>
				{children}
			</body>
		</html>
	);
}
