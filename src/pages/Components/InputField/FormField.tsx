import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";

interface FormFieldProps {
  label: string;
  name: string;
  value: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  type?: "text" | "number" | "date" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  suffix?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  options = [],
  suffix,
  className = "",
  disabled = false,
  error = false,
  helperText,
}) => {
  const commonSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "var(--color-base-100)",
      borderRadius: "8px",
      transition: "all 0.2s ease-in-out",
      "& fieldset": {
        borderColor: "var(--color-base-300)",
        borderWidth: "1.5px",
      },
      "&:hover": {
        backgroundColor: "var(--color-base-200)",
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
      "&.Mui-disabled": {
        backgroundColor: "var(--color-base-200)",
        opacity: 0.6,
        "& fieldset": {
          borderColor: "var(--color-base-300)",
        },
      },
      "& input": {
        color: "var(--color-base-content)",
        fontSize: "14px",
        "&::placeholder": {
          color: "var(--color-base-content)",
          opacity: 0.6,
        },
        "&::-webkit-calendar-picker-indicator": {
          filter: "invert(0.5)",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
          },
        },
      },
      "& textarea": {
        color: "var(--color-base-content)",
        "&::placeholder": {
          color: "var(--color-base-content)",
          opacity: 0.6,
        },
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
      "&.Mui-disabled": {
        color: "var(--color-base-content)",
        opacity: 0.4,
      },
      "&.MuiInputLabel-shrink": {
        backgroundColor: "var(--color-base-100)",
        padding: "0 8px",
        borderRadius: "4px",
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
    "& .MuiFormHelperText-root": {
      color: "var(--color-base-content)",
      fontSize: "12px",
      marginTop: "4px",
      opacity: 0.7,
      "&.Mui-error": {
        color: "var(--color-error)",
        opacity: 1,
      },
    },
    // Error state
    "&.Mui-error": {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "var(--color-error)",
        },
        "&:hover fieldset": {
          borderColor: "var(--color-error)",
        },
        "&.Mui-focused": {
          boxShadow: `0 0 0 3px color-mix(in srgb, var(--color-error) 15%, transparent)`,
          "& fieldset": {
            borderColor: "var(--color-error)",
          },
        },
      },
      "& .MuiInputLabel-root": {
        "&.Mui-focused": {
          color: "var(--color-error)",
        },
      },
    },
    width: "100%",
  };

  // Select specific styling
  const selectSx = {
    ...commonSx,
    "& .MuiSelect-select": {
      color: "var(--color-base-content)",
      fontSize: "14px",
      backgroundColor: "var(--color-base-100)",
      "&:focus": {
        backgroundColor: "var(--color-base-100)",
      },
    },
    "& .MuiSelect-icon": {
      color: "var(--color-base-content)",
      opacity: 0.7,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-base-300)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary)",
    },
  };

  if (type === "textarea") {
    return (
      <Box className={className} sx={{ mb: 2 }}>
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          error={error}
          helperText={helperText}
          multiline
          rows={4}
          variant="outlined"
          sx={commonSx}
        />
      </Box>
    );
  }

  if (type === "select") {
    return (
      <Box className={className} sx={{ mb: 2 }}>
        <FormControl
          variant="outlined"
          sx={selectSx}
          error={error}
          size="small"
        >
          <InputLabel
            required={required}
            sx={{
              color: "var(--color-base-content)",
              opacity: 0.8,
              "&.Mui-focused": {
                color: error ? "var(--color-error)" : "var(--color-primary)",
              },
            }}
          >
            {label}
          </InputLabel>
          <Select
            name={name}
            value={value}
            onChange={(event) =>
              onChange({ ...event, target: event.target } as any)
            }
            label={label}
            disabled={disabled}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "var(--color-base-100)",
                  border: "1px solid var(--color-base-300)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "& .MuiMenuItem-root": {
                    color: "var(--color-base-content)",
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "var(--color-base-200)",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-primary-content)",
                      "&:hover": {
                        backgroundColor: "var(--color-primary)",
                        opacity: 0.9,
                      },
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value="" disabled>
              <Typography
                variant="body2"
                sx={{
                  color: "var(--color-base-content)",
                  opacity: 0.6,
                  fontSize: "14px",
                }}
              >
                Select {label}
              </Typography>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {helperText && (
            <Typography
              variant="caption"
              sx={{
                mt: 1,
                ml: 1.5,
                color: error
                  ? "var(--color-error)"
                  : "var(--color-base-content)",
                opacity: error ? 1 : 0.7,
                fontSize: "12px",
              }}
            >
              {helperText}
            </Typography>
          )}
        </FormControl>
      </Box>
    );
  }

  return (
    <Box className={className} sx={{ mb: 2 }}>
      <TextField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        error={error}
        helperText={helperText}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: suffix ? (
            <InputAdornment position="end">
              <Typography
                variant="body2"
                sx={{
                  color: "var(--color-base-content)",
                  opacity: 0.7,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {suffix}
              </Typography>
            </InputAdornment>
          ) : undefined,
        }}
        sx={commonSx}
      />
    </Box>
  );
};

export default FormField;
