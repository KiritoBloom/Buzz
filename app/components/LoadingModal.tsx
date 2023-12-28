"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClipLoader } from "react-spinners";

const LoadingModal = () => {
  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              fixed 
              inset-0 
              bg-gray-100 
              bg-opacity-50 
              transition-opacity
            "
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="
              flex 
              min-h-full 
              items-center 
              justify-center 
              p-4 
              text-center 
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel>
                <div id="wifi-loader">
                  <svg className="circle-outer" viewBox="0 0 86 86">
                    <circle className="back" cx="43" cy="43" r="40"></circle>
                    <circle className="front" cx="43" cy="43" r="40"></circle>
                    <circle className="new" cx="43" cy="43" r="40"></circle>
                  </svg>
                  <svg className="circle-middle" viewBox="0 0 60 60">
                    <circle className="back" cx="30" cy="30" r="27"></circle>
                    <circle className="front" cx="30" cy="30" r="27"></circle>
                  </svg>
                  <svg className="circle-inner" viewBox="0 0 34 34">
                    <circle className="back" cx="17" cy="17" r="14"></circle>
                    <circle className="front" cx="17" cy="17" r="14"></circle>
                  </svg>
                  <div className="text" data-text="Loading"></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoadingModal;
