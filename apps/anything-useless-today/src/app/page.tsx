import { Metadata } from "next";
import Image from "next/image";
import josh from "../assets/josh-amburn.webp";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	return {
		title: `${(searchParams?.is || "").split("-").join(" ")}, useless today?`,
	};
}

const UselessToday = ({
	isSearchParam,
}: {
	isSearchParam: string | undefined;
}) => {
	const [is, ...rest] = (isSearchParam || "").split("-");
	const thing = rest.join(" ").toLocaleLowerCase();
	console.log(thing);
	if (is !== "is") return <div>{`must start with 'is'`}</div>;
	if (thing === "josh amburn") {
		return (
			<div className="grid h-full w-full justify-center align-middle">
				<div className="self-top relative col-start-1 row-start-1 text-center text-6xl font-bold text-white">
					absolutely!
				</div>
				<Image
					className="col-start-1 row-start-1 block h-full w-full object-contain"
					src={josh.src}
					alt="Josh is useless today."
					width={josh.width}
					height={josh.height}
				/>
			</div>
		);
	}
	if (thing === "tim wagner") {
		return (
			<div className="flex justify-center align-middle">
				<span className="inline-block self-center justify-self-center">
					Who?
					<br />
					Oh! You mean ol <b className="font-bold">Tee Dub</b>? Yeah.
					<br />
					Well... if he&apos;s got GPT going, then ...maybe not quite as
					useless...
				</span>
			</div>
		);
	}
	if (thing === "justin rhyne") {
		return (
			<div className="flex justify-center align-middle">
				<span className="inline-block self-center justify-self-center">
					{`Nah, not at all! ....wait, you said "Rhyne" didn't you?
					...eh`}
				</span>
			</div>
		);
	}
	return <div>Eh... Probably.</div>;
};

export default function Home({ searchParams }) {
	return (
		<main className="">
			<div className="h-screen bg-gray-900 p-6 text-white">
				<UselessToday isSearchParam={searchParams.is} />
			</div>
		</main>
	);
}
