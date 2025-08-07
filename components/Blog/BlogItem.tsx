// components/BlogItem.tsx
"use client";

import React, { useState, useCallback, useEffect, FC } from "react";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "@/components/CustomImage";
import { createPortal } from "react-dom";

interface BlogItemProps {
  blog: Blog;
}

const BlogItem: FC<BlogItemProps> = React.memo(({ blog }) => {
  const { mainImage, title, metadata } = blog;
  const [zoomed, setZoomed] = useState<boolean>(false);

  const openZoom = useCallback(() => setZoomed(true), []);
  const closeZoom = useCallback(() => setZoomed(false), []);

  // 只在 zoomed 打开时阻止页面滚动
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (zoomed) e.preventDefault();
    };
    document.addEventListener("wheel", handler, { passive: false });
    return () => document.removeEventListener("wheel", handler);
  }, [zoomed]);

  return (
    <>
      {zoomed &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[900]"
            onClick={closeZoom}
            style={{ overscrollBehavior: "none", touchAction: "none" }}
          >
            <div
              className="relative w-11/12 max-w-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 直接渲染原图 */}
              <Image
                src={mainImage}
                alt={title}
                width={1200}
                height={800}
                style={{ objectFit: "contain" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>,
          document.body
        )}

      <motion.div
        className="will-change-transform will-change-opacity rounded-lg bg-white p-4 pb-9 shadow-lg dark:bg-slate-800"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        initial="visible"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="relative w-full cursor-pointer rounded-md overflow-hidden aspect-video"
          onClick={openZoom}
        >
          {/* 缩略图：只用 fill + sizes */}
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
});

export default BlogItem;
