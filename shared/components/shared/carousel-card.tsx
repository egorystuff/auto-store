"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  className?: string;
}

export const CarouselCard: React.FC<Props> = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3000 })]);

  return (
    <div className='carousel border my-10'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='carousel__container'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='carousel__slide' key={index}>
              <div className='carousel__slide__number'>
                <Image src={`/cars/${index + 1}.jpg`} alt='car' width={1280} height={720} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
