import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center font-semibold text-gray-800">
        <p className="text-sm sm:text-lg pb-4">
          Not sure where to go? Perfect.
        </p>
        <button className="box-box px-10 py-4 0my-3 active:scale-95 active:duration-400">
          <p className="font-gradient">I'm flexible</p>
        </button>
      </div>
    </div>
  );
}

export default Banner;
