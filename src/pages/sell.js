import ContactUs from "@/blocks/ContactUs/ContactUs";
import Carousel from "@/utils/Carousel";
import Image from "next/image";
import React from "react";

const sell = () => {
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
    <div>
      {/* Section 1 */}
      <section>
        <div>
          <img
            src="/assets/IMG_0959_MEDIUM_RES.jpg"
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="bg-neutral-100 px-16 lg:px-24 py-10 flex flex-col gap-4">
          <h3 className="font-bold text-2xl">Sell with SERHANT. Real Estate</h3>
          <p>
            We put your property in front of more potential buyers worldwide
            than anyone else.
          </p>
        </div>
      </section>
      {/* Section 1 */}

      {/* Section 2 */}
      <section className="flex flex-col xl:flex-row justify-between  gap-10 lg:px-24 px-16 py-20">
        <div className="flex flex-col gap-10 lg:w-full xl:w-[55%]">
          <h4 className="text-2xl mb-5">
            Why <strong>SERHANT.</strong>?
          </h4>

          <p className="leading-8 text-lg">
            When you work with a <strong>SERHANT.</strong> agent, you’re working
            with someone that combines market expertise with entrepreneurial
            innovation. We will listen to your needs and goals, use data and
            creativity to optimize your property for potential buyers, and stand
            beside you for every step of the selling process.
          </p>

          <p className="leading-8 text-lg">
            With <strong>SERHANT.</strong> ADX, we put your listing in front of
            more potential buyers worldwide than anyone else. We welcome
            expectations because we hold ourselves to the highest standard. We
            know that trust is earned through delivering results and that our
            success is defined by yours.
          </p>

          <p className="leading-8 text-lg">
            If you’re considering selling your home, or just want to get a sense
            of what your home would get on the market, we would love to meet.
          </p>

          <div>
            <a
              href="https://go.ryanserhant.com/hubfs/SERHANT.%20Files/Sellers-Guide.pdf"
              target="_blank"
            >
              <h2 className="text-2xl font-bold my-5">
                Download Our Seller's Guide
              </h2>
              <div>
                <Image
                  src="/assets/SERHANT-Seller-Guide-Download-V2.jpg"
                  alt="book"
                  width={500}
                  height={600}
                />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col gap-0 lg:gap-10 p-5 px-0 lg:px-5">
              <h2 className="text-2xl h-16">
                <strong>SERHANT.</strong> ADX
              </h2>
              <p className="leading-7 text-neutral-400 ">
                Our tech-powered innovation platform gives our sellers
                unparalleled exposure and amplification while allowing them to
                pinpoint their target market and reach buyers they never could
                have using traditional sales techniques.
              </p>
            </div>

            <div className="flex flex-col gap-0 lg:gap-10 p-5 px-0 lg:px-5 border border-r-0 border-l-0 border-b-2 border-t-2 lg:border-r-2 lg:border-l-2 lg:border-t-0 lg:border-b-0 border-[#111276]">
              <h2 className="text-2xl h-16">
                <strong>SERHANT.</strong> Studios
              </h2>
              <p className="leading-7 text-neutral-400">
                Our full-service in-house media and production hub creates
                highly-customized, engaging content for SERHANT. properties.
              </p>
            </div>

            <div className="flex flex-col gap-0 lg:gap-10 p-5 px-0 lg:px-5">
              <h2 className="text-2xl h-16">Your Success Is Our Success</h2>
              <p className="leading-7 text-neutral-400">
                <strong>SERHANT.</strong> grew from being the #1 sales team in
                the world’s toughest market to a full-service brokerage firm
                that is revolutionizing the traditional real estate model.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end lg:w-full xl:w-[35%]">
          <ContactUs />
        </div>
      </section>
      {/* Section 2 */}

      {/* Section 3 */}
      <section className="px-16 lg:px-24 py-20">
        <h2 className="text-2xl">
          What happens when you SELL with <strong>SERHANT.</strong> ?
        </h2>
        <div className=" mt-16">
          <Carousel data={carouselData} />
          <button className=" underline-animation hover:text-neutral-400 text-lg font-semibold mt-8">
            View our past listings
          </button>
        </div>
      </section>
      {/* Section 3 */}

      {/* Section 4 */}
      <section>
        <div className="bg-neutral-100 py-10 px-16 lg:px-24 flex flex-col gap-5">
          <h2 className="text-2xl text-center text-neutral-400 font-bold">
            SERHANT. grew from being the #1 sales team in the world’s toughest
            market to a full-service brokerage firm that is revolutionizing the
            traditional real estate model.
          </h2>
          <p className="text-center">
            A <strong> SERHANT.</strong> Agent sells a home every 3 hours and 42
            minutes.
          </p>
        </div>
        <div className="flex flex-col gap-10 px-16 lg:px-24 py-20">
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div>
              <h2 className=" text-[#141176] font-bold text-3xl text-center">
                3,500,000+
              </h2>
              <p className=" text-center text-neutral-400">
                Global Followers & Counting
              </p>
            </div>
            <span className=" border-[#141176] border"></span>
            <div>
              <h2 className="text-[#141176] font-bold text-3xl text-center">
                100M
              </h2>
              <p className=" text-center text-neutral-400">
                Impressions per month
              </p>
            </div>
          </div>
          <h2 className=" font-bold md:font-normal text-2xl text-center">
            #1 Followed Real Estate Firm on the Planet
          </h2>
        </div>
      </section>
      {/* Section 4 */}

      {/* Section 5 */}
      <section className="flex flex-col lg:flex-row justify-between px-16 lg:px-24 py-14 bg-neutral-100 gap-10">
        <div className="flex flex-col gap-10 lg:w-full xl:w-[55%]">
          <h2 className=" text-2xl font-bold">Discover Your Home’s Value</h2>

          <p className=" leading-8 text-lg pr-6">
            Curious to know what your home is worth? Designed by in-house
            analytics experts, our home-value reports leverage real-time pricing
            and market data based on regional and neighborhood sales trends. Get
            your free report and contact a <strong> SERHANT.</strong> agent to
            talk about your home.
          </p>

          <h2 className=" text-2xl font-bold mt-8">
            Become a SERHANT. Signature Listing
          </h2>

          <p className=" leading-8 text-lg pr-6">
            Properties valued at more than $10M can become a
            <strong> SERHANT</strong>. Signature listing and gain access to a
            range of premium, white-glove services as well as a team of property
            experts that specialize solely in the high-end luxury market.
          </p>
        </div>
        <div className="flex flex-col items-end lg:w-full xl:w-[35%]">
          <ContactUs />
        </div>
      </section>
      {/* Section 5 */}
    </div>
  );
};

export default sell;
