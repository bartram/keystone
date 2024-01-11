/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, TextInput } from "@keystone-ui/fields";
import { useState } from "react";

export default function IntegerInput({
  label,
  value,
  onChange,
  autoFocus,
  forceValidation,
  validate,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  autoFocus?: boolean;
  forceValidation?: boolean;
  validate: (value: number) => boolean;
}) {
  const [blurred, setBlurred] = useState(false);
  const [inputValue, setInputValue] = useState(String(value));
  const showValidation = forceValidation || (blurred && !validate(value));

  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <TextInput
        onBlur={() => setBlurred(true)}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={(event) => {
          const raw = event.target.value;
          setInputValue(raw);
          if (/^[+-]?\d+$/.test(raw)) {
            onChange(Number(raw));
          } else {
            onChange(NaN);
          }
        }}
      />
      {showValidation && (
        <span css={{ color: "red" }}>Please specify an integer</span>
      )}
    </FieldContainer>
  );
}
