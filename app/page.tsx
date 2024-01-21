import Image from "next/image";
import webDesktop from "../app/assets/images/image-web-3-desktop.jpg";
import image01 from "../app/assets/images/image-gaming-growth.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="px-10 mt-4 border flex md:flex-row flex-col justify-between gap-4">
        <section className=" w-full md:w-[60%] ">
          <Image src={webDesktop} alt="Homepage image" />
          <div className="grid  grid-cols-1 md:grid-cols-2 items-start mt-4 mb-4 border">
            <p className=" text-3xl md:text-5xl font-bold p-2">
              The Bright Future of Web3.0 ?
            </p>
            <div className="flex flex-col border h-full  justify-between">
              <p className=" text-sm text-gray-600 mb-2">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <Button className=" bg-orange-700 rounded-none max-w-min uppercase ">
                read more
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full md:w-[40%]  px-4 py-4 mb-4 flex flex-col justify-between gap-2 bg-slate-900 ">
          <div>
            <h1 className=" text-2xl text-orange-300 font-bold mb-6">New</h1>
            <h2 className=" text-white text-2xl">
              This is where you will find{" "}
            </h2>
            <h2 className=" text-gray-500 text-sm ">
              The Growth of Gaming How the pandemic has sparked fresh
              opportunities.
            </h2>
            <div className=" border border-gray-500 w-full mt-4  "></div>
          </div>
          <div>
            <h2 className=" text-white text-bold text-2xl">
              This is where you will find{" "}
            </h2>
            <h2 className=" text-gray-500 text-sm ">
              The Growth of Gaming How the pandemic has sparked fresh
              opportunities.
            </h2>
            <div className=" border border-gray-500 w-full mt-4  "></div>
          </div>
          <div>
            <h2 className=" text-white text-2xl">
              This is where you will find{" "}
            </h2>
            <h2 className=" text-gray-500 text-sm ">
              The Growth of Gaming How the pandemic has sparked fresh
              opportunities.
            </h2>
          </div>
        </section>
      </main>
      <main className="px-10 mt-4 border flex md:flex-row flex-col justify-between gap-4 mb-10">
        <div className="flex gap-2 border border-red-600">
          <Image src={image01} alt="Homepage image" width={150} />
          <div className="flex flex-col gap-2 border">
            <h1 className="   text-3xl font-bold text-gray-200">01</h1>
            <h1 className=" font-bold  ">Revisinig Recto Pcs</h1>
            <p className=" text-gray-400">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-2 border border-red-600">
          <Image src={image01} alt="Homepage image" width={150} />
          <div className="flex flex-col gap-2 border">
            <h1 className=" text-gray-200   text-3xl font-bold">02</h1>
            <h1 className="  font-bold">Revisinig Recto Pcs</h1>
            <p className=" text-gray-400">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-2 border border-red-600">
          <Image src={image01} alt="Homepage image" className=" h-30 w-20" />
          <div className="flex flex-col gap-2 border">
            <h1 className=" text-gray-200   text-3xl font-bold">01</h1>
            <h1 className=" font-bold">Revisinig Recto Pcs</h1>
            <p className=" text-gray-400">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
