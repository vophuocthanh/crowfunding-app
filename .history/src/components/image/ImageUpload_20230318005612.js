import axios from "axios";
import React from "react";
import { imgbbAPI } from "../../config/config";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    console.log("handleUploadImage ~ file:", file);
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    console.log(file[0]);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("handleUploadImage ~ response:", response);
    // onChange(name, response.data.data.url);
  };
  return (
    <label className="w-full rounded-xl border border-dashed border-gray-200 h-[200px] cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
