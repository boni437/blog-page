import React from 'react'

function EditPost() {
  return (
    <div className="mt-32 mb-32 w-1/2 mx-auto">
      <form onSubmit="">
        <input
          className="w-full my-4 py-2 px-3 border-[1px] outline-none "
          type="text"
          // id="title"
          placeholder="Title"
        />
        <input
          className="w-full my-4 py-2 px-3 border-[1px] outline-none "
          type="text"
          placeholder="Author"
        />

        <textarea
          className="w-full my-4 py-2 px-3 border-[1px] outline-none min-h-44"
          type="text"
          placeholder="description"
        />

        <input
          type="file"
          accept="image/*"
          // value={file}
          className=" w-full mt-5 py-2 px-2 border-[1px] outline-none"
        />

        <button
          className="w-full my-4 py-2 px-3 border-[1px] bg-green-300 outline-none"
          type="submit"
        ></button>
      </form>
    </div>
  );
}

export default EditPost