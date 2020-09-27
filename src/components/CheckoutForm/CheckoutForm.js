import React, { useState, useEffect } from "react";

import Button from "../../components/Button/Button";

import { validate } from "./validate";

import styles from "./CheckoutForm.module.scss";

const CheckoutForm = ({ onFormSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(null);
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);

  const initialFormState = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    emailConfirm: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const { name, lastname, phone, email, emailConfirm } = formState;

  const isInvalid =
    Object.keys(validate({ name, lastname, phone, email, emailConfirm }))
      .length > 0;

  useEffect(() => {
    setErrors(validate({ name, lastname, phone, email, emailConfirm }));

    if (!isInvalid) {
      setIsFormValid(false);
    }
  }, [name, lastname, phone, email, emailConfirm, isInvalid]);

  const handleOnChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleOnBlur = (e) => {
    setIsTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name, lastname, phone, email });

    return isInvalid ? setIsFormValid(false) : setIsFormValid(true);
  };

  const Error = ({ field }) =>
    isTouched &&
    errors && (
      <div className={styles["error"]}>
        <small>{errors[field]}</small>
      </div>
    );

  const userDetails = (details) =>
    details.map((detail) => {
      return (
        <div className={styles["pre-checkout"]}>
          <span className={styles["field-label"]}>{detail.label}</span>
          <span className={styles["field-value"]}>{detail.name}</span>
        </div>
      );
    });

  const detailFields = [
    {
      label: "Name",
      name: name,
    },
    {
      label: "Lastname",
      name: lastname,
    },
    {
      label: "Phone",
      name: phone,
    },
    {
      label: "Email",
      name: email,
    },
  ];

  return (
    <div className={styles["form"]}>
      {isFormValid ? (
        <>
          <h1 className={styles["subtitle"]}>Your Details</h1>
          {userDetails(detailFields)}
        </>
      ) : (
        <>
          <h1 className={styles["subtitle"]}>Add your Details</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles["input-row"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={name}
              />
              <Error field="name" />
            </div>

            <div className={styles["input-row"]}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={lastname}
              />
              <Error field="lastname" />
            </div>

            <div className={styles["input-row"]}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={phone}
              />
              <Error field="phone" />
            </div>

            <div className={styles["input-row"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={email}
              />
              <Error field="email" />
            </div>

            <div className={styles["input-row"]}>
              <label htmlFor="emailConfirm">Email Confirm</label>
              <input
                type="email"
                name="emailConfirm"
                id="emailConfirm"
                placeholder="Email Confirm"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={emailConfirm}
              />
              <Error field="emailConfirm" />
            </div>

            <div className={styles["input-row"]}>
              <Button
                disabled={isInvalid}
                type="terciary"
                label="Confirm"
                handleClick={() => formState}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
