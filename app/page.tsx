"use client";

import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";
import { useLocale } from "@app/hooks";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };
  const { t } = useLocale();

  return (
    <div>
      <Link href="/adverts/new">
        <div>{t("labels.homePageShowcase", SCOPE_OPTIONS)}</div>
      </Link>
      <div className="flex items-center justify-center">
        <HomeContainer.List />
      </div>
    </div>
  );
}
