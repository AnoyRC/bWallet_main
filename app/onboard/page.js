"use client";
import Loader from "@components/Loader";
import RenderOnboard from "@components/Onboard/RenderOnboard";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

export default function Onboard() {
  const router = useRouter();
  return (
    <div className="flex mx-auto my-auto justify-center items-center w-screen h-screen">
      <div className="bg-prm-bg w-96  rounded-xl text-white p-3">
        <div
          className="flex justify-end w-full hover:cursor-pointer"
          onClick={() => router.push("/login")}
        >
          <AiOutlineClose className="text-white" />
        </div>
        <div
          style={{
            background:
              "radial-gradient(138.37% 138.37% at 50% -24.42%, rgba(234, 19, 242, 0.75) 0%, #E51E2A 54.62%, rgba(234, 19, 242, 0.75) 100%)",
          }}
          className="rounded-md flex justify-center w-fit p-1 items-center mx-auto"
        >
          <Image src="/assets/logo2.png" alt="" width={20} height={10} />
        </div>
        <h2 className="text-lg font-semibold text-center mt-2">
          Set up your account
        </h2>
        <RenderOnboard />
      </div>
    </div>
  );
}
