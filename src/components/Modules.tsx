import {
  Input,
  List,
  ListItem,
  Heading,
  Highlight,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { Types } from "aptos";
import { groupBy } from "lodash";

import { TxFormType } from "../lib/schema";

export function Modules({ modules }: { modules: Types.MoveModule[] }) {
  const { control, resetField } = useFormContext<TxFormType>();
  const {
    field: { value: formFunc, onChange: onChangeFunc },
  } = useController({
    name: "func",
    control,
  });
  const {
    field: { value: formModule, onChange: onChangeModule },
  } = useController({
    name: "module",
    control,
  });

  const [query, setQuery] = useState<string>("");

  modules.sort((a, b) => a.name.localeCompare(b.name));

  let moduleFuncs = modules.flatMap((module) =>
    module.exposed_functions
      .filter((func) => func.is_entry)
      .map((func) => {
        return { module, func };
      })
  );

  if (query.length > 0) {
    moduleFuncs = moduleFuncs.filter(({ module, func }) => {
      return (
        module.name.toLowerCase().includes(query.toLowerCase()) ||
        func.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  const group = groupBy(moduleFuncs, (moduleFunc) => moduleFunc.module.name);

  return (
    <>
      <Input
        type="search"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
        my={2}
        flexShrink="0"
      />
      <List overflow={"auto"} cursor="pointer" flexGrow="1">
        {Object.entries(group).map(([moduleName, moduleFuncs]) => (
          <Box key={moduleName}>
            <Heading size="sm" my={3}>
              <Highlight query={[query]} styles={{ bg: "yellow.300" }}>
                {moduleName}
              </Highlight>
            </Heading>
            {moduleFuncs.map(({ module, func }) => (
              <ListItem
                key={func.name}
                _hover={{ bgColor: "#232341" }}
                bgColor={
                  formFunc === func.name && formModule === module.name
                    ? "gray.100"
                    : undefined
                }
                onClick={() => {
                  onChangeModule(module.name);
                  onChangeFunc(func.name);
                  resetField("typeArgs", { defaultValue: [] });
                  resetField("args", { defaultValue: [] });
                }}
              >
                <Highlight query={[query]} styles={{ bg: "yellow.300" }}>
                  {func.name}
                </Highlight>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </>
  );
}
