/* eslint-disable react/prop-types */
import AllNote from "./AllNote";

const AllNotes = ({ notes, refetch }) => {
  return (
    <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4">
      {notes?.map((item) => (
        <AllNote key={item._id} item={item} refetch={refetch}></AllNote>
      ))}
    </div>
  );
};

export default AllNotes;
