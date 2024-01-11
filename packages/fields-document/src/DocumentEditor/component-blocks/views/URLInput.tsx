/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, TextInput } from "@keystone-ui/fields";
import { useState } from "react";

export default function URLInput({
  label,
  value,
  onChange,
  autoFocus,
  forceValidation,
  validate,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  forceValidation?: boolean;
  validate: (value: string) => boolean;
}) {
  const [blurred, setBlurred] = useState(false);
  const showValidation = forceValidation || (blurred && !validate(value));
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <TextInput
        onBlur={() => setBlurred(true)}
        autoFocus={autoFocus}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      {showValidation && (
        <span css={{ color: "red" }}>Please provide a valid URL</span>
      )}
    </FieldContainer>
  );
}
