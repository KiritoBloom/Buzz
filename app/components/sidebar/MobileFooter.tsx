"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

import { User } from "@prisma/client";
import { useState } from "react";
import SettingsModal from "./SettingsModal";
import Avatar from "../Avatar";
import clsx from "clsx";

// ... (imports remain the same)

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const [isHovered, setIsHovered] = useState(false);
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (isOpen) {
    return null;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed justify-around w-full bottom-0 z-40 flex items-center bg-white lg:hidden transition-all">
      {/* Pass the correct state to isOpen */}
      <SettingsModal
        currentUser={currentUser}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
          name={route.label}
        />
      ))}
      <div
        onClick={() => setIsProfileOpen(true)}
        className={clsx(
          "cursor-pointer relative mb-[10px] text-gray-600",
          isHovered && "hover:opacity-90 transition-all scale-105 "
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar user={currentUser} />
        <div
          className={clsx(
            "absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-center opacity-0 transition-opacity duration-500",
            isHovered && "opacity-100 text-black"
          )}
        >
          Me
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
