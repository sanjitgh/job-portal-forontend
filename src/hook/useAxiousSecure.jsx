import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
const axiousInstant = axios.create({
  baseURL: "https://job-portal-server-theta-three.vercel.app",
  withCredentials: true,
});
const useAxiousSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiousInstant.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/signin");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiousInstant;
};

export default useAxiousSecure;
