import Link from "next/link";

export default function ProtectedContent() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-fit w-fit p-6 rounded-xl border border-green-600 bg-green-500/20">
      <h1 className="m-auto w-fit h-fit text-green-800">Protected content goes here.</h1>
      <Link href="/" className="underline text-green-800 justify-end flex mt-2">Go Back</Link>
      </div>
    </div>
  );
}
