import axiosPublic from ".";


export const postATask = async (task) => {
  // console.log(review)
  const { data } = await axiosPublic.post("/tasks", task);
  return data;
};
export const removeTask = async (id) => {
  // console.log(review)
  const { data } = await axiosPublic.delete(`/tasks/${id}`);
  return data;
};

export const taskDetails = async (id) => {
  const { data } = await axiosPublic.get(`/tasks/${id}`);
  return data;
};