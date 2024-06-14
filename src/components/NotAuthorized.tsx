import Link from "next/link";

export default function NotAuthorized() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-fit w-fit p-6 rounded-xl border border-red-600 bg-red-500/20">
        <h1 className="m-auto w-fit h-fit text-red-800">You are not allowed to see this Page. Sorry!</h1>
        <Link href="/" className="underline text-red-800 justify-end flex mt-2">Go Back</Link>
      </div>
    </div>
  );
}
