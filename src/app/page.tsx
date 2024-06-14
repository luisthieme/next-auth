"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";
import Loading from "@/components/Loading";

export default function Home() {
  const session = useSession();
  console.log(session)
  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-4 mt-24">
      <div className="w-full flex flex-col gap-2 items-center">
        <h1 className="w-full font-bold text-xl mt-2 shadow-md text-center p-2 rounded-lg border border-neutral-100">Current Session:</h1>{" "}
      {session.status != 'loading' ? showSession(session) : <Loading />}
      </div>
      <div className="w-full flex gap-2">
        <button className="border rounded-lg bg-neutral-200 hover:bg-neutral-300 p-2 border-neutral-400 w-1/2" onClick={() => signIn()}>Sign In</button>
        <button className="border rounded-lg bg-neutral-200 hover:bg-neutral-300 p-2 border-neutral-400 w-1/2" onClick={() => signOut()}>Sign Out</button>
      </div>
      <div className="flex gap-2 items-center w-full mx-auto flex-col">
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/clientsideprotection">Client-Side Protection</Link>
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/serversideprotection">Server-Side Protection</Link>
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/middlewareprotection">Middleware Protection</Link>
      </div>
    </main>
  );
}

function showSession(session: any ): React.ReactElement { // refactor: types
  const data = session.data;
  return (
    <div className="flex w-full gap-2">
      <div className="w-1/2 border border-neutral-100 rounded-lg p-2 shadow-md">
        <p>Email: {data?.user.email}</p>
        <p>Name: {data?.user.name}</p>
        <p>User ID: {data?.user.id}</p>
      </div>
      <div className="w-1/2 border border-neutral-100 rounded-lg p-2 shadow-md">
        <p>Status: {session.status}</p>
        <p>Expires: {data?.expires}</p>
      </div>
    </div>
  );
}
