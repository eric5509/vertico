import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  position: string;
  gradient: string;
};

export default function Comp({
  title,
  subtitle,
  text,
  img,
  position,
  gradient,
}: Props) {
  return (
    <div
      className={`block lg:flex bg-white  items-center shadow-xl p-5 sm:p-8 md:p-8 lg:p-12 gap-10 rounded-3xl max-w-[1000px] mx-auto ${
        position === "right" ? "lg:flex-row " : "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:flex-1">
        <div
          style={{ backgroundImage: `${gradient}` }}
          className="font-semibold text-white px-4 py-3 rounded-full w-fit"
        >
          <p>{subtitle}</p>
        </div>
        <p className="text-2xl lg:text-3xl font-semibold mt-6 mb-4">{title}</p>
        <p className="leading-relaxed">{text}</p>
      </div>
      <div className="lg:flex-1 mt-10 lg:mt-0 h-[350px]">
        <div className=" w-full relative h-full overflow-hidden rounded-xl">
          <Image
            src={img}
            alt=""
            height={0}
            width={0}
            className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-300 delay-200 hover:scale-110 w-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
