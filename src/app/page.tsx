import { getServerSession } from "next-auth";
import Link from "next/link";
import SessionButtons from "@/components/SessionButtons";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-4 mt-24">
      <div className="w-full flex flex-col p-4 gap-4 items-center rounded-lg border border-neutral-100 shadow-md">
        <h1 className="w-full font-bold text-xl text-center ">Current Session:</h1>{" "}
      <pre className="bg-neutral-200 rounded-lg p-2">{JSON.stringify(session)}</pre>
      </div>
      <div className="w-full flex gap-2">
      <SessionButtons />
      </div>
      <div className="flex gap-2 items-center w-full mx-auto flex-col">
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/clientsideprotection">Client-Side Protection</Link>
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/serversideprotection">Server-Side Protection</Link>
        <Link className="border rounded-lg bg-zinc-300 p-3 border-zinc-400 w-full text-center hover:bg-zinc-400/70 transition-all" href="/middlewareprotection">Middleware Protection</Link>
      </div>
    </main>
  );
}
