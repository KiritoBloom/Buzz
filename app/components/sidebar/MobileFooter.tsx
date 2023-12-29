"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

import { User } from "@prisma/client";
import { useState } from "react";
import SettingsModal from "./SettingsModal";
import Avatar from "../Avatar";

// ... (imports remain the same)

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (isOpen) {
    return null;
  }

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
        className="cursor-pointer hover:opacity-75 transition"
      >
        <Avatar user={currentUser} />
      </div>
    </div>
  );
};

export default MobileFooter;
