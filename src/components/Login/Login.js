import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import BtnLogin from "../Buttons/BtnLogin";
import { useAuth } from "../../helper/LoginContext";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { fireBaseError, login } = useAuth();

  const history = useHistory();

  const loginHandler = async (data) => {
    try {
      await login(data);
      history.push("/profiel");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-login">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className={styles["form-login"]}
      >
        <div className={styles["header-login"]}>
          <h1>Inloggen</h1>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email-input" className={styles["input-fields"]}>
            uw e-mail
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="voer e-mailadres in"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p id="email-error" className={styles["error-text"]} role="alert">
              Verplicht veld
            </p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="passWordInput" className={styles["input-fields"]}>
            uw wachtwoord
          </label>
          <input
            type="password"
            name="password"
            id="passWordInput"
            placeholder="voer uw wachtwoord in"
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className={styles["error-text"]} role="alert">
              Verplicht veld
            </p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <p id="firebase-error">{fireBaseError}</p>
        </div>
        <div className={styles["btn-login"]}>
          <BtnLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
