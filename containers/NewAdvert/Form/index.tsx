"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="flex flex-row items-center justify-center mt-10 shadow-lg rounded-lg px-14 py-14 gap-16 w-8/12">
      <Image src="/images/shopping.png" width={400} height={400} alt="logo" />
      <div className="flex flex-col w-full">
        <FormProvider {...useFormMethods}>
          <div>
            <FormComponent.Input
              name="title"
              variant="primary"
              label={t("form.title.label", SCOPE_OPTIONS)}
              placeholder={t("form.title.placeholder", SCOPE_OPTIONS)}
              rules={{
                required: "This field must be filled out!",
              }}
            />
          </div>
          <div>
            <FormComponent.Input
              type="file"
              name="image"
              variant="primary"
              label={t("form.image.label", SCOPE_OPTIONS)}
              rules={{
                required: "This field must be filled out!",
              }}
            />
          </div>
          <div className="flex flex-row justify-between ml-2">
            <div>
              <FormComponent.Switch
                name="isUrgent"
                label={t("form.isUrgent.label", SCOPE_OPTIONS)}
                rules={{
                  required: "This field must be filled out!",
                }}
              />
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="primary"
              title={t("actions.save", SCOPE_OPTIONS)}
            />
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default Form;
