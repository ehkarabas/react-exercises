import axios from "axios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-right", // default top-right
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-right", // default top-right
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-right", // default top-right
  });
};

export const toastConfirmToDoDel = (id, renderer) => {
  const url = process.env.REACT_APP_API_URL;

  async function delToDo() {
    try {
      const response = await axios.delete(`${url}/${id}`);
      if (Math.trunc(response.status / 100) !== 2) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
      await renderer();
    } catch (error) {
      toastErrorNotify(error);
      console.log(error);
    }
  }

  Swal.fire({
    position: "center",
    title: "Do you want to delete the to-do?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Don't delete`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      delToDo();
      Swal.fire("Deleted!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("To-do is not deleted", "", "info");
    }
  });
};

export const toastConfirmToDoDelReducer = (id, dispatcher) => {
  Swal.fire({
    position: "center",
    title: "Do you want to delete the to-do?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Don't delete`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatcher(id);
      Swal.fire("Deleted!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("To-do is not deleted", "", "info");
    }
  });
};
