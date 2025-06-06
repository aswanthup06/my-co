import React from 'react';
import Image from 'next/image';

interface CardProps {
  logo?: string;
  title?: string;
  items?: string[];
}

const CardComponent: React.FC<CardProps> = ({
  logo = '',
  title = 'Website',
  items = Array(2).fill('No Data'),
 
}) => {
  return (
    <div className={`card1 flex bg-white shadow-xl text-black hover:bg-amber-500  hover:text-white  duration-500 items-center flex-col py-5 md:py-8 rounded-2xl lg:rounded-3xl cursor-pointer`}>
      <div className={`lg:h-20 lg:w-20 rounded-full flex items-center justify-center bg-white/90 text-white font-bold md:mb-8`}>
        {logo ? (
          <div className="relative h-12 w-12">
            <Image 
              src={logo} 
              alt={title || "Card logo"} 
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-md lg:text-2xl">{title.charAt(0)}</span>
        )}
      </div>

      <div className="text-center">
        {title && <h1 className="lg:text-xl font-bold mb-4">{title}</h1>}
        <div className="space-y-2 text-sm md:text-[16px]">
          {items.map((item, index) => (
            <h1 key={index} className="">
              {item}
            </h1>
          ))}
        </div>
      </div>


      <div className="go-corner">
      <div className="go-arrow">
      </div>
    </div>

    </div>
  );
};

export default CardComponent;