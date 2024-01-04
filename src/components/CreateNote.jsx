import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { useForm } from "react-hook-form";

const CreateNote = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //for card colors
  let i = 0;
  function color() {
    let randomColors = [
      "#c2ff3d",
      "#ff3de8",
      "#3dc2ff",
      "#04e022",
      "#bc83e6",
      "#ebb328",
    ];
    const randomIdx = Math.floor(Math.random() * randomColors.length);
    const randomColor = randomColors[randomIdx];

    // console.log(randomColor);
    return randomColor;
  }

  const onSubmit = async (data) => {
    // console.log(data);
    const title = data.title;
    const description = data.description;
    const bgColor = color();
    const noteAddedTime = new Date();
    console.log(title, description, noteAddedTime, bgColor);
    setModalOpen(false);
    // const newTask = {
    //   title,
    //   description,
    //   deadline,
    //   priority,
    //   status,
    //   taskAddedTime,
    //   email,
    // };

    // const taskPost = await postATask(newTask);

    // console.log(taskPost);

    //    alert('done')
    // refetch();
    reset();
  };

  return (
    <div>
      <div className="w-[300px] h-[300px] text-white  bg-[#4e545b] flex justify-center flex-col items-center ">
        <h3 className="text-2xl mb-4">Create new note</h3>
        <FaPlus
          onClick={openModal}
          className="text-6xl cursor-pointer border-2 rounded-full border-dashed p-2"
        ></FaPlus>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4">
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Type here"
              className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
            />
            {errors.title?.type === "required" && (
              <p role="alert" className="text-red-500">
                Title is required
              </p>
            )}
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder="Type here"
              className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
            />
            {errors.description?.type === "required" && (
              <p role="alert" className="text-red-500">
                Description is required
              </p>
            )}
          </div>

          <div className="form-control mt-6 flex justify-between">
            <input
              htmlFor="confirmation-modal"
              className="btn cursor-pointer font-bold px-4 w-full text-center flex justify-center py-2 rounded   text-white bg-[#82a13e] hover:bg-gray-400 duration-500 hover:border-transparent"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNote;
