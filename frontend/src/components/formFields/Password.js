import React from "react";
import InputTemplate from "./InputTemplate";

export default function Password({ value, onChange }) {
  return (
    <InputTemplate
      value={value}
      onChange={onChange}
      label="Password"
      placeholder="Password"
    />
  );
}
