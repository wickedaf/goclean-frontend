import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch("https://goclean-react.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.target.reset();
  };
  return (
    <div className="ml-5 my-5">
      <form className="w-50 d-flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            placeholder="Enter Admin Email"
            type="text"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <input className="form-control w-25 btn-dark" type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
