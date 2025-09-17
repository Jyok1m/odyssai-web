import { getTranslations } from "next-intl/server";

export default async function HomePage() {
	const t = await getTranslations("HomePage");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<h1>{t("title")}</h1>
		</main>
	);
}
