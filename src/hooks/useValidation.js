// Validation rules for different field types
const validationRules = {
  firstName: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message:
      "First name can only contain letters, spaces, hyphens, and apostrophes",
  },
  lastName: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message:
      "Last name can only contain letters, spaces, hyphens, and apostrophes",
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message:
      "Password must contain uppercase, lowercase, number, and special character",
  },
  company: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s'&,\\-]+$/,
    message:
      "Company name can only contain letters, numbers, spaces, and symbols like &, -, ', .",
    optional: true,
  },
};

//  Main validation function
export function useValidation(formData = {}) {
  const errors = {};
  let isFormValid = true;

  // Iterate through only the fields provided
  Object.entries(formData).forEach(([fieldName, fieldValue]) => {
    // Skip if field not in validation rules
    if (!validationRules[fieldName]) return;

    const rules = validationRules[fieldName];
    const value = String(fieldValue || "").trim();

    // Check if field is empty
    if (!value) {
      // Skip empty check for optional fields
      if (rules.optional) return;
      errors[fieldName] =
        `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      isFormValid = false;
      return;
    }

    // Check minimum length
    if (rules.minLength && value.length < rules.minLength) {
      errors[fieldName] =
        `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${rules.minLength} characters`;
      isFormValid = false;
      return;
    }

    // Check maximum length
    if (rules.maxLength && value.length > rules.maxLength) {
      errors[fieldName] =
        `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must not exceed ${rules.maxLength} characters`;
      isFormValid = false;
      return;
    }

    // Check pattern matching
    if (rules.pattern && !rules.pattern.test(value)) {
      errors[fieldName] = rules.message;
      isFormValid = false;
    }
  });

  return {
    isFormValid,
    errors,
  };
}
