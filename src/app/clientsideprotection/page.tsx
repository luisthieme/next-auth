"use client";

import { useSession } from "next-auth/react";
import NotAuthorized from "@/components/NotAuthorized";
import ProtectedContent from "@/components/ProtectedContent";
import Loading from "@/components/Loading";

export default function Page() {
  const session = useSession();

  if (session.status == "loading") {
    return <Loading />;
  }

  if (session.status != "authenticated") {
    return <NotAuthorized />;
  }

  return <ProtectedContent />;
}
