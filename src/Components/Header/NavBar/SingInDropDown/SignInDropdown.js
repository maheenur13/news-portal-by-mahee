import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useForm } from "react-hook-form";
import SignIn from '../../../SignIn/SignIn';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const SignInDropdown = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        Admin Login Options
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    style={{width:'17vw'}}
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">


                            <form className="p-2 mx-3 my-5  " >
                            {/* <label>Enter You Admin Email</label> */}
                                <input className="border p-3" style={{width:'100%'}} placeholder="Enter Your Admin Email" {...register("example")} onSubmit={handleSubmit(onSubmit)} />
                                
                            </form>

                           
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="flex justify-center my-3">
                                            <SignIn />
                                        </div>
                                    )}
                                </Menu.Item>
                        
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default SignInDropdown;