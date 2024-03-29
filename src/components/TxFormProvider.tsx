"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { TxFormSchema, TxFormType } from "../lib/schema";

export default function TxFormProvider({
  defaultValues,
  children,
}: {
  defaultValues: TxFormType;
  children: React.ReactNode;
}) {
  const form = useForm<TxFormType>({
    mode: "all",
    resolver: zodResolver(TxFormSchema),
    defaultValues,
  });
  const { watch } = form;

  const router = useRouter();

  useEffect(() => {
    const subscription = watch(async (value) => {
      await router.push(
        `/run?network=${value.network}&account=${value.account}&module=${
          value.module
        }&func=${value.func}&typeArgs=${value.typeArgs?.join(
          ","
        )}&args=${value.args?.join(",")}`
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return <FormProvider {...form}>{children}</FormProvider>;
}
