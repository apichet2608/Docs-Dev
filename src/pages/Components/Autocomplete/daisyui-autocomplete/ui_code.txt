import { Autocomplete, TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-base-200)",
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "var(--color-base-300)",
      borderWidth: "1.5px",
    },
    "&:hover": {
      backgroundColor: "var(--color-base-100)",
      "& fieldset": {
        borderColor: "var(--color-primary)",
        borderWidth: "1.5px",
      },
    },
    "&.Mui-focused": {
      backgroundColor: "var(--color-base-100)",
      boxShadow: `0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)`,
      "& fieldset": {
        borderColor: "var(--color-primary)",
        borderWidth: "2px",
      },
    },
    "& input": {
      color: "var(--color-base-content)",
      fontSize: "14px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--color-base-content)",
    fontSize: "14px",
    fontWeight: 500,
    opacity: 0.8,
    "&.Mui-focused": {
      color: "var(--color-primary)",
      opacity: 1,
    },
    // ทำให้ label ลอยตัวอย่างสวยงามเมื่อมีค่าหรือ focus
    "&.MuiInputLabel-shrink": {
      backgroundColor: "var(--color-base-100)",
      padding: "0 8px",
      borderRadius: "4px",
      transform: "translate(14px, -9px) scale(0.75)",
    },
  },
  // จัดการ Error state
  "&.Mui-error": {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--color-error)",
      },
      "&:hover fieldset": {
        borderColor: "var(--color-error)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--color-error)",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--color-error)",
    },
  },
});

/**
 * Props for the Daisyui_autocomplete component.
 */
interface AutocompleteProps {
  /** The array of options to display. */
  options: any[];
  /** The currently selected value (must match a value from optionKey). */
  value: string;
  /** Function to call when the value changes. */
  onChange: (value: string) => void;
  /** The key in the option object to use as the unique value. */
  optionKey: string;
  /** The key in the option object to display in the list. If not provided, optionKey is used. */
  displayKey?: string;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The label for the autocomplete input. */
  label?: string;
  /** The placeholder text when no value is selected. */
  placeholder?: string;
  /** The width of the component (e.g., '100%', '300px'). */
  width?: string;
}

const Daisyui_autocomplete = ({
  options = [],
  value,
  onChange,
  disabled = false,
  label = "Select Option",
  optionKey,
  displayKey,
  placeholder,
  width,
}: AutocompleteProps) => {
  // ทำให้โค้ดปลอดภัยขึ้นโดยการตรวจสอบว่า options เป็น array จริงๆ
  const safeOptions = Array.isArray(options) ? options : [];

  // หา object ที่ถูกเลือกจาก value ที่เป็น string
  const selectedOption =
    safeOptions.find((opt) => opt?.[optionKey] === value) || null;

  return (
    <Autocomplete
      options={safeOptions}
      getOptionLabel={(option) => option?.[displayKey || optionKey] || ""}
      value={selectedOption}
      onChange={(_e, newValue) => {
        onChange(newValue ? newValue[optionKey] : "");
      }}
      sx={{ width }} // sx ตอนนี้เหลือแค่สำหรับ layout ซึ่งเหมาะสมกว่า
      disabled={disabled}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          size="small"
        />
      )}
      isOptionEqualToValue={(option, val) =>
        option?.[optionKey] === val?.[optionKey]
      }
    />
  );
};

export default Daisyui_autocomplete;
