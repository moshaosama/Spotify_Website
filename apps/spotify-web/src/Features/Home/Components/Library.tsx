import { IoMdAdd } from "react-icons/io";

const Library = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "var(--primary-color)" }}
        className="w-1/4 p-5 rounded-r-xl h-[56.4pc] max-sm:h-full flex flex-col justify-between  shadow-lg shadow-gray-600 text-white"
      >
        <div>
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-2xl font-bold">Your Library</h1>
            </div>
            <div>
              <IoMdAdd size={25} className="text-gray-400" cursor={"pointer"} />
            </div>
          </div>
          <div className="my-10 bg-neutral-700 p-3 rounded-xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Create your first playlist</h1>
              <p className="text-sm text-gray-300">
                It's easy — we’ll help you get started.
              </p>

              <button className="bg-white hover:bg-gray-200 transition-all rounded-xl font-bold cursor-pointer text-black py-1 mt-2 w-32">
                Create playlist
              </button>
            </div>
          </div>
          <div className="my-10 bg-neutral-700 p-3 rounded-xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">
                Let's find some podcast to follow
              </h1>
              <p className="text-sm text-gray-300">
                we'll keep you updated on new episodes
              </p>
              <button className="bg-white hover:bg-gray-200 transition-all rounded-xl font-bold cursor-pointer text-black py-1 mt-2 w-32">
                Browse podcast
              </button>
            </div>
          </div>
        </div>
        <div className="text-gray-300 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <p className="cursor-pointer">Legal</p>
            <p className="cursor-pointer">Safety & Privacy Center</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Cokies</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p className="cursor-pointer">About Ads</p>
            <p className="cursor-pointer">Accessability</p>
          </div>
          <div>
            <p className="text-white cursor-pointer hover:underline">Cookies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
