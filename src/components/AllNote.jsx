/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { noteDetails, removeNote } from "../api/note";
import { useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import axiosPublic from "../api";
import { toast } from "react-toastify";

const AllNote = ({ item, refetch }) => {
  // console.log(item.bgColor);
  const [detail, setDetail] = useState([]);
  const [isDetailViewModalOpen, setDetailViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { description, noteAddedTime, title, noteLastUpdated, _id } =
    detail || {};
  // console.log(noteLastUpdated);
  const handleDetail = async (id) => {
    setDetailViewModalOpen(true);
    const getNote = await noteDetails(id);
    // console.log(getNote[0]);
    setDetail(getNote[0]);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const title = data.title;
    const description = data.description;
    const noteLastUpdated = new Date();
    // console.log(title, description, noteAddedTime, bgColor);

    const newNote = {
      title,
      description,
      noteLastUpdated,
    };
    console.log(item._id);

    const updateNote = await axiosPublic.patch(
      `/update-note/${item._id}`,
      newNote
    );

    console.log(newNote);

    toast.success("Note updated successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setEditModalOpen(false);

    refetch();
    reset();
  };

  const handleRemove = async (id) => {
    console.log(id);
    try {
      const note = await removeNote(id);
      // console.log(review);
      toast.success("Note updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      refetch();
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setEditModalOpen(false);

      refetch();
    }
  };

  return (
    <div>
      <div
        style={{ backgroundColor: item.bgColor }}
        className="shadow-lg h-[300px] w-[300px] flex flex-col justify-between items-center px-5"
      >
        <h2 className="p-2">Title: {item.title}</h2>

        <h2 className="p-2">Description: {item.description}</h2>
        <div className="flex text-primary text-lg justify-between items-end my-3 gap-6">
          <button
            onClick={() => handleDetail(item._id)}
            className="flex justify-center items-center border-2 border-black p-1"
          >
            <FaEye />
          </button>
          <button
            onClick={openEditModal}
            className="flex border-2 border-black p-1 justify-center items-center"
          >
            <MdEdit />
          </button>

          <button
            onClick={() => handleRemove(item._id)}
            className="flex border-2 border-black p-1 justify-center items-center"
          >
            <MdDelete />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isDetailViewModalOpen}
        onClose={() => setDetailViewModalOpen(false)}
      >
        <h2 className="text-2xl font-bold text-center my-3 border-b-2 pb-4">
          Note Details
        </h2>
        <h3 className="font-bold text-lg text-black">Title: {title}</h3>
        <p className="py-3 text-lg font-bold">Description: {description}</p>
        <p className="py-3 text-lg font-bold">
          Note added in: {new Date(noteAddedTime).toLocaleString()}
        </p>
        {noteLastUpdated && (
          <p className="py-3 text-lg font-bold">
            Last updated in: {new Date(noteLastUpdated).toLocaleString()}
          </p>
        )}
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4">
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue={item.title}
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
              defaultValue={item.description}
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
              value="Update"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AllNote;
