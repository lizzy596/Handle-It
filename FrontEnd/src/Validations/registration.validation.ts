export const registrationValidations: {
  name: {
    pattern: {
      value: string;
      message: string;
    };
  };
  age: {
    custom: {
      isValid: (value: string) => boolean;
      message: string;
    };
  };
  email: {
    pattern: {
      value: string;
      message: string;
    };
  };
  password: {
    custom: {
      isValid: (value: string) => boolean;
      message: string;
    };
  };
} = {
  name: {
    pattern: {
      value: '^[A-Za-z]*$',
      message:
        "You're not allowed to use special characters or numbers in your name.",
    },
  },
  age: {
    custom: {
      isValid: (value: string) => parseInt(value, 10) > 17,
      message: 'You have to be at least 18 years old.',
    },
  },
  email: {
    pattern: {
      value: '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;',
      message: 'Must be a valid email address.',
    },
  },
  password: {
    custom: {
      isValid: (value: string) => value.length > 6,
      message: 'The password needs to be at least 6 characters long.',
    },
  },
};