import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        navigate("/");
        window.location.reload();
      } else if (res.status === 401 || !res) {
        window.alert("Please Logout Later");
      } else {
        window.alert(res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
};

export default Logout;
