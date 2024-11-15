"use client";

import AllBrands from "@/components/AllBrands";
import Button from "@/components/Button";
import LogoHeader from "@/components/LogoHeader";
import { useRouter } from "next/navigation";
import React from "react";

export default function Auth() {
  // router untuk redirect
  const router = useRouter();

  // handle masuk untuk redirect ke halaman login
  const handleMasuk = () => {
    router.push("/login");
  };

  // handle daftar untuk redirect ke halaman register
  const handleDaftar = () => {
    router.push("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white px-6 md:px-16 py-8 rounded-lg shadow-lg w-full max-w-md">
        <LogoHeader className="mx-auto" />

        <div className="flex flex-col justify-center items-center m-8">
          <h2 className="text-lg font-bold">Masuk Akun</h2>
          <p className="text-xs text-center my-6">
            Kumpulkan point, dapatkan promo dan penawaran khusus member
          </p>
          <div className="flex flex-col w-full gap-6 justify-center items-center">
            <Button label="MASUK" className="" onClick={handleMasuk} />
            <Button label="DAFTAR MEMBER" className="" onClick={handleDaftar} />
          </div>
          <AllBrands />
        </div>
      </div>
    </div>
  );
}
