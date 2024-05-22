import React from "react";
import { useForm } from "react-hook-form";

function Testing() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can add your validation logic here
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 space-y-48">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 shadow-md p-4 h-3/4 w-1/4 flex space-y-4 flex-col"
      >
        <div className="m-2 w-full">
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="border p-2 w-full"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="m-2 w-full">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 w-full"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="m-2 w-full">
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 w-full"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <input type="file" {...register("file")} />
        {errors.file && (
          <span className="text-red-500">{errors.file.message}</span>
        )}

        <div className="m-2 w-full">
          <input
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Testing;
