"use client";

import { NewAdvert as NewAdvertContainer } from "@app/containers";
import { useLocale } from "@app/hooks";

export default function NewAdvert() {
  const SCOPE_OPTIONS = {
    scope: "pages.Adverts.New",
  };
  const { t } = useLocale();

  return (
    <div className="flex flex-col">
      <div className="flex border-b my-10 mx-40">
        <div className="flex mx-20 mb-2 mt-5 text-lg font-mono text-purple-900">
          {t("labels.addNewAdvert", SCOPE_OPTIONS)}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <NewAdvertContainer.Form />
      </div>
    </div>
  );
}
