"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function AddPersona() {
  const [persona, addPersona] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(persona);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10 w-2/3  lg:w-1/3 mx-auto mt-10 ">
        <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
          Add New Persona
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
      <div className="w-2/3 lg:max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="persona"
            id="persona"
            value={persona}
            onChange={(e) => addPersona(e.target.value)}
            placeholder="Persona Here:"
          />
          <Button type="submit" className="my-3" variant="outline">
            Add Now
          </Button>
        </form>
      </div>
    </>
  );
}
