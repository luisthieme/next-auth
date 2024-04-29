"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const session = useSession();
  return (
    <main className="w-fit mx-auto flex flex-col gap-4">
      <div className="w-fit flex flex-col gap-2 items-center">
        <h1 className="w-fit font-bold text-3xl">Current Session:</h1>{" "}
        <p className="w-fit">{JSON.stringify(session.data)}</p>
      </div>
      <div className="flex gap-2 items-center w-fit mx-auto">
        <button onClick={() => signIn()}>Sign In</button>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
      <div className="flex gap-2 items-center w-fit mx-auto">
        <Link href="/clientsideprotection">Client-Side Protection</Link>
        <Link href="/serversideprotection">Server-Side Protection</Link>
        <Link href="/middlewareprotection">Middleware Protection</Link>
      </div>
    </main>
  );
}
