import React from "react";
import Swal from "sweetalert2";
import { toastErrorNotify } from "./ToastNotify";

const getBaseUrl = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  if (!BASE_URL) {
    throw new Error(
      "REACT_APP_BASE_URL is not defined in the environment variables"
    );
  }

  return BASE_URL;
};

const errorCatcher = <T>(error: T): void => {
  type CustomError = {
    response?: {
      status: number;
      data: { [key: string]: any };
      [key: string]: any; // Typescript index signature
    };
  } & Error; // Error typescript built-in interface'idir

  const customError = error as CustomError;
  if (customError.response !== undefined) {
    toastErrorNotify(
      `Error ${customError.response.status}: ${
        customError.response.data[Object.keys(customError.response.data)[0]]
      }`
    );
  } else {
    console.log("An error occurred:\n", error);
  }
};

interface IDelDialogProps {
  id: number | string;
  delFunc(id: number | string): Promise<void>;
  getFunc(): Promise<void>;
}

// const delDialog = (props: IDelDialogProps): void => {
const delDialog = ({ id, delFunc, getFunc }: IDelDialogProps): void => {
  // const { id, delFunc, getFunc } = props;

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    customClass: {
      popup: "swal2-custom-popup",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const delAndFetch = async (): Promise<void> => {
        try {
          await delFunc(id);
          await getFunc();
        } catch (error) {
          errorCatcher(error);
        }
      };
      delAndFetch();
      Swal.fire({
        title: "Deleted!",
        text: "To-do has been deleted.",
        icon: "success",
        customClass: {
          popup: "swal2-custom-popup",
          // icon: "swal2-icon-hide",
        },
      });
    }
  });
};

export { getBaseUrl, errorCatcher, delDialog };
