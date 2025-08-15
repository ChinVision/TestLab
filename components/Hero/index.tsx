"use client";
import Image from "@/components/CustomImage"
import { useState } from "react";
import Link from "next/link";
const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-15 pt-35 md:pt-40 xl:pb-15 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h2 className="mb-4.5 text-4xl font-medium text-black dark:text-white">
                Welcome to Huang Lab.
              </h2>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                AI-Base-Tec for nanomedicine
                {/*<span*/}
                {/*  className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">*/}
                {/*  life science*/}
                {/*</span>*/}
              </h1>
              <br />
              <br />
              <p className={'text-xl text-black'}>
                Our research focuses on the rational design of nanomedicines to address critical challenges in oncology,
                cardiovascular disorders, and neurological diseases.
                Central to this effort is elucidating the mechanisms by which nanomedicines traverse complex biological barriers,
                with particular emphasis on modulating vascular permeability.
                To tackle these obstacles, we strategically integrate cutting-edge approaches into the design pipeline,
                such as artificial intelligence (AI), bioinformatics, synthetic biology, immunology, and neuroscience,
                enabling precision engineering of nanomedicines with enhanced therapeutic efficacy and translational potential.
                In the coming years, AI-driven nanotechnology will constitute a core strategic pillar of our laboratory's research agenda.


                {/*Representative works have been published in {" "}*/}
                {/*<Link href={'/publications'} className={'text-black underline'}>*/}
                {/*  Nature Nanotechnology (2023 Jun; 18(6):657–666),*/}
                {/*  Advanced Materials (2022 Jul; 34(27):e2201736; 2024 Mar; 36(10):e2210848),*/}
                {/*  and ACS Nano (2025 Jan 28; 19(3):3424–3438), alongside ongoing projects.*/}
                {/*</Link>*/}

              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                {/*<div className="relative w-full h-64 md:h-96">*/}
                {/*  <Image*/}
                {/*    className="shadow-solid-l dark:hidden object-cover"*/}
                {/*    src="/images/home/undraw_science_kut5.svg"*/}
                {/*    alt="Hero"*/}
                {/*    fill*/}
                {/*  />*/}
                {/*</div>*/}
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/home/undraw_firmware_3fxd.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
