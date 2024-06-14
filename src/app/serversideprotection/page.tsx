import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NotAuthorized from "@/components/NotAuthorized";
import ProtectedContent from "@/components/ProtectedContent";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <NotAuthorized />;
  }

  return <ProtectedContent />;
}
