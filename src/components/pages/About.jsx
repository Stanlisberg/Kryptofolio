import WorldImage from "../image/WorldImage";
import WorkImage from "../image/WorkImage";
import { useRef } from "react";
import { toast } from "react-toastify";

function About() {
  const inputRef = useRef();
  const submitForm = (e) => {
    toast.success("subscribed successful");
    inputRef.current.value = "";

    e.preventDefault();
  };
  return (
    <>
      <div className=" mt-24 text-center text-2xl font-bold  ">
        About Kryptofolio...
      </div>
      <div className="py-10 px-6 mt-8 mx-4 rounded-lg xl:mx-auto max-w-[1200px] bg-[#15273a]">
        <div className="">
          <div className=" flex flex-col justify-center items-center lg:flex-row lg:justify-between">
            <div className="w-full lg:w-[50%]">
              <div className="mx-0 text-justify font-mono text-2xl text-white-500 text-blue-300">
                {" "}
                Our Vision.
              </div>
              <p className=" mx-0 my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quia dolor tempora possimus fugiat enim eveniet, pariatur
                aperiam reiciendis, ea nesciunt quos officia. Sed, et eius
                adipisci consequuntur modi, nulla beatae cupiditate voluptatum
                perferendis veritatis repellat quos harum qui autem praesentium
                voluptatibus! Aliquam laboriosam laborum rerum quisquam in
              </p>
            </div>
            <div className=" mx-0 flex items-center">
              <WorldImage />
            </div>
          </div>
          <div className="flex flex-col-reverse justify-center items-center mt-20 lg:flex-row lg:justify-between">
            <div className="mx-0 flex items-center">
              <WorkImage />
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="mx-0 text-end font-mono text-2xl text-white-500 text-blue-300">
                {" "}
                Our Approach.
              </div>
              <p className="mx-0 my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quia dolor tempora possimus fugiat enim eveniet, pariatur
                aperiam reiciendis, ea nesciunt quos officia. Sed, et eius
                adipisci consequuntur modi, nulla beatae cupiditate voluptatum
                perferendis veritatis repellat quos harum qui autem praesentium
                voluptatibus! Aliquam laboriosam laborum rerum quisquam in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 max-w-[1200px] rounded-xl p-5 mx-4 xl-mx-auto flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center bg-[#040f207d] mb-8">
        <div className="flex items-center">
          <p className="text-md font-mono">Sign up for our news Letter.</p>
        </div>
        <form onSubmit={submitForm}>
          <div className="flex rounded-lg">
            <div className="bg-[#ccd6f6] rounded-lg rounded-r-none my-2 h-15 border-2">
              <input
                ref={inputRef}
                type="email"
                required="required"
                placeholder="doe@example.com"
                className="bg-[#ccd6f6] px-4 my-3 lg:my-2 mb-4 outline-0 about-input placeholder:-pt-20 w-[200px]"
              />
            </div>
            <button
              className="bg-[teal] text-gray-300 px-2  my-2 cursor-pointer rounded-r-md flex items-center hover:scale-90 ease-in-out duration-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default About;
