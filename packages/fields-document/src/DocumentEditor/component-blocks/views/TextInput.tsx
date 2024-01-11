/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, TextInput } from "@keystone-ui/fields";

export default function Input({
  label,
  value,
  onChange,
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
}) {
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <TextInput
        autoFocus={autoFocus}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </FieldContainer>
  );
}
