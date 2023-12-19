export const findList = (list, value) =>
  list.find((i) => i.value === value)?.label;

export const validationSessionUser = (user) => {
  if (!user) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }
};

export const currency = (total, fixed = 2) => {
  return parseFloat(total)
    .toFixed(fixed)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

import { toast } from "react-toastify";

const toastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const handleSuccess = (message) => {
  toast.success(message, toastOptions);
};

export const handleError = (err) => {
  toast.error(err?.message || err || "Ocurrio un error", toastOptions);
};

export const handleWarning = (warning) => {
  toast.warn(warning?.message || warning || "Ocurrio un error", toastOptions);
};
