import { Metadata } from "next";
import Image from "next/image";
import trix from "../assets/life-cereal.webp";

export const metadata: Metadata = {
	title: "It's what Mikey likes!",
};

export default function Home() {
	return (
		<main className="">
			<div className="h-screen bg-white p-6">
				<Image
					className="block h-full w-full bg-white object-contain"
					src={trix.src}
					alt="picture of Life cereal box"
					width={trix.width}
					height={trix.height}
				/>
				<p className="text-gray-500">Mikey likes it!</p>
			</div>
		</main>
	);
}
