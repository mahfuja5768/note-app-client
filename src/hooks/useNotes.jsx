import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api";


const useNotes = () => {
  const { refetch, data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/notes");
      // console.log(res.data);
      return res.data;
    },
  });

  return [notes, refetch];
};

export default useNotes;