/** @format */

import { uploadImage } from "api/uploader";
import Button from "components/atom/Button";
import Input from "components/atom/Input";
import React, { useState } from "react";
import useProducts from "hooks/useProducts";

export default function FormArea() {
  const inputStyle =
    "w-800px h-50px my-2 border border-black border-opacity-50 px-5 text-xl font-semibold rounded-xl";
  const buttonStyle =
    "w-400px py-4 mt-5 bg-red-400 text-white hover:brightness-110 rounded-xl";

  const [product, setProduct] = useState();
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    // Firebase에 새로운 제품을 추가
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setIsUploading(false));
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold my-5">새로운 제품 등록</h1>
      {success && <h1 className="text-3xl font-semibold my-5">✅{success}</h1>}
      {file ? (
        <img
          className="w-400px h-400px mb-10 "
          src={URL.createObjectURL(file)}
          alt="파일"
        />
      ) : (
        <img
          className="w-400px h-400px mb-10 "
          src="/asset/logo.png"
          alt="기본"
        />
      )}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Input type="file" name="file" onChange={handleChange} />
        <Input
          styleName={inputStyle}
          type="text"
          value={product?.title ?? ""}
          name="title"
          placeholder="제품명"
          onChange={handleChange}
        />
        <Input
          styleName={inputStyle}
          type="number"
          value={product?.price ?? ""}
          name="price"
          placeholder="가격"
          onChange={handleChange}
        />
        <Input
          styleName={inputStyle}
          type="text"
          value={product?.category ?? ""}
          name="category"
          placeholder="카테고리"
          onChange={handleChange}
        />
        <Input
          styleName={inputStyle}
          type="text"
          value={product?.description ?? ""}
          name="description"
          placeholder="제품 설명"
          onChange={handleChange}
        />
        <Input
          styleName={inputStyle}
          type="text"
          value={product?.options ?? ""}
          name="options"
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleChange}
        />
        <Button styleName={buttonStyle} type="submit" disabled={isUploading}>
          {isUploading ? "업로드 중..." : "제품 등록하기"}
        </Button>
      </form>
    </div>
  );
}
