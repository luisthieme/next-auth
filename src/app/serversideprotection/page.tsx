import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <h1>Not authenticated</h1>;
  }

  return <h1>Protected Page</h1>;
}
