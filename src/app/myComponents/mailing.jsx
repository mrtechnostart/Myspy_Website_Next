"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Mailing() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="flex flex-col justify-center mb-10 w-2/3 lg:w-1/3 mx-auto mt-10 md:mt-0">
        <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
          Join My Mailings
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
      <div className="w-2/3 lg:max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder="EmailID"
          />
          <Button type="submit" className="my-3" variant="outline">
            Join Now
          </Button>
        </form>
      </div>
    </>
  );
}
