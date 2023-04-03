"use client";

import { useSearchParams } from "next/navigation";

import TxForm from "../../components/TxForm";
import TxFormProvider from "../../components/TxFormProvider";
import { parseArrayParam } from "../../lib/utils";
import { NetworkType, TxFormType } from "../../lib/schema";

export default function Home() {
  const query = useSearchParams();

  const defaultValues: TxFormType = {
    network: (query["network"] || "mainnet") as NetworkType,
    account: (query["account"] || "0x1") as string,
    module: (query["module"] || "") as string,
    func: (query["func"] || "") as string,
    typeArgs: parseArrayParam(query, "typeArgs") || [], // set default to empty array
    args: parseArrayParam(query, "args") || [], // set default to empty array
  };

  // check if all query parameters are empty
  const isQueryEmpty =
    Object.keys(query).length === 0 && query.constructor === Object;

  if (isQueryEmpty) {
    defaultValues.account = "0x1";
  }

  return (
    <TxFormProvider defaultValues={defaultValues}>
      <TxForm />
    </TxFormProvider>
  );
}
