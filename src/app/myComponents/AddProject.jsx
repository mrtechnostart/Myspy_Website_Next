"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AddProject() {
  const [personas, setPersonas] = useState([{ persona: "Fetching..." }]);
  const { toast } = useToast();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    personaId: "",
    persona: "",
    projectName: "",
    minDesc: "",
    desc: "",
    hrefto: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { persona, ...newData } = formData;
      const response = await axios.post("/api/project", newData);
      if (response.statusText === "OK") {
        toast({
          description: "Successfull ✅",
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        description: "Failed ❌",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
    console.log();
  };
  async function getPersonas() {
    try {
      const response = await axios.get("/api/persona");
      setPersonas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPersonas();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10 w-2/3 lg:w-1/3 mx-auto mt-10">
        <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
          Add More Projects
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
      <div className="w-2/3 lg:max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <Select
              onValueChange={(e) => {
                const selectedPerson = personas.find(
                  (element) => element.persona === e
                );
                setFormData({
                  ...formData,
                  persona: e,
                  personaId: selectedPerson.id,
                });
              }}
              defaultValue={formData.persona}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a Persona" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Persona</SelectLabel>
                  {personas.map((element, index) => {
                    return (
                      <SelectItem key={index} value={element.persona}>
                        {element.persona}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="text"
              name="persona"
              id="persona"
              value={formData.projectName}
              onChange={(e) =>
                setFormData({ ...formData, projectName: e.target.value })
              }
              placeholder="Project Name: "
            />
            <Input
              type="text"
              name="minDesc"
              id="minDesc"
              value={formData.minDesc}
              onChange={(e) =>
                setFormData({ ...formData, minDesc: e.target.value })
              }
              placeholder="Short Header: "
            />
            <Textarea
              placeholder="Project Short Description"
              name="desc"
              id="desc"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
            />
            <Input
              type="text"
              name="hrefto"
              id="hrefto"
              value={formData.hrefto}
              onChange={(e) =>
                setFormData({ ...formData, hrefto: e.target.value })
              }
              placeholder="Link of Project: "
            />
            <Button
              type="submit"
              className="my-3"
              variant="outline"
              disabled={isLoading}
            >
              Add Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
