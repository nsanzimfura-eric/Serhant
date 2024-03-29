import Carousel from "@/utils/Carousel";
import VideoCarousel from "@/utils/VideoCarousel";
import Head from "next/head";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Home() {
  const carouselData = [
    {
      image: "/assets/marla-prusik-5q1KnUjtjaM-unsplash.jpg",
      title: "Central Park Tower Penth...",
      price: "195,000,000",
      status: "SERHANT. Signature",
    },
    {
      image: "/assets/marla-prusik-5q1KnUjtjaM-unsplash.jpg",
      title: "Central Park Tower Penth...",
      price: "195,000,000",
      status: "SERHANT. Signature",
    },
    {
      image: "/assets/marla-prusik-5q1KnUjtjaM-unsplash.jpg",
      title: "Central Park Tower Penth...",
      price: "195,000,000",
      status: "SERHANT. Signature",
    },
    {
      image: "/assets/marla-prusik-5q1KnUjtjaM-unsplash.jpg",
      title: "Central Park Tower Penth...",
      price: "195,000,000",
      status: "Sold",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Video section */}
        <section className="bg-black">
          <VideoCarousel />
          <div className="px-16 lg:px-24 text-white pb-10 flex flex-col gap-8">
            <h2 className=" font-bold text-2xl">Your Success. Amplified.</h2>
            <p className=" leading-8">
              <strong>SERHANT.</strong> — the most followed real estate brand in
              the world, calibrated for the marketplace of tomorrow, delivering
              proven results for buyers, sellers, and developers.
              <strong> SERHANT.</strong>
              revolutionizes the traditional brokerage model by innovating
              through media and content creation, and is powered by a
              full-service in-house film studio as well as an amplification
              platform that puts our properties in front of more people than
              anyone else.
            </p>
          </div>
        </section>
        {/* Video section End */}

        {/* Search Bar */}
        <section className=" bg-neutral-100 mt-16 py-5">
          <div className=" flex items-center justify-between px-16 lg:px-24">
            <input
              type="text"
              className="px-0 w-2/3 bg-transparent border-none focus:ring-0"
              placeholder="Search by places, address, buildings and agents"
            />
            <span className=" flex justify-end">
              <PiMagnifyingGlassLight className=" w-7 h-7" />
            </span>
          </div>
        </section>
        {/* Search Bar end */}

        {/* Featured Residence Start */}
        <section className="px-16 lg:px-24 py-20">
          <div className="flex flex-col gap-10">
            <h2 className="font-bold text-2xl">Featured Residences</h2>
            <Carousel data={carouselData} />
          </div>
        </section>
        {/* Featured Residence End */}
      </main>
    </>
  );
}
