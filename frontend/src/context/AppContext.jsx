import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//APP CONTEXT
export const AppContext = createContext();

//APP CONTEXT PROVIDER FUNCTION
const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/v1/doctor/get-doctors"
      );
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/v1/user/get-profile",
        { headers: { token } }
      );

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    doctors,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    getUserProfile,
    getDoctorsData,
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      getUserProfile();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
