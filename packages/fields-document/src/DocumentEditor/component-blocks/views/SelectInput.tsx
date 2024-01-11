/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, Select } from "@keystone-ui/fields";

export default function SelectInput({
  label,
  value,
  onChange,
  autoFocus,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  options: readonly { label: string; value: string }[];
}) {
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <Select
        autoFocus={autoFocus}
        value={options.find((option) => option.value === value) || null}
        onChange={(option) => {
          if (option) {
            onChange(option.value);
          }
        }}
        options={options}
      />
    </FieldContainer>
  );
}
