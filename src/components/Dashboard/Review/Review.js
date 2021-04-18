import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const [userImage, setUserImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.img = userImage;
    fetch("https://goclean-react.herokuapp.com/addTestimonial", {
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

  const uploadToUserImgBB = (e) => {
    const imageData = new FormData();
    imageData.set("key", "a89f2be130457c34af7b1e3c26f7b012");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setUserImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="mt-5 ml-5">
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            placeholder="Your Name"
            type="text"
            className="form-control col"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Choose Image"
            type="File"
            className="form-control col border-0"
            {...register("img", { required: true })}
            onChange={(event) => uploadToUserImgBB(event)}
          />
          {errors.img && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            placeholder="Company's Name, Designation"
            type="text"
            className="form-control"
            {...register("company", { required: true })}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Enter Description"
            className="form-control"
            rows="4"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <input className="form-control w-25 btn-dark" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Review;
