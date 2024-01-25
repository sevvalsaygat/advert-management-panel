"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useForm, FormProvider } from "react-hook-form";

import { Form as FormComponent, Button } from "@app/components";
import { useLocale } from "@app/hooks";
import { useAdvertStore } from "@app/stores";

type FormPropTypes = {};

const Form: React.FC<FormPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "containers.NewAdvert.Form",
  };
  const { t } = useLocale();
  const router = useRouter();
  const useFormMethods = useForm<IAdvertFormType>({
    defaultValues: {
      title: "",
      image: "",
      isUrgent: false,
    },
  });

  const { handleSubmit, reset } = useFormMethods;
  const addAdvert = useAdvertStore((state) => state.addAdvert);

  const onSubmit = (data: IAdvertFormType) => {
    addAdvert(data);
    reset();
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <FormProvider {...useFormMethods}>
        <FormComponent.Input
          name="title"
          variant="primary"
          label={t("form.title.label", SCOPE_OPTIONS)}
          placeholder={t("form.title.placeholder", SCOPE_OPTIONS)}
        />
        <FormComponent.Input
          type="file"
          name="image"
          variant="primary"
          label={t("form.image.label", SCOPE_OPTIONS)}
        />
        <FormComponent.Switch
          name="isUrgent"
          label={t("form.isUrgent.label", SCOPE_OPTIONS)}
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          title={t("actions.save", SCOPE_OPTIONS)}
        />
      </FormProvider>
    </div>
  );
};

export default Form;
