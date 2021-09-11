import React from "react";
import InputTemplate from "./InputTemplate";

export default function Email({ value, onChange }) {
  return (
    <InputTemplate
      value={value}
      onChange={onChange}
      label="Email"
      placeholder="Email"
    />
  );
}
