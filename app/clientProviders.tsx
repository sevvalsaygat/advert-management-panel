"use client";

import React from "react";

const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default ClientProviders;
