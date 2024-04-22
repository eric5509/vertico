import Image from "next/image";
import { BsLinkedin, BsTelegram } from "react-icons/bs";

export default function Speak() {
  return (
    <div className="bg-[#010C11] text-white py-16 lg:py-24 padding ">
      <div className="grid container grid-cols-1 md:grid-cols-2 gap-12 lg:gap-5">
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-10 sm:gap-16 justify-between">
          <div className="">
            <p className="text-3xl lg:text-4xl mb-4 font-semibold">Speak to us today</p>
            <p>
              Hop on a call with our team and learn how we can solve your <br />{" "}
              crypto marketing and design needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-56 w-56 overflow-hidden rounded-xl">
              <Image
                alt=""
                unoptimized
                width={0}
                height={0}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXGxICs0sQodC0AqsjE5TeR28Zs3ejfsnYbd-FGGgFQ&s`}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-bold text-xl">Praven BABU</p>
            <p>
              Founder and CEO at <b>VERTICO</b>
            </p>
            <p>(Mumbai, India office)</p>
            <div className="flex justify-center md:justify-start items-center gap-3">
              <div className="h-10 w-10 text-xl duration-300 hover:border-blue-500 hover:text-blue-500 border border-white rounded-full center">
                <BsTelegram />
              </div>
              <div className="h-10 w-10 text-xl duration-300 hover:border-blue-500 hover:text-blue-500 border border-white rounded-full center">
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:px-10 lg:px-0">
          <div className="h-full min-h-80 bg-white overflow-hidden relative rounded-2xl">
            <Image
              src={
                "https://images.pexels.com/photos/8358144/pexels-photo-8358144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              height={0}
              width={0}
              className="absolute top-0 left-0 h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
