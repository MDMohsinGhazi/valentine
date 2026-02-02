import { useSearchParams } from "next/navigation";
import RunButton from "./catchme";

const Home:React.FC<{isMobile: boolean}> = ({isMobile}) => {

  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "/videos/mobile.mp4" : "/videos/desktop.mp4"} type="video/mp4" />
        </video>
        <section className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#F3B76B] mb-2">My love {name}</h1>
              <h2 className="text-4xl font-bold text-[#BD1516]">Will you be my valentine?</h2>
            </div>
            <div className="flex gap-10">
           <button className="bg-[#BD1516] text-white px-8 py-4 rounded-xl cursor-pointer">Yes</button>
           <RunButton />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home