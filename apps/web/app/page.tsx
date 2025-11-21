"use client";

import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <Authenticated>
          <h1 className="text-2xl font-bold">APPS / WEB</h1>
          <UserButton />
          <Button
            size="sm"
            onClick={() => {
              addUser({ name: "Aliiiisher" }).then((userId) => {
                console.log(userId);
              });
            }}
          >
            Button
          </Button>
          <h1 className="text-2xl font-bold">{JSON.stringify(users)}</h1>
        </Authenticated>
        <Unauthenticated>
          <h1 className="text-2xl font-bold">Unauthenticated</h1>
          <SignInButton>Sign In</SignInButton>
        </Unauthenticated>
      </div>
    </div>
  );
}
