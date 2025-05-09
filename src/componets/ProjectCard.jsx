'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/componets/ui/3d-card';

export function InfoCard({ title, description, image, primaryLink, secondaryLink }) {
  return (
    <CardContainer className="inter-var mx-auto">
      <CardBody className="relative group/card w-full max-w-md sm:max-w-lg h-auto rounded-xl p-6 border 
        border-black/[0.1] dark:border-white/[0.2] bg-gray-50 dark:bg-black 
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition-all duration-300 ease-in-out"
      >
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-800 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-6">
          <img
            src={image}
            height="500"
            width="1000"
            className="h-52 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={primaryLink.href}
            target="_blank"
            className="text-xs font-medium px-4 py-2 rounded-xl hover:underline dark:text-white"
          >
            {primaryLink.label}
          </CardItem>

          {secondaryLink && (
            <CardItem
              translateZ={20}
              as="a"
              href={secondaryLink.href}
              target="_blank"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"
            >
              {secondaryLink.label}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
