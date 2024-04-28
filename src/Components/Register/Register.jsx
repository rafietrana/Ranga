import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const profile = form.profile.value;
        const password = form.password.value;
        console.log(name, email, profile, password);
        if (name === "" || email === "" || profile === "" || password === "") {
            toast.error("Input must not be empty!")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Email address is not valid!");
        } else if (!(password.match(/[a-z]/) && password.match(/[A-Z]/))) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter");
        } else if (!(password.length >= 6)) {
            toast.error("Password must be at least 6 characters!");
        } else {
            createUser(email, password)
                .then((result) => {
                    console.log(result)
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: profile
                      }).then(() => {
                      }).catch((error) => {
                      });
                    toast.success("User Created Successfully!");
                    e.target.reset();
                })
                .catch((error) => {
                    console.log(error)
                    toast.error("User already added!");
                })
        }
    }
    return (
        <><Fade><div className='bg-[#E5E2DB] px-2'>
        <Helmet>
    <title>Ranga-Registration</title>
  </Helmet>
        <Toaster />
        <form onSubmit={handleRegister} className='flex justify-center text-center'>
            <div className='bg-[#ffffff] rounded-md p-10 my-20 shadow'>
                <h1 className='text-[30px] font-mono'>Registration</h1>
                <p className='max-w-[300px] m-auto mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-7 items-center'>
                    <div className=''>
                        <input name='name' className='h-[50px] w-full bg-transparent border-black border pl-5' type="name" placeholder='Enter your name' />
                        <input name='profile' className='h-[50px] mt-3 w-full bg-transparent border-black border pl-5' type="text" placeholder='Enter your photo URL' />
                    </div>
                    <div className=''>
                        <input name='email' className='h-[50px] mt-3 w-full bg-transparent border-black border pl-5' type="email" placeholder='Enter your email' />
                        <input name='password' className='h-[50px] my-3 w-full bg-transparent border-black border pl-5' type="password" placeholder='Enter your password' />
                    </div>
                    <div className='text-left mb-3 text-[14px] max-w-[520px]'>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    </div>
                    <span>Don't have an accoutn? <Link to="/login"><span className='font-bold'>Login</span></Link></span>
                    <div className='flex justify-center'>
                    <button className='bg-transparent py-2 max-w-30 border-black border text-black w-[120px] rounded-full mt-3 hover:bg-black hover:text-white mb-2'>Register</button>
                    </div>
                </div>
            </div>
        </form>
    </div></Fade></>
    );
};

export default Register;