export const validate = (values) => {
  const errors = {};
  if (!values.name.value) {
    errors.name = "Required";
  } else if (values.name.value.length < 3) {
    errors.name = "Min 3 characters";
  }

  if (!values.lastname.value) {
    errors.lastname = "Required";
  } else if (values.lastname.value.length < 2) {
    errors.lastname = "Min 2 characters";
  }

  if (!values.phone.value) {
    errors.phone = "Required";
  } else if (values.phone.value.length < 6) {
    errors.phone = "Min 6 characters";
  }

  if (!values.email.value) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.value)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.emailConfirm.value) {
    errors.emailConfirm = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailConfirm.value)
  ) {
    errors.emailConfirm = "Invalid email address";
  } else if (values.emailConfirm.value !== values.email.value) {
    errors.emailConfirm = "Emails do not match";
  }

  return errors;
};
