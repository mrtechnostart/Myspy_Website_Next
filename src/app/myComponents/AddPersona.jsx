"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "@/lib/useDebounce";
export default function AddPersona() {
  const [persona, addPersona] = useState("");
  const [exist, setExist] = useState(false);
  const { toast } = useToast();
  const [debounced, setDebounced] = useState(true);
  const debouncedSearch = useDebounce(persona, setDebounced);
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/api/persona", {
        persona: persona,
      });
      console.log(response);
      if (response.statusText === "OK") {
        console.log("OK");
        toast({
          description: "Successfull ✅",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      const response = await axios.post("/api/custom", { persona: persona });
      setExist(response.data.value);
    })();
  }, [debouncedSearch]);
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
          <Button
            type="submit"
            className="my-3"
            variant="outline"
            disabled={isLoading || exist || debounced}
          >
            Add Now
          </Button>
        </form>
      </div>
    </>
  );
}
