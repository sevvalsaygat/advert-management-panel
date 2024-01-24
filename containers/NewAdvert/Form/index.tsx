"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";

import { Form as FormComponent, Button } from "@app/components";
import { useLocale } from "@app/hooks";

type FormPropTypes = {};

type IFormType = {
  title: string;
  image: string;
  isUrgent: boolean;
};

const Form: React.FC<FormPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "containers.NewAdvert.Form",
  };

  const { t } = useLocale();

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
