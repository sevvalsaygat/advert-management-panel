"use client";

import { Home as HomeContainer } from "@app/containers";
import { useLocale } from "@app/hooks";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };
  const { t } = useLocale();

  return (
    <div className="sm:mx-40 mx-5">
      <div className="flex border-b my-10">
        <div className="flex mx-20 mb-2 mt-5 text-lg font-mono text-purple-900">
          {t("labels.homePageShowcase", SCOPE_OPTIONS)}
        </div>
      </div>
      <div className="">
        <HomeContainer.List />
      </div>
    </div>
  );
}
