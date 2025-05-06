import { MdShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addItem } from "./Utils/cartSlice";
export const BookCard = ({ booksData }) => {
  const dispatch = useDispatch();

  const { title, subtitle, id, enumMask } = booksData;
  const { subContents } = enumMask;
  const { domain, basePath, qualities, key } = enumMask.value.thumbnails[0];
  if (!qualities[1]) return;

  const handelAdd = () => {
     const data ={...booksData , quantity: 1}
    dispatch(addItem(data));
  };

  return (
    <div
      id={id}
      className="border bg-white rounded-md p-3 border-gray-500/50  shadow-sm shadow-gray-500/50 flex flex-col gap-5 justify-between w-55"
    >
      <Link
        to={`https://acharyaprashant.org/en/books/${id}`}
        target="_blank"
        className="relative"
      >
        {" "}
        <img
          src={`${domain}/${basePath}/${qualities[1]}/${key}`}
          className="w-50"
          alt=""
        />
      </Link>

      <div className="flex flex-col gap-2">
        <h2 className="text-md font-semibold">
          {title?.english || title?.hindi || "N/A"}
        </h2>
        <div className="flex  justify-between items-center">
          <p>
            <span className="text-sm text-gray-400">Price:</span>{" "}
            {subContents[1]?.amount?.originalAmount || "N/A"}
          </p>
          <button
            onClick={handelAdd}
            className=" bg-orange-600 text-white  cursor-pointer px-3 py-1 rounded-md "
          >
            <MdShoppingCart className="text-md" />
          </button>
        </div>
      </div>
    </div>
  );
};
