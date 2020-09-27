export const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Min 3 characters";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length < 2) {
    errors.lastname = "Min 2 characters";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 6) {
    errors.phone = "Min 6 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.emailConfirm) {
    errors.emailConfirm = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailConfirm)
  ) {
    errors.emailConfirm = "Invalid email address";
  } else if (values.emailConfirm !== values.email) {
    errors.emailConfirm = "Emails do not match";
  }

  return errors;
};
