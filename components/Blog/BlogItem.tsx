"use client";

import { Blog } from "@/types/blog";
import Image from "@/components/CustomImage";
import { motion } from "framer-motion";
import { FiMinus, FiPlus, FiRotateCcw, FiX, FiZoomIn } from "react-icons/fi";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";

const viewerButtonClass =
  "inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [zoomed]);

  return (
    <>
      {zoomed && (
        <div
          className="fixed inset-0 z-[100000] isolate flex items-center justify-center bg-slate-950/95 p-2 backdrop-blur-sm sm:p-5"
          onClick={() => setZoomed(false)}
          aria-label={`${title} image viewer`}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="h-[calc(100dvh-1rem)] w-full max-w-[1600px] sm:h-[calc(100dvh-2.5rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={5}
              centerOnInit
              centerZoomedOut
              wheel={{ step: 0.15 }}
              doubleClick={{ step: 0.7 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <div className="flex h-full min-h-0 flex-col">
                  <div className="relative z-10 mb-2 flex h-11 shrink-0 items-center justify-between gap-3 px-1">
                    <p className="min-w-0 truncate text-sm font-medium text-white/80 sm:text-base">
                      {title}
                    </p>

                    <div className="flex shrink-0 items-center rounded-full bg-black/40 p-0.5 shadow-lg ring-1 ring-white/15 backdrop-blur-md">
                      <button
                        type="button"
                        onClick={() => zoomOut()}
                        className={viewerButtonClass}
                        aria-label="Zoom out"
                        title="Zoom out"
                      >
                        <FiMinus className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => zoomIn()}
                        className={viewerButtonClass}
                        aria-label="Zoom in"
                        title="Zoom in"
                      >
                        <FiPlus className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => resetTransform()}
                        className={viewerButtonClass}
                        aria-label="Reset zoom"
                        title="Reset zoom"
                      >
                        <FiRotateCcw className="size-4.5" />
                      </button>
                      <span className="mx-1 h-5 w-px bg-white/20" />
                      <button
                        type="button"
                        onClick={() => setZoomed(false)}
                        className={viewerButtonClass}
                        aria-label="Close image viewer"
                        title="Close"
                      >
                        <FiX className="size-5" />
                      </button>
                    </div>
                  </div>

                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      flex: "1 1 0%",
                      minHeight: 0,
                    }}
                    contentStyle={{ width: "100%", height: "100%" }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/20">
                      <Image
                        src={mainImage}
                        alt={title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                  </TransformComponent>
                </div>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="rounded-lg bg-white p-4 pb-9 shadow-lg dark:bg-slate-800"
      >
        {/* 缩略图容器：添加固定比例以显示图片 */}
        <button
          type="button"
          className="group/image relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-md"
          onClick={() => setZoomed(true)}
          aria-label={`View ${title} at full size`}
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover/image:scale-[1.02]"
          />
          <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
            <FiZoomIn className="size-4.5" />
          </span>
        </button>

        <div className="px-4 pt-4">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
            {metadata}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
