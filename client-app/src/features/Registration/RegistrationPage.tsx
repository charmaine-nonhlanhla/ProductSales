import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import registrationImage from "../../assets/Backgrounds/slideshow4.jpg";
import { useStore } from "../../app/stores/store";
import { UserFormValues } from "../../app/models/user";
import "../Registration/RegistrationPage.css";

export default observer(function RegistrationPage() {
  const { userStore } = useStore();
  const [error, setError] = useState<string | null>(null);

  const initialValues: UserFormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
        "Password must be 4-8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="registration-background">
      <div className="registration-container">
        <img
          className="register-image"
          src={registrationImage}
          alt="Registration Background"
        />
        <h1 className="registration-header">
          Welcome to Fresh Harvest Market!
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              await userStore.register(values);
            } catch (error: any) {
              setError(error.response.data);
            }
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div className="register-fullname-div">
                <label className="register-fullname-text" htmlFor="username">
                  Full Name
                </label>
                <Field
                  className="register-fullname-field"
                  name="username"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              <div className="register-email-div">
                <label className="register-email-text" htmlFor="email">
                  Email
                </label>
                <Field
                  className="register-email-field"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="register-password-div">
                <label className="register-password-text" htmlFor="password">
                  Password
                </label>
                <Field
                  className="register-password-field"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="register-confirmpassword-div">
                <label
                  className="register-confirmpassword-text "
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  className="register-confirmpassword-field"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>

              {error && <div className="error">{error}</div>}

              <button
                type="submit"
                className="register-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});
