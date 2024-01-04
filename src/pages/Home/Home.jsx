import { ToastContainer } from "react-toastify";
import CreateNote from "../../components/CreateNote";
import AllNotes from "../../components/AllNotes";
import useNotes from "../../hooks/useNotes";

const Home = () => {
  const [notes, refetch] = useNotes();

  return (
    <div className="flex container flex-col justify-center items-center md:items-start gap-4 mx-auto my-24 px-4">
      <h1 className="text-4xl text-center mx-auto mb-12 text-yellow-400 font-bold">
        Welcome To Note App
      </h1>
      <CreateNote refetch={refetch}></CreateNote>
      <AllNotes notes={notes} refetch={refetch}></AllNotes>
      <ToastContainer />
    </div>
  );
};

export default Home;
