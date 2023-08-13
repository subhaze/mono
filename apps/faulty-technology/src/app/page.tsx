import { Metadata } from "next";

export const metadata: Metadata = {
	title: "We're all Faulty Technology, and it's okay.",
	description:
		"Don't fear failure, in the end, we're all Faulty Technology, embrace it, and move forward.",
};

export default function Home() {
	return (
		<div className="relative my-8 w-full rounded-sm  bg-slate-100/40 px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-900/50 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
			<main className="prose dark:prose-invert prose-slate lg:prose-lg relative mx-auto">
				<h1>
					<span className="[-webkit-text-fill-color:rgba(0,0,0,0.1)] [-webkit-text-stroke-color:rgba(0,0,0,0.4)] [-webkit-text-stroke-width:1px] dark:[-webkit-text-fill-color:rgba(255,255,255,0.4)]">
						Faulty
					</span>{" "}
					<span className="text-slate-600 dark:text-slate-400">Technology</span>
				</h1>

				<blockquote className="border-l-slate-100/40">
					<p>Success is sometimes the outcome of a whole string of failures.</p>

					<footer>&mdash; Vincent Van Gogh</footer>
				</blockquote>

				<p>
					Don&apos;t fear failure, in the end, we&apos;re all{" "}
					<cite>Faulty Technology</cite>, embrace it, and move forward.
				</p>
			</main>
		</div>
	);
}
