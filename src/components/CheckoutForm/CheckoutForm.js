import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import { validate } from "./validate";

import styles from "./CheckoutForm.module.scss";

const CheckoutForm = ({ onFormSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(null);
  const [errors, setErrors] = useState({});

  const initialFormState = {
    name: {
      value: "",
      isTouched: false,
    },
    lastname: {
      value: "",
      isTouched: false,
    },
    phone: {
      value: "",
      isTouched: false,
    },
    email: {
      value: "",
      isTouched: false,
    },
    emailConfirm: {
      value: "",
      isTouched: false,
    },
  };

  const [formState, setFormState] = useState(initialFormState);
  const { name, lastname, phone, email, emailConfirm } = formState;
  const {
    name: { value: nameValue },
    lastname: { value: lastnameValue },
    phone: { value: phoneValue },
    email: { value: emailValue },
    emailConfirm: { value: emailConfirmValue },
  } = formState;

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
      [name]: { ...formState[name], value },
    });
  };

  const handleOnBlur = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: { ...formState[e.target.name], isTouched: true },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const buyer = {
      name: nameValue,
      lastname: lastnameValue,
      phone: phoneValue,
      email: emailValue,
    };

    onFormSubmit(buyer);

    return isInvalid ? setIsFormValid(false) : setIsFormValid(true);
  };

  const UserDetails = ({ details }) =>
    details.map((detail) => {
      return (
        <div key={detail.name} className={styles["pre-checkout"]}>
          <span className={styles["field-label"]}>{detail.label}</span>
          <span className={styles["field-value"]}>{detail.name}</span>
        </div>
      );
    });

  const detailFields = [
    {
      label: "Name",
      name: nameValue,
    },
    {
      label: "Lastname",
      name: lastnameValue,
    },
    {
      label: "Phone",
      name: phoneValue,
    },
    {
      label: "Email",
      name: emailValue,
    },
  ];

  return (
    <div className={styles["form"]}>
      {isFormValid ? (
        <>
          <h1 className={styles["subtitle"]}>Your Details</h1>
          <UserDetails details={detailFields} />
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
                value={nameValue}
              />

              {name.isTouched && errors.name && (
                <div className={styles["error"]}>
                  <small>{errors.name}</small>
                </div>
              )}
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
                value={lastnameValue}
              />

              {lastname.isTouched && errors.lastname && (
                <div className={styles["error"]}>
                  <small>{errors.lastname}</small>
                </div>
              )}
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
                value={phoneValue}
              />
              {phone.isTouched && errors.phone && (
                <div className={styles["error"]}>
                  <small>{errors.phone}</small>
                </div>
              )}
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
                value={emailValue}
              />
              {email.isTouched && errors.email && (
                <div className={styles["error"]}>
                  <small>{errors.email}</small>
                </div>
              )}
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
                value={emailConfirmValue}
              />
              {emailConfirm.isTouched && errors.emailConfirm && (
                <div className={styles["error"]}>
                  <small>{errors.emailConfirm}</small>
                </div>
              )}
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
