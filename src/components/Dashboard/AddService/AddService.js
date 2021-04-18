import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data, e) => {
    const{price} = data;
    data.image = imageUrl;
    data.price = parseInt(price);
    fetch("https://goclean-react.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
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
  const uploadToImgBB = (e) => {
    const imageData = new FormData();
    imageData.set('key', 'a89f2be130457c34af7b1e3c26f7b012');
    imageData.append('image', e.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="mt-5 ml-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col">
            <input
              placeholder="Enter Title"
              type="text"
              className="form-control col"
              {...register("name", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group col">
            <input
              placeholder="Choose Image"
              type="File"
              className="form-control col border-0"
              {...register("image", { required: true })}
              onChange={(event) => uploadToImgBB(event)}
            />
            {errors.image && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <textarea
              placeholder="Enter Description"
              className="form-control"
              rows="4"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group col">
          <input
              placeholder="Enter Price"
              type="number"
              className="form-control col"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <input className="form-control w-25 btn-dark" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
