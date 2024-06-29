import { Fragment, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";
import Dropzone from "react-dropzone";
import image1 from "./image1.svg";
import image2 from "./image2.svg";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  college: yup.string().required("required"),
  pseudoName: yup.string().required("required"),
  picture: yup.mixed().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  college: "",
  pseudoName: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picture", values.picture);

    try {
      const savedUserResponse = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: formData,
      });
      const savedUser = await savedUserResponse.json();

      if (savedUser) {
        setPageType("login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      onSubmitProps.resetForm();
    }
  };

  const login = async (values, onSubmitProps) => {
    try {
      const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!loggedInResponse.ok) {
        throw new Error("Login failed");
      }

      const loggedIn = await loggedInResponse.json();
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid credentials. Please check your email and password.");
    } finally {
      onSubmitProps.resetForm();
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    setErrorMessage("");
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Fragment>
      <div className={`flex flex-col ${isLogin ? "md:flex-col-reverse md:mt-0" : "md:flex-row md:mt-16"} w-full mx-auto pb-20 justify-around`}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
          validationSchema={isLogin ? loginSchema : registerSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form
              onSubmit={handleSubmit}
              className={`w-full md:w-[40%] ${isLogin ? "mx-auto" : ""} flex flex-col justify-center`}
            >
              <div
                className="grid gap-8 mb-4"
                style={{
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                }}
              >
                {isRegister && (
                  <>
                    <div className="col-span-2">
                      
                        <input
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          placeholder="First Name * "
                          className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                        />
                        {touched.firstName && errors.firstName && (
                          <div className="text-red-500 text-sm">{errors.firstName}</div>
                        )}
                      
                    </div>
                    <div className="col-span-2">
                      
                        <input
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          placeholder="Last Name *"
                          className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                        />
                        {touched.lastName && errors.lastName && (
                          <div className="text-red-500 text-sm">{errors.lastName}</div>
                        )}
                     
                    </div>
                    <div className="col-span-4">
                      
                        <input
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.college}
                          name="college"
                          placeholder="College"
                          className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                        />
                        {touched.college && errors.college && (
                          <div className="text-red-500 text-sm">{errors.college}</div>
                        )}
                      
                    </div>
                    <div className="col-span-4">
                      
                        <input
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.pseudoName}
                          name="pseudoName"
                          placeholder="Pseudo Name"
                          className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                        />
                        {touched.pseudoName && errors.pseudoName && (
                          <div className="text-red-500 text-sm">{errors.pseudoName}</div>
                        )}
                      
                    </div>
                    <div className="col-span-4 border border-gray-300 border-solid rounded-md p-4">
                      <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) =>
                          setFieldValue("picture", acceptedFiles[0])
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer"
                          >
                            <input {...getInputProps()} />
                            {!values.picture ? (
                              <p>Add Picture Here</p>
                            ) : (
                              <div className="flex justify-between items-center">
                                <span>{values.picture.name}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </>
                )}

                <div className="col-span-4">
                  
                    <input
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      placeholder="Email *"
                      className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                  
                </div>
                <div className="col-span-4">
                  
                    <input
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      placeholder="Password *"
                      className="w-full border-[0.01px] text-center py-2 text-sm rounded-lg border-slate-300"
                    />
                    {touched.password && errors.password && (
                      <div className="text-red-500 text-sm">{errors.password}</div>
                    )}
                  
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-center mb-2">
                  {errorMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full p-4 mt-4 bg-blue-500 text-white"
                >
                  {isLogin ? "LOGIN" : "REGISTER"}
                </button>
                <div
                  onClick={() => {
                    setPageType(isLogin ? "register" : "login");
                    resetForm();
                    setErrorMessage(""); 
                  }}
                  className="text-center mt-4 text-blue-500 cursor-pointer"
                >
                  {isLogin
                    ? "Don't have an account? Sign Up here."
                    : "Already have an account? Login here."}
                </div>
              </div>
            </form>
          )}
        </Formik>

        <div className={`hidden md:flex flex-col justify-center ${isLogin ? "mx-auto mt-8 mb-8":""} items-center w-[40%]`}>
          {isLogin ? (
            <img src={image1} alt="Login Illustration"  className="h-[30%]"/>
          ) : (
            <img src={image2} alt="Register Illustration" />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
