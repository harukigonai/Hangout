import React from "react";
import InputTemplate from "./InputTemplate";

export default function ConfirmPassword({ value, onChange }) {
  return (
    <InputTemplate
      value={value}
      onChange={onChange}
      label="Confirm password"
      placeholder="Confirm password"
    />
  );
}
