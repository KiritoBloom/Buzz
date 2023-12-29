import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
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

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          "group flex flex-col items-center p-3 text-sm font-semibold text-gray-500 transition-all rounded-md justify-center text-center",
          active && "bg-gray-100 text-black",
          isHovered && "bg-gray-100 text-black"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col text-center justify-center items-center ">
          <Icon className="h-6 w-6 shrink-0" />
          <span
            className={clsx(
              "transition-opacity",
              isHovered || active
                ? "opacity-100 text-gray-500 scale-110"
                : "opacity-0"
            )}
          >
            {label}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default DesktopItem;
