import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-50 dark:bg-slate-950 px-6 lg:px-0">
				<div className="background absolute inset-0" />
				{children}
			</body>
		</html>
	);
}
