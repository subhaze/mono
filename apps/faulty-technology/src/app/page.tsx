import { Metadata } from "next";

export const metadata: Metadata = {
	title: "We're all Faulty Technology, and it's okay",
};

export default function Home() {
	return (
		<div className="relative my-8 w-full rounded-sm bg-slate-100 px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 dark:bg-slate-900 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
			<main className="prose dark:prose-invert prose-slate lg:prose-lg mx-auto">
				<h1>Faulty Technology</h1>

				<blockquote>
					<p>Success is sometimes the outcome of a whole string of failures.</p>

					<footer>&mdash; Vincent Van Gogh</footer>
				</blockquote>

				<p>
					Don&apos;t fear failure, don&apos;t fear risk, in the end, we&apos;re
					all <cite>Faulty Technology</cite>, embrace it, move forward, and
					savor every moment.
				</p>
			</main>
		</div>
	);
}
