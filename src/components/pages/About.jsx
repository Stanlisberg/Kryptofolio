import WorldImage from '../image/WorldImage'
import WorkImage from "../image/WorkImage";

function About() {
  return (
    <>
     <div className=' mt-24 text-center text-2xl font-mono'>About Kryptofolio...</div>
      <div className="py-8 mt-8 rounded-lg mx-auto max-w-[1200px] bg-[#15273a]">
        <div className="flex mx-10 justify-between">
          <div className="w-[50%]">
            <div className="mx-7 text-justify font-mono text-2xl text-white-500 text-blue-300">
              {" "}
              Our Vision.
            </div>
            <p className=" mx-7 my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              quia dolor tempora possimus fugiat enim eveniet, pariatur aperiam
              reiciendis, ea nesciunt quos officia. Sed, et eius adipisci
              consequuntur modi, nulla beatae cupiditate voluptatum perferendis
              veritatis repellat quos harum qui autem praesentium voluptatibus!
              Aliquam laboriosam laborum rerum quisquam in reprehenderit vel
              ratione adipisci pariatur voluptatibus dolorem ducimus reiciendis
              recusandae placeat rem officiis aut fuga ipsum cupiditate voluptas
              nihil, vitae maxime ab. Laboriosam quo voluptatem dicta sapiente
            </p>
          </div>
          <div className=" flex items-center">
            <WorldImage />
          </div>
        </div>
        <div className="flex mx-10 justify-between">
          <div className=" flex items-center">
            <WorkImage />
          </div>
          <div className="w-[50%]">
            <div className="mx-7 text-end font-mono text-2xl text-white-500 text-blue-300">
              {" "}
              Our Approach.
            </div>
            <p className="mx-7 my-6 text-justify font-md p-6 border-2 border-dashed border-blue-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              quia dolor tempora possimus fugiat enim eveniet, pariatur aperiam
              reiciendis, ea nesciunt quos officia. Sed, et eius adipisci
              consequuntur modi, nulla beatae cupiditate voluptatum perferendis
              veritatis repellat quos harum qui autem praesentium voluptatibus!
              Aliquam laboriosam laborum rerum quisquam in reprehenderit vel
              ratione adipisci pariatur voluptatibus dolorem ducimus reiciendis
              recusandae placeat rem officiis aut fuga ipsum cupiditate voluptas
              nihil, vitae maxime ab. Laboriosam quo voluptatem dicta sapiente
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-4 max-w-[1200px] rounded-xl p-5 mx-auto flex justify-between bg-[#040f207d]">
        <div className="flex items-center ">
          <p className='text-md font-mono'>Sign up for our news Letter.</p>
        </div>
        <div className="flex rounded-lg">
          <div className="bg-[#ccd6f6] rounded-lg rounded-r-none my-1 h-10 border-2">
            <input
              type="text"
              placeholder="johndoe@example.com"
              className="bg-[#ccd6f6] px-4 my-2 mb-4 outline-0 about-input"
            />
          </div>
          <button className="bg-[teal] text-gray-300 px-2  my-1 cursor-pointer rounded-r-md flex items-center hover:scale-90 ease-in-out duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
export default About;
