import React from "react";
import InputTemplate from "./InputTemplate";

export default function Username({ value, onChange }) {
  return (
    <InputTemplate
      value={value}
      onChange={onChange}
      label="Username"
      placeholder="Username"
    />
  );
}
