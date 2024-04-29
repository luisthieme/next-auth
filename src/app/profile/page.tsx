import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/components/User";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>{JSON.stringify(session)}</div>;
      <User />
    </>
  );
}
