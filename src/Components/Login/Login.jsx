import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { loginUser, googleLogin, gitHubLogin } = useContext(AuthContext);
  const location = useLocation();
    const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (email === "" || password === "") {
      toast.error("Input must not be empty!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Email address is not valid!");
    } else if (!(password.match(/[a-z]/) && password.match(/[A-Z]/))) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter"
      );
    } else if (!(password.length >= 6)) {
      toast.error("Password must be at least 6 characters!");
    } else {
      loginUser(email, password)
        .then((result) => {
          console.log(result);
          toast.success("User Login Successfully!");
          setTimeout(() => {
            navigate(location.state ? location.state : "/")
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Email or password is invalid!");
        });
    }
  };
  const handleGoogleLogin = () => {
    console.log("hello")
    googleLogin()
    .then((result) => {
      console.log(result)
      toast.success("Account successfully login.");
      setTimeout(() => {
        navigate(location.state ? location.state : "/")
      }, 1000);
    })
    .catch((error) => {
      console.log(error)
      toast.error("Something was wrong.");
    })
  }
  const handleGitHubLogin = () => {
    gitHubLogin()
    .then((result) => {
      console.log(result)
      toast.success("Account successfully login.");
      setTimeout(() => {
        navigate(location.state ? location.state : "/")
      }, 1000);
    })
    .catch((error) => {
      console.log(error)
      toast.error("Something was wrong.");
    })
  }
  return (
    <>
    <Fade><div className="bg-[#E5E2DB] px-2 rounded-md overflow-hidden">
      <Helmet>
        <title>Ranga-Login</title>
      </Helmet>
      <Toaster />
      <div className="bg-[#ffffff] max-w-[600px] rounded-md p-10 m-auto my-20">
      <form onSubmit={handleLogin} className="flex justify-center text-center">
        <div className="">
          <h1 className="text-[30px] font-mono">Login</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-7">
            <input
              className="h-[50px] w-full bg-transparent border-black border pl-5"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="h-[50px] w-full bg-transparent border-black border pl-5 mt-3 mb-5"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <span>
              Don't have an accoutn?{" "}
              <Link to="/registration">
                <span className="font-bold">Register</span>
              </Link>
            </span>
            <div className="flex justify-center mb-3">
              <button className="bg-transparent py-2 max-w-30 border-black border text-black w-[120px] rounded-full mt-3 hover:bg-black hover:text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex gap-3 flex-col my-3">
        <button
          onClick={handleGoogleLogin}
          className="h-[50px] w-full bg-transparent border-black border pl-5 flex justify-center items-center gap-3"
          type="email"
          placeholder="Enter your email"
        >
          <img
            className="h-[20px]"
            src="https://i.ibb.co/ZRrrfwg/google-icon-2048x2048-czn3g8x8.png"
            alt="google"
          />
          <span>Continue With Google</span>
        </button>
        <button onClick={handleGitHubLogin}
          className="h-[50px] w-full bg-transparent border-black border pl-5 flex justify-center items-center gap-3"
          type="password"
          placeholder="Enter your password"
        >
          <img
            className="h-[20px]"
            src="https://i.ibb.co/ScG58Zy/github-logo-7880-D80-B8-D-seeklogo-com.png"
            alt="github"
          />
          <span>Continue With GitHub</span>
        </button>
      </div>
      </div>
    </div></Fade>
    </>
  );
};

export default Login;
