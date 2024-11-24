"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar({ user }: { user: null }) {
  return (
    <nav className="fixed w-full px-6 py-3 flex justify-between items-center bg-white shadow-md">
      <h1 className="text-xl md:text-2xl font-extrabold">ExpressChat</h1>
      <div className="flex items-center space-x-5 md:space-x-8 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="#features">Features</Link>
        {!user ? (
          <Button>Login</Button>
        ) : (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
