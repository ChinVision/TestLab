"use client";

import { motion } from "framer-motion";
import Image from "@/components/CustomImage"
import React from "react";

import { FaGoogleScholar } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pt-10 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                // src="/images/ours/pi.jpg"
                src="/images/ours/pi.jpg"
                alt="About"
                className="dark:hidden"
                fill
                style={{ objectFit: 'contain' }} // 保持图片比例，完整展示
              />

            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span
                  className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Professor
                </span>{" "}
                Principal Investigator
              </span>
              <h2 className="relative mb-6 text-4xl font-bold text-black dark:text-white">
                黄兴禄
              </h2>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Xinglu Huang
              </h2>
              {/*<h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">*/}
              {/*  <span*/}
              {/*    className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">*/}
              {/*    NanKai*/}
              {/*  </span>*/}
              {/*</h2>*/}
              <p className={'text-black text-xl'}>
                Professor of the College of Life Science and the State Key Laboratory of Medicinal Chemical Biology at Nankai University since 2018.
                {/*Dr. Huang has been a member of the*/}
                {/*<a href="https://sklmcb.nankai.edu.cn/" target="_blank" rel="noreferrer"*/}
                {/*   className={"text-black underline"}>*/}
                {/*  State Key Laboratory of Medicinal Chemical Biology (SKLMCB)*/}
                {/*</a>*/}
                {/*and the*/}
                {/*<a href="https://sky.nankai.edu.cn/" target="_blank" className={"text-black underline"}>College of Life*/}
                {/*  Science at*/}
                {/*  Nankai University </a>*/}
                {/*since 2018.*/}
              </p>
              <br />
              <p className={'text-black text-md'}>
                Dr. Huang received his Ph.D degree in 2010 from Technical Institute of Physics and Chemistry, Chinese Academy of Science.
                He subsequently pursued postdoctoral research at the National Institute of Health (2010-2014) and Johns Hopkins University (2010-2017).

                {/*He obtained his Ph.D. degree from {" "}*/}
                {/*<strong className="text-black">*/}
                {/*  Techinal Institute of Physics and Chemistry, CAS.*/}
                {/*</strong>*/}
              </p>
              <br />
              {/*<p>*/}
              {/*  He worked as a postdoctoral scholar at {" "}*/}
              {/*  <strong className="text-black">*/}
              {/*    National Institutes of Health*/}
              {/*  </strong>*/}
              {/*  {" "} and {" "}*/}
              {/*  <strong className="text-black">*/}
              {/*    Johns Hopkins University.*/}
              {/*  </strong>*/}
              {/*</p>*/}
              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    {/*01*/}
                    <FaGoogleScholar />
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    <a href={"https://scholar.google.com/citations?hl=en&user=8ou-i-kAAAAJ"} className="underline">
                      Google Scholar Page
                    </a>
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    <FaSchool />
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    <a href={"https://sky.nankai.edu.cn/hxl/list.htm"} className="underline">
                      Profile at Nankai
                    </a>
                  </h3>
                  {/*<p>consectetur adipiscing elit fermentum ultricies.</p>*/}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      {/*<section>*/}
      {/*  <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">*/}
      {/*    <div className="flex items-center gap-8 lg:gap-32.5">*/}
      {/*      <motion.div*/}
      {/*        variants={{*/}
      {/*          hidden: {*/}
      {/*            opacity: 0,*/}
      {/*            x: -20,*/}
      {/*          },*/}

      {/*          visible: {*/}
      {/*            opacity: 1,*/}
      {/*            x: 0,*/}
      {/*          },*/}
      {/*        }}*/}
      {/*        initial="hidden"*/}
      {/*        whileInView="visible"*/}
      {/*        transition={{ duration: 1, delay: 0.1 }}*/}
      {/*        viewport={{ once: true }}*/}
      {/*        className="animate_left md:w-1/2"*/}
      {/*      >*/}
      {/*        <h4 className="font-medium uppercase text-black dark:text-white">*/}
      {/*          Launch Your SaaS Fast*/}
      {/*        </h4>*/}
      {/*        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">*/}
      {/*          Packed with All Essential {"   "}*/}
      {/*          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">*/}
      {/*            Integrations*/}
      {/*          </span>*/}
      {/*        </h2>*/}
      {/*        <p>*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut*/}
      {/*          ultricies lacus non fermentum ultrices. Fusce consectetur le.*/}
      {/*        </p>*/}
      {/*        <div>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"*/}
      {/*          >*/}
      {/*            <span className="duration-300 group-hover:pr-2">*/}
      {/*              Know More*/}
      {/*            </span>*/}
      {/*            <svg*/}
      {/*              width="14"*/}
      {/*              height="14"*/}
      {/*              viewBox="0 0 14 14"*/}
      {/*              fill="currentColor"*/}
      {/*            >*/}
      {/*              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />*/}
      {/*            </svg>*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </motion.div>*/}
      {/*      <motion.div*/}
      {/*        variants={{*/}
      {/*          hidden: {*/}
      {/*            opacity: 0,*/}
      {/*            x: 20,*/}
      {/*          },*/}

      {/*          visible: {*/}
      {/*            opacity: 1,*/}
      {/*            x: 0,*/}
      {/*          },*/}
      {/*        }}*/}
      {/*        initial="hidden"*/}
      {/*        whileInView="visible"*/}
      {/*        transition={{ duration: 1, delay: 0.1 }}*/}
      {/*        viewport={{ once: true }}*/}
      {/*        className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"*/}
      {/*      >*/}
      {/*        <Image*/}
      {/*          src="./images/about/about-light-02.svg"*/}
      {/*          alt="About"*/}
      {/*          className="dark:hidden"*/}
      {/*          fill*/}
      {/*        />*/}
      {/*        <Image*/}
      {/*          src="./images/about/about-dark-02.svg"*/}
      {/*          alt="About"*/}
      {/*          className="hidden dark:block"*/}
      {/*          fill*/}
      {/*        />*/}
      {/*      </motion.div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
