import * as yup from "yup";

export const Validations = {
  validate: <T>(
    value: T,
    validationSchema: yup.Schema<T>,
  ): ValidationResult => {
    try {
      validationSchema.validateSync(value);
      return { isValid: true };
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        return { isValid: false, error: err.message };
      }
      return { isValid: false, error: "Validation failed" };
    }
  },

  validateForm: <T extends object>(
    formData: T,
    validationSchema: yup.ObjectSchema<T>,
  ): FormValidationResult => {
    try {
      validationSchema.validateSync(formData, { abortEarly: false });
      return { isValid: true };
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors: Record<string, string> = {};
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
        return { isValid: false, errors };
      }
      return { isValid: false, errors: { form: "Validation failed" } };
    }
  },
};

export const fullnameSchema = yup
  .string()
  .required("Full name is required")
  .min(2, "Full name must be at least 2 characters")
  .max(50, "Full name must be at most 50 characters")
  .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces");

export const houseSchema = yup
  .string()
  .required("House/Flat number is required")
  .min(1, "House number must be at least 1 character")
  .max(20, "House number must be at most 20 characters")
  .matches(
    /^[a-zA-Z0-9\-\/\s,.#]+$/, // Added comma, period, and hash
    "House number can contain letters, numbers, hyphens, slashes, commas, periods, and hash symbols",
  );

export const streetSchema = yup
  .string()
  .required("Street address is required")
  .min(3, "Street address must be at least 3 characters")
  .max(100, "Street address must be at most 100 characters");

export const pincodeSchema = yup
  .string()
  .required("Pincode is required")
  .matches(/^[1-9][0-9]{5}$/, "Please enter a valid 6-digit pincode")
  .length(6, "Pincode must be exactly 6 digits");

export const emailSchema = yup
  .string()
  .required("Email is required")
  .email("Please enter a valid email address")
  .max(50, "Email must be at most 50 characters");

export const phoneSchema = yup
  .string()
  .required("Phone number is required")
  .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
  .length(10, "Phone number must be exactly 10 digits");

export const userProfileSchema = yup.object().shape({
  fullname: fullnameSchema,
  house: houseSchema,
  street: streetSchema,
  pincode: pincodeSchema,
  email: emailSchema,
  phone: phoneSchema,
});
