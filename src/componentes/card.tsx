import React from 'react';

interface CardProps {
  logoText?: string;
  title?: string;
  items?: string[];
  bgColor?: string;
  logoColor?: string;
  rounded?: string;
}

const CardComponent: React.FC<CardProps> = ({
  logoText = 'Logo',
  title = 'Website',
  items = Array(2).fill('No Data'),
  bgColor = 'bg-amber-700',
  logoColor = 'bg-amber-500',
  rounded = 'rounded-3xl'
}) => {
  return (
    <div className={`flex ${bgColor} items-center flex-col p-6 ${rounded}`}>
 
      <div className={`h-20 w-20 ${logoColor} rounded-full flex items-center justify-center text-white font-bold mb-4`}>
        {logoText}
      </div>

      <div className="text-center">
        {title && <h1 className="text-xl font-bold text-white mb-2">{title}</h1>}
        <div className="space-y-2">
          {items.map((item, index) => (
            <h1 key={index} className="text-white">
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;