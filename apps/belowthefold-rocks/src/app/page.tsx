import { Metadata } from "next";
import Image from "next/image";
import rocks from "../../public/rocks.jpg";

export const metadata: Metadata = {
	title: "Below the fold, rocks.",
};

export default function Home() {
	return (
		<main className="">
			<div className="h-screen" />
			<div className="h-screen bg-white">
				<Image
					className="block h-full w-full object-cover"
					src={rocks.src}
					alt="picture of rocks below the fold of the web page"
					width={rocks.width}
					height={rocks.height}
				/>
			</div>
		</main>
	);
}
