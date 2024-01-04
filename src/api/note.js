import axiosPublic from ".";


export const postNote = async (note) => {
  // console.log(review)
  const { data } = await axiosPublic.post("/notes", note);
  return data;
};
export const removeNote = async (id) => {
  // console.log(review)
  const { data } = await axiosPublic.delete(`/notes/${id}`);
  return data;
};

export const noteDetails = async (id) => {
  const { data } = await axiosPublic.get(`/notes/${id}`);
  return data;
};