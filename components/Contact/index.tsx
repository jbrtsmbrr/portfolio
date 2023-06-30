"use client";

import sendMessage from "@/lib/sendMessage";
import Image from "next/image";
import React, { useState } from "react";


const initialData = { email: "", message: "" }

const Contact = () => {
  const [state, setState] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let tempErrors = { ...errors };

    if (Object.entries(tempErrors).some(([_, value]) => value !== "")) {
      setErrors(tempErrors);
      return;
    }

    try {
      setSubmitting(true);
      const response = await sendMessage({ email: state.email, message: state.message });
      const data = await response.json();
      if (data?.message === "OK") {
        setState(initialData)
        setErrors(initialData);
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false);
    }
  }

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    let errorMsg = "";

    switch (name) {
      case "email":
        if (value === "") {
          errorMsg = "This field is required.";
        } else {
          const isValidEmail = /^\w+@[a-zA-Z_\s]+?\.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/.test(
            state.email
          )

          if (!isValidEmail) errorMsg = "Please enter a valid email.";
        }
        break;
      case "message":
        if (value === "") {
          errorMsg = "Please enter a valid email."
        }
        break;
      default:
        break;
    }

    setState(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: errorMsg }))
  }

  const disabledBtn = errors.email !== "" || errors.message !== "" || state.email === "" || state.message === "" || submitting;

  return (
    <section id="Contact" className="mt-[80px] px-4 xs:px-0 space-y-8 box-border">
      <div className="text-center space-y-2">
        <h4 className="font-bold text-lg">Contact me</h4>
        <h1 className="font-semibold text-3xl">Ask a question</h1>
        <p className="text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae vel autem molestias adipisci amet beatae accusamus corrupti voluptatum nisi, modi cupiditate ipsa. Culpa quas sint maiores. Maxime, ad amet!</p>
      </div>
      <div className="relative grid grid-cols-2 gap-4 items-center">
        <div className="md:col-span-1 col-span-2">
          <form onSubmit={handleSubmit} className="bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-4">
            <h1 className="font-semibold text-xl text-gray-400 p-2">Say something</h1>
            <input type="text" placeholder="Email" name="email" value={state.email} onChange={handleChange}
              className={`dark:bg-gray-700 dark:text-gray-400 w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 shadow-2xl border ${errors.email ? "border-red-500 border-solid" : "border-transparent"} `} />
            <textarea placeholder="Message" name="message" value={state.message} onChange={handleChange} className={`dark:bg-gray-700 dark:text-gray-400 w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0 shadow-2xl border ${errors.message ? "border-red-500 border-solid" : "border-transparent"}`} />
            <button className="w-full mt-2 py-3 bg-blue-500 disabled:bg-blue-400 disabled:text-gray-200 text-white rounded-lg shadow-md text-xs" disabled={disabledBtn}>{ submitting ? "Submitting..." : "Submit" }</button>
          </form>
        </div>
        <div className="md:relative absolute z-negative h-full w-full">
          <Image alt="spaceship" src="/assets/illustrations/3d-casual-life-convert-megaphone.png" width={250} height={250}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 md:block hidden" />
          <div className="absolute top-0 right-0 z-negative">
            <div className="absolute mix-blend-multiply -top-12 right-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-10 right-12 w-72 h-72 bg-violet-400 rounded-full filter blur-3xl opacity-90 dark:opacity-40 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply md:top-32 md:-left-32 top-8 -left-16 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
