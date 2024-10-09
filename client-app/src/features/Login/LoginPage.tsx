import { observer } from "mobx-react-lite";
import "../Login/LoginPage.css";
import loginImage from "../../assets/Backgrounds/slideshow4.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useStore } from "../../app/stores/store";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { UserFormValues } from "../../app/models/user";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default observer(function LoginPage() {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const registerPage = () => {
    navigate("/register");
  };

  const handleSubmit = async (
    values: UserFormValues,
    { setErrors }: FormikHelpers<UserFormValues>
  ) => {
    try {
      await userStore.login(values);
    } catch (error) {
      setErrors({ email: "Invalid email or password." });
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <img className="login-image" src={loginImage} alt="Login Background" />
        <div className="login-contents">
          <h1 className="login-header">Welcome to Fresh Harvest Market!</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="login-form" autoComplete="off">
                <div className="login-email-div">
                  <label className="email-text" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    className="login-email-field"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="login-password-div">
                  <label className="password-text" htmlFor="password">
                    Password:
                  </label>
                  <Field
                    className="login-password-field"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot Password?
                </Link>
                <div className="buttons">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                  <button
                    type="button"
                    className="register-button"
                    onClick={registerPage}
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});
