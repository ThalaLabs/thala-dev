"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import TxForm from "../../components/TxForm";
import TxFormProvider from "../../components/TxFormProvider";
import { parseArrayParam } from "../../lib/utils";
import { NetworkType, TxFormType } from "../../lib/schema";

export default function Home() {
  const query = useSearchParams();

  const [defaultValues, setDefaultValues] = useState<TxFormType>();

  useEffect(() => {
    const defaultValues: TxFormType = {
      network: (query["network"] || "mainnet") as NetworkType,
      account: (query["account"] || "0x1") as string,
      module: (query["module"] || "") as string,
      func: (query["func"] || "") as string,
      typeArgs: parseArrayParam(query, "typeArgs"),
      args: parseArrayParam(query, "args"),
    };
    setDefaultValues(defaultValues);
  }, [query]);

  if (!defaultValues) {
    return;
  }

  return (
    <TxFormProvider defaultValues={defaultValues}>
      <TxForm />
    </TxFormProvider>
  );
}
