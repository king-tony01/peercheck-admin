import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles/Input.module.css";

function OTPInput({
  length = 4,
  value,
  onChange,
  autoFocus = false,
  disabled = false,
  className,
  inputClassName,
  error,
  helperText,
}: OTPInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [internalValue, setInternalValue] = useState<string>(value || "");

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
      inputsRef.current[0].select();
    }
  }, [autoFocus]);

  const digits = useMemo(() => {
    const safe = (internalValue || "").replace(/\D/g, "").slice(0, length);
    return Array.from({ length }, (_, i) => safe[i] || "");
  }, [internalValue, length]);

  const updateValue = (nextDigits: string[]) => {
    const nextValue = nextDigits.join("");
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  const handleChange = (index: number, next: string) => {
    const onlyDigits = next.replace(/\D/g, "");
    if (!onlyDigits) {
      const nextDigits = [...digits];
      nextDigits[index] = "";
      updateValue(nextDigits);
      return;
    }

    const nextDigits = [...digits];
    const chars = onlyDigits.split("");
    chars.forEach((char, i) => {
      if (index + i < length) {
        nextDigits[index + i] = char;
      }
    });
    updateValue(nextDigits);

    const nextIndex = Math.min(index + chars.length, length - 1);
    inputsRef.current[nextIndex]?.focus();
    inputsRef.current[nextIndex]?.select();
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const nextDigits = [...digits];
      if (nextDigits[index]) {
        nextDigits[index] = "";
        updateValue(nextDigits);
      } else if (index > 0) {
        nextDigits[index - 1] = "";
        updateValue(nextDigits);
        inputsRef.current[index - 1]?.focus();
      }
      return;
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
      return;
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text");
    const onlyDigits = pasted.replace(/\D/g, "").slice(0, length);
    if (!onlyDigits) return;
    const nextDigits = Array.from({ length }, (_, i) => onlyDigits[i] || "");
    updateValue(nextDigits);
    const lastIndex = Math.min(onlyDigits.length - 1, length - 1);
    inputsRef.current[lastIndex]?.focus();
    inputsRef.current[lastIndex]?.select();
  };

  const wrapperClass = [styles.otp_wrapper, className]
    .filter(Boolean)
    .join(" ");
  const inputClasses = [styles.otp_input, inputClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      <div className={styles.otp_group} onPaste={handlePaste}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(node) => {
              inputsRef.current[index] = node;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            maxLength={length}
            placeholder="0"
            value={digit}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            disabled={disabled}
            className={inputClasses}
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
      {(error || helperText) && (
        <div className={styles.otp_feedback}>
          {error && <span className={styles.otp_error}>{error}</span>}
          {!error && helperText && (
            <span className={styles.otp_helper}>{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default OTPInput;
