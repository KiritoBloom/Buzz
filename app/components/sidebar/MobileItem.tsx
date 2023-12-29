import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

interface MobileItemProps {
  href: string;
  icon: any;
  name: string;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  name,
  active,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(
        "group flex flex-col items-center justify-center p-1.5 text-gray-600 hover:text-black hover:bg-gray-100 rounded-full relative transition-all",
        active && "bg-gray-200 text-black",
        isHovered && "transition-all"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={clsx(
          "bg-gray-300 rounded-full p-2 transition-all",
          isHovered && "transform scale-110" // Example transition for scaling
        )}
      >
        <Icon className="h-6 w-6 text-gray-800" />
      </div>
      {/* Display the name above the icon on hover or permanently when active */}
      <div
        className={clsx(
          "text-xs mt-1 font-bold text-gray-800 transition-all duration-500 ",
          isHovered && "opacity-100", // Example transition for text appearing
          !isHovered && "opacity-0", // Hide text initially
          active && "opacity-100"
        )}
      >
        {name}
      </div>
    </Link>
  );
};

export default MobileItem;
