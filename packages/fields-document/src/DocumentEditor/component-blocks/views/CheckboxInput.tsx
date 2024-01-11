/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { Checkbox, FieldContainer } from "@keystone-ui/fields";

export default function CheckboxInput({
  label,
  value,
  onChange,
  autoFocus,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  autoFocus?: boolean;
}) {
  return (
    <FieldContainer>
      <Checkbox
        checked={value}
        autoFocus={autoFocus}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
      >
        {label}
      </Checkbox>
    </FieldContainer>
  );
}
