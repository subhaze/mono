import { Metadata } from "next";
import Image from "next/image";
import trix from "../assets/not-life-cereal.webp";

export const metadata: Metadata = {
	title: "It's not the cereal life, so what is it?",
};

export default function Home() {
	return (
		<main className="">
			<div className="h-screen bg-white p-6">
				<Image
					className="block h-full w-full bg-white object-contain"
					src={trix.src}
					alt="picture of Trix cereal box"
					width={trix.width}
					height={trix.height}
				/>
			</div>
		</main>
	);
}
