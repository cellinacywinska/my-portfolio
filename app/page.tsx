import Image from "next/image";
import Navigation from "./components/Navigation";
import Bio from "./components/Bio";


export default function Home() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 font-sans sm:px-6 md:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 py-6 text-center md:flex-row md:items-center md:justify-center md:gap-12 md:py-10 md:text-left">
        <Image
          src="/me-photo.jpg"
          alt="Photo of Celina"
          width={450}
          height={450}
          className="hidden shrink-0 rounded-lg object-cover md:block md:w-72 lg:w-80 xl:w-96"
        />

        <div className="flex flex-col items-center md:px-4">
          <Bio />
          <Navigation />
        </div>
      </div>
    </div>
  );
}
