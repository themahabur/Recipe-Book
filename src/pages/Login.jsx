import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, signGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    loginUser(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode.split("/")[1]);
      });
  };

  const handleGoogleLogin = () => {
    signGoogle()
      .then(() => {
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((error) => {
        setError(error.code.split("/")[1]);
        toast.error(error.code.split("/")[1]);
        // console.log(error.code);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://images.unsplash.com/photo-1525093831618-8c7e0a8c3412?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="w-96 bg-white rounded-lg p-10 space-y-4">
        <h1 className="text-2xl font-medium  text-black">Login</h1>
        {error && (
          <div className="flex flex-col space-y-2 bg-red-50 p-4 rounded-lg">
            <p className="text-red-500 text-xs">{error}</p>
          </div>
        )}
        <div>
          <form className=" flex flex-col space-y-3" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your password"
              required
            />
            <p className="cursor-pointer text-right underline text-sm mb-2 text-black">
              Forgot Password
            </p>

            <button
              type="submit"
              className="cursor-pointer text-black hover:bg-green-600 hover:text-white bg-green-200  rounded-3xl px-4 py-2 font-medium"
            >
              Login
            </button>
            <p className="text-center text-black">or</p>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center text-black justify-center gap-2 cursor-pointer   rounded-3xl px-4 py-2 font-medium border border-gray-200 hover:bg-gray-100"
            >
              <FcGoogle />
              Login with Google
            </button>

            <div>
              <p className="text-center text-black">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-green-600 cursor-pointer"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
