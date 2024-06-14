"use client"

import { signIn, signOut } from "next-auth/react";

export default function SessionButtons() {
  return (
    <>
    <button className="border rounded-lg bg-neutral-200 hover:bg-neutral-300 p-2 border-neutral-400 w-1/2" onClick={() => signIn()}>Sign In</button>
    <button className="border rounded-lg bg-neutral-200 hover:bg-neutral-300 p-2 border-neutral-400 w-1/2" onClick={() => signOut()}>Sign Out</button>
    </>
  );
}
