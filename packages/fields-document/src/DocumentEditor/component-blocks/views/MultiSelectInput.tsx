/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, MultiSelect } from "@keystone-ui/fields";

export default function MultiSelectInput({
  label,
  value,
  onChange,
  autoFocus,
  options,
}: {
  label: string;
  value: readonly string[];
  onChange: (value: string[]) => void;
  autoFocus?: boolean;
  options: readonly { label: string; value: string }[];
}) {
  const valuesToOption = new Map(options.map((x) => [x.value, x]));
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <MultiSelect
        autoFocus={autoFocus}
        value={value.map((x) => valuesToOption.get(x)!)}
        options={options}
        onChange={(options) => {
          onChange(options.map((x) => x.value));
        }}
      />
    </FieldContainer>
  );
}
