"use client";

import React from "react";
import Link from "next/link";

import { type AuthUser } from "@/types/auth-types";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/auth/login-model";

export default function Navbar({ user }: { user?: AuthUser | null }) {
  return (
    <nav className="fixed w-full px-6 py-3 flex justify-between items-center bg-white shadow-md">
      <h1 className="text-xl md:text-2xl font-extrabold">ExpressChat</h1>
      <div className="flex items-center space-x-5 md:space-x-8 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="#features">Features</Link>
        {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
