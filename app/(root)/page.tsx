import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full bg-gray-100 flex-col sm:flex-row">
        <div
          className="w-full sm:w-[50%] bg-white-100 sm:order-first flex flex-col items-center justify-center rounded-sm  sm:border-r-4  border-gray-500 "
          style={{
            background: `url(${"/images/Mountain-login.jpg"})`,
            backgroundSize: "cover",
          }}
        >
          <Image
            alt="logo"
            height="100"
            width="100"
            className="mb-auto mr-auto"
            src="/images/Logo-2.svg"
          />
          <h2 className="text-white font-bold text-[30px] text-center mt-[180px]">
            Simplifying Connection, Streamlining Communication with:
          </h2>
          <p className="block sm:hidden text-white font-bold underline mt-10">
            <a href="#pulse">Scroll down to get started</a>
          </p>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white font-bold text-[85px] text-center mt-[200px] underline ">
              BuzzPulse
            </h1>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center sm:mx-auto sm:w-full sm:max-x-md mt-10 mb-10">
          <div className="sm:mx-auto" id="pulse">
            <Image
              alt="logo"
              height="150"
              width="150"
              className="mx-auto w-auto"
              src="/images/Logo-5.png"
            />
          </div>
          <AuthForm />
        </div>
      </div>
    </>
  );
}
