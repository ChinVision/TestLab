"use client";

import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "@/components/CustomImage"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = zoomed ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  return (
    <>
      {zoomed && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[900]"
          onClick={() => setZoomed(false)}
          onWheel={(e) => e.preventDefault()}
        >
          <div
            className="relative w-11/12 max-w-3xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={3}
              wheel={{ step: 0.2 }}
              doubleClick={{ disabled: true }}
              panning={{ disabled: false }}
            >
              {({ resetTransform }) => (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetTransform();
                    }}
                    className="absolute top-4 right-4 z-[950] bg-white/80 px-3 py-1 rounded shadow-lg backdrop-blur-sm"
                  >
                    Reset
                  </button>

                  <TransformComponent>
                    <Image
                      src={mainImage}
                      alt={title}
                      width={1200}
                      height={800}
                      style={{ objectFit: "contain" }}
                      className="rounded-lg shadow-lg"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}

      <motion.div
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="rounded-lg bg-white p-4 pb-9 shadow-lg dark:bg-slate-800"
      >
        {/* 缩略图容器：添加固定比例以显示图片 */}
        <div
          className="relative w-full cursor-pointer rounded-md overflow-hidden aspect-video"
          onClick={() => setZoomed(true)}
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="px-4 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {metadata}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
