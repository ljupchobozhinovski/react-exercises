import React from "react";

export default function FormGroup({
  labelText,
  inputType,
  placeholder,
  values,
  onInput,
  onKeyUp,
  onChange,
  className,
  readOnly = false,
  reference
}) {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column m-2">
      <label className="fw-bold">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        value={values}
        onInput={onInput}
        onKeyUp={onKeyUp}
        onChange={onChange}
        className={`${className} form-control`}
        readOnly={readOnly}
        ref={reference}
      />
    </div>
  );
}
