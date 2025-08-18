"use client";
import Image from "@/components/CustomImage";
import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Hero = () => {
  // 禁止 body 滚动（打开 modal 时）
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);
  // ESC 关闭
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

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
                AI-Base-Tec for Nanomedicine
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

                {/* 缩略图容器 - 点击打开 modal */}
                <div
                  className="relative aspect-700/444 cursor-pointer"
                  role="button"
                  aria-label="Open hero image"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    className="dark:hidden"
                    src="/images/home.jpg"
                    alt="Hero"
                    width={700}
                    height={444}
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

      {/* Modal：全屏遮罩 + 放大/平移控件 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)} // 点击遮罩关闭
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-[92vw] max-h-[92vh] w-full"
            onClick={(e) => e.stopPropagation()} // 阻止内部点击冒泡到遮罩
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-30 rounded-full bg-white/90 dark:bg-gray-900/90 p-2 shadow-md"
              aria-label="Close image viewer"
            >
              ✕
            </button>

            {/* Transform wrapper: 放大/缩小/重置按钮 + 图片主体 */}
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              limitToBounds={false}
              wheel={{ step: 0.1 }}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <div className="flex items-center justify-center w-full h-full">
                    <TransformComponent>
                      <div className="max-w-full max-h-[80vh] flex items-center justify-center">
                        {/* 使用较大尺寸渲染，保持 object-contain */}
                        <Image
                          src="/images/home.jpg"
                          alt="Hero enlarged"
                          width={1400}
                          height={888}
                          className="object-contain"
                        />
                      </div>
                    </TransformComponent>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
