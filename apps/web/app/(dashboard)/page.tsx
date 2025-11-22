"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">APPS / WEB</h1>
        <UserButton />
        <OrganizationSwitcher hidePersonal={true}/>
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
      </div>
    </div>
  );
}
