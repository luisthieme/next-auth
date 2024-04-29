"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("Not logged in!");
    },
  });

  if (status != "authenticated") {
    return <h1>Not authenticated</h1>;
  }

  return <h1>Protected Page</h1>;
}
