import { getTranslations } from "next-intl/server";

export default async function HomePage() {
	const t = await getTranslations("HomePage");
	return (
		<main className="p-16 flex min-h-screen flex-col items-center justify-between">
			<div className="text-center flex flex-col gap-y-4">
				<h1 className="text-5xl font-bold">{t("title")}</h1>
				<h2 className="text-xl font-light">{t("tagLine")}</h2>
			</div>
		</main>
	);
}
