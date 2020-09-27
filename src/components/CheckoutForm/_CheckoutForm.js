import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import { validate } from "./validate";

import styles from "./CheckoutForm.module.scss";

const CheckoutForm = ({ onFormSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(null);
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);

  // const initialFormState = {
  //   name: "",
  //   lastname: "",
  //   phone: "",
  //   email: "",
  //   emailConfirm: "",
  // };

  const initialFormState = {
    name: {
      value: "",
      isTouched: false,
      hasError: false,
    },
    lastname: {
      value: "",
      isTouched: false,
      hasError: false,
    },
    // lastname: "",
    // phone: "",
    // email: "",
    // emailConfirm: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const { name, lastname, phone, email, emailConfirm } = formState;

  // const {
  //   name: { value: nameValue },
  //   lastname: { value: lastnameValue },
  // } = formState;

  // const isInvalid =
  //   Object.keys(validate({ name, lastname, phone, email, emailConfirm }))
  //     .length > 0;

  const isInvalid =
    Object.keys(validate({ name, lastname})).length > 0;

  useEffect(() => {
    // setErrors(validate({ name, lastname, phone, email, emailConfirm }));
    setErrors(validate({ name, lastname}));

    if (!isInvalid) {
      setIsFormValid(false);
    }
    // }, [name, lastname, phone, email, emailConfirm, isInvalid]);
  }, [name,lastname ,isInvalid]);

  const handleOnChange = ({ target: { name, value } }) => {
    console.log("name", name);
    console.log("value", value);
    console.log("formState", formState);

    setFormState({
      ...formState,
      // [name]: value,
      [name]: { ...formState[name], value },
    });
  };

  const handleOnBlur = (e) => {
    console.log("e.target", e.target.name);

    setFormState({
      ...formState,
      // ...{ [e.target.name]: { ...formState[e.target.name], isTouched: true } },
      [e.target.name]: { ...formState[e.target.name], isTouched: true },
    });

    console.log("formState", formState);

    // setIsTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onFormSubmit({ name, lastname, phone, email });
    onFormSubmit({ name, lastname });

    return isInvalid ? setIsFormValid(false) : setIsFormValid(true);
  };

  // const FormField = ({ field, type = "text", placeholder }) => (
  //   <div className={styles["input-row"]}>
  //     <label htmlFor={field}>{placeholder}</label>
  //     <input
  //       type={type}
  //       name={field}
  //       id={field}
  //       placeholder={placeholder}
  //       autoComplete="off"
  //       onChange={handleOnChange}
  //       onBlur={handleOnBlur}
  //       value={formState[field]}
  //     />
  //     {isTouched && errors && (
  //       <div className={styles["error"]}>
  //         <small>{errors[field]}</small>
  //       </div>
  //     )}
  //   </div>
  // );

  // const Error = ({ field }) =>
  //   isTouched &&
  //   errors && (
  //     <div className={styles["error"]}>
  //       <small>{errors[field]}</small>
  //     </div>
  //   );

  return (
    <div className={styles["form"]}>
      {isFormValid ? (
        <>
          <h1 className={styles["subtitle"]}>Your Details</h1>

          {/* <div className={styles["pre-checkout"]}>
            <span className={styles["field-label"]}>Name</span>
            <span className={styles["field-value"]}>{name}</span>
          </div>
          <div className={styles["pre-checkout"]}>
            <span className={styles["field-label"]}>Lastname</span>
            <span className={styles["field-value"]}>{lastname}</span>
          </div>
          <div className={styles["pre-checkout"]}>
            <span className={styles["field-label"]}>Phone</span>
            <span className={styles["field-value"]}>{phone}</span>
          </div>
          <div className={styles["pre-checkout"]}>
            <span className={styles["field-label"]}>Email</span>
            <span className={styles["field-value"]}>{email}</span>
          </div> */}
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
                value={formState.name.value}
              />
              {/* {name.isTouched && errors && (
                <div className={styles["error"]}>
                  <small>{errors[name]}</small>
                </div>
              )} */}
              {name.isTouched && errors && (
                <div className={styles["error"]}>
                  <small>touched and {errors[name]}</small>
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
                value={formState.lastname.value}
              />
              {/* {lastname.isTouched && errors && (
                <div className={styles["error"]}>
                  <small>{errors[lastname]}</small>
                </div>
              )} */}
              {formState.lastname.isTouched && (
                <div className={styles["error"]}>
                  <small>touched</small>
                </div>
              )}
            </div>

            {/* <div className={styles["input-row"]}>
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
            </div> */}
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
