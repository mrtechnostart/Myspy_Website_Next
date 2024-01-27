"use client";

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
import { useState } from "react";
export default function AddProject() {
  const personas = [
    {
      persona: "Captain X",
    },
    { persona: "Madhusudhan Pathak" },
    { persona: "Dove" },
    { persona: "MYSPY" },
    { persona: "Maneshwar" },
  ];
  const [formData, setFormData] = useState({
    persona: "MYSPY",
    projectName: "",
    minDesc: "",
    desc: "",
    hrefTo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10 w-2/3 lg:w-1/3 mx-auto mt-10 md:mt-0">
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
              onValueChange={(e) => setFormData({ ...formData, persona: e })}
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
              name="hrefTo"
              id="hrefTo"
              value={formData.hrefTo}
              onChange={(e) =>
                setFormData({ ...formData, hrefTo: e.target.value })
              }
              placeholder="Link of Project: "
            />
            <Button type="submit" className="my-3" variant="outline">
              Add Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
