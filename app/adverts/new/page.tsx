"use client";

import Link from "next/link";

import { NewAdvert as NewAdvertContainer } from "@app/containers";
import { useLocale } from "@app/hooks";

export default function NewAdvert() {
  const SCOPE_OPTIONS = {
    scope: "pages.Adverts.New",
  };
  const { t } = useLocale();

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">
        <div>{t("labels.addNewAdvert", SCOPE_OPTIONS)}</div>
      </Link>
      <NewAdvertContainer.Form />
    </div>
  );
}
