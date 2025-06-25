import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, profileUpdate, signGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...newUserData } = Object.fromEntries(
      formData.entries()
    );

    const userProfile = {
      email,
      ...newUserData,
    };

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!strongPassword.test(password)) {
      setError(
        "Password must contain at least one number and one special character"
      );
      toast.error(
        "Password must contain at least one number and one special character"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        profileUpdate(newUserData.name, newUserData.photoURL)
          .then(() => {
            fetch("https://recipe-server-three.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userProfile),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("Registration successful");
                  navigate("/");
                  form.reset();
                }
              });
          })
          .catch((error) => {
            setError(error.code.split("/")[1]);
            toast.error(error.code.split("/")[1]);
          });
      })
      .catch((error) => {
        setError(error.code.split("/")[1]);
        toast.error(error.code.split("/")[1]);
        // console.log(error.code);
      });
  };

  const handleGoogleLogin = () => {
    signGoogle()
      .then((result) => {
        const googleUser = result.user;
        const { displayName, photoURL, email } = googleUser;
        const userGoogleProfile = { name: displayName, email, photoURL };

        fetch("https://recipe-server-three.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userGoogleProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Registration successful");
              navigate("/");
            }
          });
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
        <h1 className="text-2xl font-medium text-black">Register</h1>
        {error && (
          <div className="flex flex-col space-y-2 bg-red-50 p-4 rounded-lg">
            <p className="text-red-500 text-xs">{error}</p>
          </div>
        )}

        <div>
          <form className=" flex flex-col space-y-3" onSubmit={heandleSubmit}>
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name="photoURL"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your PhotoURL"
              required
            />

            <input
              type="password"
              name="password"
              className="p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Enter your password"
              required
            />

            <button
              type="submit"
              className="cursor-pointer text-black hover:bg-green-600 hover:text-white bg-green-200   rounded-3xl px-4 py-2 font-medium"
            >
              Register
            </button>
            <p className="text-center text-black">or</p>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center text-black justify-center gap-2 cursor-pointer   rounded-3xl px-4 py-2 font-medium border border-gray-200 hover:bg-gray-100"
            >
              <FcGoogle />
              Register with Google
            </button>

            <div>
              <p className="text-center text-black">
                Already have an account{" "}
                <Link
                  to="/auth/login"
                  className="text-green-600 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
