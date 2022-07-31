import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  ReactNode,
  useState,
} from "react";

export type InputProps = {
  label?: string;
  disabled?: boolean;
  autoComplete?: string;
  inputClass?: string;
  inputStyle?: CSSProperties;
  error?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => any;
  type?: string;
  success?: string;
  value: string | number;
  name?: string;
  required?: boolean;
  showLabel?: boolean;
  textarea?: boolean;
  placeholder?: string;
  showIcon?: ReactNode;
  hideIcon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  inputMode?:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
};

const Input: FC<InputProps> = ({
  label,
  disabled,
  autoComplete = "",
  inputClass,
  inputStyle,
  success,
  value,
  name,
  error = "",
  onChange,
  type,
  required,
  showLabel = true,
  textarea,
  inputMode,
  placeholder,
  showIcon,
  hideIcon,
  className,
  style,
}) => {
  const [isFocused, setFocused] = useState<boolean>(!!value);
  const [isPassword, setPassword] = useState<boolean>(!!type);
  return (
    <div
      className={`field-group ${className}`}
      style={{
        ...style,
      }}
    >
      <div
        className="input-group"
        style={{
          position: "relative",
        }}
      >
        {label && showLabel && (
          <label
            className={isFocused || value ? "label-focused" : "label"}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        {!textarea && (
          <input
            id={name}
            inputMode={inputMode ?? "text"}
            type={
              type === "password" ? (isPassword ? "password" : "text") : type
            }
            name={name}
            disabled={disabled}
            className={`${error && "error"} ${
              success && "success"
            } ${inputClass} `}
            onChange={onChange}
            autoComplete={autoComplete}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            placeholder={placeholder}
            style={{
              paddingRight: type === "password" ? "50px" : "",
            }}
            required={required}
          />
        )}
        {textarea && (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            className={`${error && "error"} ${
              success && "success"
            } custom-scroll-bar ${inputClass} `}
            onChange={onChange}
            autoComplete={autoComplete}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            style={{
              paddingRight: "1rem",
              ...inputStyle,
            }}
            required={required}
          />
        )}
        {type === "password" && value && (
          <div className="toggle-password p-a right-0">
            <button
              onClick={() => setPassword(!isPassword)}
              type="button"
              className={`${
                isPassword ? "password-hidden" : "password-visible"
              }`}
            >
              {isPassword ? showIcon ?? "show" : hideIcon ?? "hide"}
            </button>
          </div>
        )}
      </div>
      {error && !required && <small className="field-error">{error}</small>}
      {success && <small className="field-success">{success}</small>}
    </div>
  );
};

export default Input;
