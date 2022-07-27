import { changeCase } from "../utils";

export const validateForm = (obj) => {
  let error = { title: "", value: "" };
  let isValid = true;
  for (let [key, value] of Object.entries(obj)) {
    //validate empty fields
    ////////////////////////////
    if (value.trim() === "") {
      const newKey = changeCase(key);
      error = {
        ...error,
        title: newKey + " Error:",
        value: "This field is required",
      };
      isValid = false;
      break;
    }

    //validate password
    ///////////////////////////
    if (key === "password" && value.length < 6) {
      error = {
        ...error,
        title: "Password Error:",
        value: "Password must be at least 6 characters",
      };
      isValid = false;
      break;
    }

    //validate confirm password
    ////////////////////////////////
    if (key === "confirmPwd" && value !== obj.password) {
      error = {
        ...error,
        title: "Password Error:",
        value: "Password does not match",
      };
      isValid = false;
      break;
    }

    //Validate email
    /////////////////////////////
    if (key === "email" && !value.includes("@")) {
      error = {
        ...error,
        title: "Email Error:",
        value: "Email is not valid",
      };
      isValid = false;
      break;
    }

    //Validate Phone Number
    //////////////////////////////
    if (key === "phoneNumber" && value.length !== 10) {
      error = {
        ...error,
        title: "Phone Number Error:",
        value: "Phone Number is not valid",
      };
      isValid = false;
      break;
    }
  }
  return { isValid, error };
};

export const formatCurrency = (value) => {
  const formated = Number(value).toLocaleString("en-US");
  return formated === "0" ? "" : formated;
};
