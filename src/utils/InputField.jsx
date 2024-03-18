// InputField.js
import React from 'react';

const InputField = ({ label, name, register, errors, type = 'text', options = [], rows, cols }) => {
  const commonInputProps = {
    name: name,
    ...register(name),
    className: "peer block min-h-[auto] w-full border border-neutral-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  };

  return (
    <div className="relative mb-3">
      {type === 'select' ? (
        <select defaultValue="" {...commonInputProps}>
          <option value="" disabled></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...commonInputProps} rows={rows} cols={cols}></textarea>
      ) : (
        <input type={type} {...commonInputProps} />
      )}
      <label
        htmlFor={name}
        className="peer-focus:bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
      >
        {label}
      </label>
      {errors[name] && <span className="text-red-500">{errors[name].message}</span>}
    </div>
  );
};

export default InputField;
