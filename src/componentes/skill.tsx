import React from 'react';
import Image from 'next/image';

interface SkillBadgeProps {
  imageSrc: string; // Only accept string path (simpler)
  altText: string;  // Required alt text
  label: string;    // Display text
  className?: string; // Optional custom styling
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  imageSrc,
  altText,
  label,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
     <div className="relative h-12 w-12 rounded-full p-2 bg-amber-600/10 overflow-hidden flex justify-center items-center">
  <div className="relative h-full w-full">
    <Image
      src={imageSrc}
      alt={altText}
      fill
      className=""
    />
  </div>
</div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default SkillBadge;