import React, { Suspense, use } from "react";
import "../styles/list.css";

export default function Page() {
	const promise = import("../data.json").then((data) => data.default);
	return (
		<main>
			<Suspense fallback={<p>読み込み中...</p>}>
				<NameList promise={promise} />
			</Suspense>
		</main>
	);
}

function NameList({ promise }: { promise: Promise<string[]> }) {
	const names = use(promise);
	return (
		<ul className="name-list">
			{names.map((name, idx) => (
				<li className="name" key={`${name + idx}`}>
					{name}
				</li>
			))}
		</ul>
	);
}
