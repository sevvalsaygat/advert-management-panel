"use client";

import Link from "next/link";

import { useForm, FormProvider } from "react-hook-form";

import { Form, Button } from "@app/components";
import { NewAdvert as NewAdvertContainer } from "@app/containers";

type IFormType = {
  title: string;
  image: string;
  isUrgent: boolean;
};

export default function NewAdvert() {
  const useFormMethods = useForm<IFormType>({
    defaultValues: {
      title: "",
      image: "",
      isUrgent: false,
    },
  });

  const { handleSubmit, reset } = useFormMethods;
  const onSubmit = (data: IFormType) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">
        <button>New Adverts</button>
      </Link>
      <NewAdvertContainer.Form />
      <FormProvider {...useFormMethods}>
        <Form.Input name="title" variant="primary" label="Advert Title" />
        <Form.Input
          type="file"
          name="image"
          variant="primary"
          label="Advert Cover Image"
        />
        <Form.Switch name="isUrgent" />
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          title="SAVE"
        />
      </FormProvider>
    </div>
  );
}
