import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <Image
        alt="logo"
        height="100"
        width="100"
        className="flex flex-col items-center justify-center"
        src="/images/favicon.png"
      />
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
