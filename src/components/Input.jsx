import React from "react";
import { useField } from "formik";
import { Icon } from "@iconify/react";
export const TextInput = ({ ...rest }) => {
  const [field, meta] = useField(rest);
  return (
    <div className="w-full flex flex-col gap-2 sm:min-w-[400px]">
      <label className="text-[14px] text-lightColor tracking-[0.165rem]">
        {rest.label}
      </label>
      <div className="flex relative w-full">
        <div className="absolute top-0 left-0 bottom-0 w-[50px] p-[15px]">
          <Icon icon={rest.icon} color="#496363" height="20" width="20" />
        </div>
        <input
          {...field}
          {...rest}
          className={`pl-[50px] w-full h-[50px] rounded-md bg-backgroundColor text-darkColor tracking-[0.165rem] focus-visible:outline-darkColor placeholder:text-lightColor placeholder:font-robotoSlab placeholder:text-[12px] md:placeholder:text-[14px] placeholder:tracking-[0.165rem] ${
            meta.error && meta.touched ? "outline outline-errorRed" : ""
          } `}
        />
      </div>
      <p
        className={`${
          meta.touched && meta.error ? "flex" : "hidden"
        } font-robotoSlab tracking-[0.165rem] text-[12px] md:text-[14px] text-errorRed`}
      >
        {meta.error}
      </p>
    </div>
  );
};

export const TextAreaInput = (rest) => {
  const [field, meta] = useField(rest);
  return (
    <div className="w-full flex flex-col gap-2 sm:min-w-[400px]">
      <label className="text-[14px] text-lightColor tracking-[0.165rem]">
        {rest.label}
      </label>
      <div className="flex relative w-full">
        <div className="absolute top-0 left-0 bottom-0 w-[50px] p-[15px]">
          <Icon icon={rest.icon} color="#496363" height="20" width="20" />
        </div>
        <textarea
          {...field}
          {...rest}
          className={`pl-[50px] w-full p-[15px] max-h-[150px] min-h-[100px]  rounded-md bg-backgroundColor text-darkColor tracking-[0.165rem] focus-visible:outline-darkColor placeholder:text-lightColor placeholder:font-robotoSlab placeholder:text-[12px] md:placeholder:text-[14px] placeholder:tracking-[0.165rem] ${
            meta.error && meta.touched ? "outline outline-errorRed" : ""
          } `}
        ></textarea>
      </div>
      <p
        className={`${
          meta.touched && meta.error ? "flex" : "hidden"
        } font-robotoSlab tracking-[0.165rem] text-[12px] md:text-[14px] text-errorRed`}
      >
        {meta.error}
      </p>
    </div>
  );
};
