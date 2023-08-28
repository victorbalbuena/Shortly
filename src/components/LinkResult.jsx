import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ShorterContext } from "../hooks/useStateContext";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";

export default function LinkResult({ link }) {
  const [isCopied, setIsCopied] = useState(false);

  const { removeLinkShorter } = useContext(ShorterContext);

  const handleCopy = () => {
    const text = document.createElement("textarea");
    text.value = link.shorter;
    document.body.appendChild(text);
    text.select();

    try {
      document.execCommand("copy");
      setIsCopied(true);
      toast.success("Copied!", {
        duration: 2000,
      });
    } catch (error) {
      console.log("error: ", error);
    }

    document.body.removeChild(text);
  };

  return (
    <div className="bg-white p-5 font-poppins flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center rounded-lg my-5">
      <h2 className="font-semibold text-base md:text-lg w-full overflow-hidden text-ellipsis">
        {/* eslint-disable-next-line react/prop-types */}
        {link.base}
      </h2>
      <hr className="w-full h-0.5 mx-auto bg-gray-100 border-0 rounded md:hidden dark:bg-gray-200" />
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center w-full md:w-auto">
        <h3 className="text-cyan-500 text-lg font-medium w-full overflow-hidden text-ellipsis md:w-auto">
          {/* eslint-disable-next-line react/prop-types */}
          {link.shorter}
        </h3>
        <div className="flex gap-2 justify-end items-end w-full md:w-auto">
          <button
            className="text-white flex justify-center font-semibold font-lg bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 px-5 py-3 rounded-md w-full md:w-auto"
            onClick={handleCopy}
          >
            <AiOutlineCopy />
          </button>
          <button
            className="text-white flex justify-center font-semibold font-lg bg-red-500 hover:bg-red-700 transition-colors duration-200 px-5 py-3 rounded-md w-full md:w-auto"
            onClick={() => removeLinkShorter(link)}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
