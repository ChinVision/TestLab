"use client";

import React from "react";
import Image from "@/components/CustomImage";
import featuresTabData from "./featuresTabData";
import { FeatureTab } from "@/types/featureTab";

// This component replaces the previous tab UI and shows all items as cards.
// Each card: title on top, image in the middle, descriptions at the bottom.

const FeaturesCards: React.FC = () => {
  return (
    <section className="relative pb-20 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuresTabData.map((feature: FeatureTab) => (
            <article
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-lg border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
            >
              {/* Title (top) */}
              <h3 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                {feature.title}
              </h3>
              <hr/>
              {/* Image (middle) */}
              <div className="relative mx-auto mb-5 w-full max-w-[550px] flex-1 md:mb-6">
                <div className="relative mx-auto aspect-[562/366] w-full">
                  <Image src={feature.image} alt={feature.title} fill className="dark:hidden object-contain" />
                  <Image src={feature.imageDark} alt={feature.title} fill className="hidden dark:block object-contain" />
                </div>
              </div>

              {/* Content (bottom) */}
              <div className="mt-3 text-center md:text-left">
                <p className="mb-3 text-sm text-black dark:text-white">{feature.desc1}</p>
                <p className="text-sm text-black dark:text-white">{feature.desc2}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
