import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from '../services/user-service';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        userName: '',
        fullName: '',
        phoneNumber: '',
        address: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission here, you can access form data from 'formData' state
        if (!formData.email || !formData.password || !formData.address || !formData.userName || !formData.fullName || !formData.phoneNumber) {
            toast.error('Fill in all fields');
            return;
        }
        console.log('Form Data:', formData);

        //validation 

        //call server api to send data 
        Register(formData).then((resp) => {
            console.log(resp)
            console.log("sucess log")
            toast.success("User Registered Successfully")
        }).catch((error) => {
            console.log(error)
            console.log("error log")
        })
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='flex justify-center items-center h-screen'>

            <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-300'>
                <h1 className='text-5xl font-semibold'>Register Page</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Hello! Please enter your details.</p>

                <div className='mt-8'>

                    {/* Username */}
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your Username" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your Fullname" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="phoneNumber"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your Phone Number" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your Address" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your email" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-lg font-medium' htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your Password" />
                            {/* <span
                                className="absolute right-4 top-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 4.6a1 1 0 00-1.4 0l-1.32 1.32A9.917 9.917 0 0012 4a9.917 9.917 0 00-5.68 1.92L4.6 4.6a1 1 0 10-1.4 1.4l14 14a1 1 0 001.4 0l1.32-1.32A9.917 9.917 0 0020 12c0-2.43-.88-4.67-2.36-6.38L19.4 4.6zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            </span> */}
                        </div>
                    </div>

                    {/* Checkbox to show password */}
                    <div className='flex items-center mt-4'>
                        <input
                            type="checkbox"
                            id="showPasswordCheckbox"
                            className="mr-2"
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="showPasswordCheckbox" className="text-lg font-medium text-gray-700 cursor-pointer">Show Password</label>
                    </div>

                    {/* signin */}
                    <form onSubmit={handleSubmit} >
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign Up</button>
                        </div>
                    </form>
                    {/*  account created */}
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Already Signed In?</p>
                        <Link to="/login" className='ml-2 font-medium text-base text-violet-500'>log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
