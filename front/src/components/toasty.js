import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Toasty = {
  notify: (response) => {
    console.log(response);
    if (response.status === 201) {
      toast.success("created card name:" + response.data.name, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })}
       else {
      toast.warn("Ooops, Something Broke", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },

  notifyError: (response) => {


   
      toast.error("Ooops" + response , {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  
};
export default Toasty;
