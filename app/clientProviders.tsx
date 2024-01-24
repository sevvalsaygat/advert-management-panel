"use client";

import React from "react";

import { LocaleProvider } from "@app/hooks/useLocale";

const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LocaleProvider>{children}</LocaleProvider>;
};

export default ClientProviders;
