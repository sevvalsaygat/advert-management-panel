"use client";

import Link from "next/link";

import { useForm, FormProvider } from "react-hook-form";

import { Form, Button } from "@app/components";

import { NewAdvert as NewAdvertContainer } from "@app/containers";
import { SwitchButton } from "@app/components";

export default function NewAdvert() {
  const useFormMethods = useForm();

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">
        <button>New Adverts</button>
      </Link>
      <NewAdvertContainer.Form />
      <SwitchButton />
      <FormProvider {...useFormMethods}>
        <Form.Input name="email" variant="primary" label="Advert Title" />
        <Form.Input name="email" variant="primary" label="Advert Cover Image" />
      </FormProvider>
      <Button onClick={() => {}} variant="primary" title="SAVE" />
    </div>
  );
}
