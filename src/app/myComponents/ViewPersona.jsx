"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AlertDialogCustom from "./AlertDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "@/lib/useDebounce";

function DialogDemo({ data, updater }) {
  const [persona, setPersona] = useState(data.persona);
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [debounced, setDebounced] = useState(true);
  const debouncedSearch = useDebounce(persona, setDebounced);
  async function handleSubmit() {
    setLoading(true);
    try {
      const response = await axios.patch("/api/persona", {
        id: data.id,
        persona: persona,
      });
      updater((prev) => {
        return prev.map((element) => {
          if (element.id === data.id) {
            return { ...element, persona: persona };
          }
          return element;
        });
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    (async () => {
      const response = await axios.post("/api/custom", { persona: persona });
      setExist(response.data.value);
    })();
  }, [debouncedSearch]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Persona
            </Label>
            <Input
              id="name"
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading || exist || debounced}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default function ViewPersona() {
  const [PersonaData, setPersonaData] = useState([
    { persona: "Fetching", id: "1" },
  ]);

  async function handleDelete(id) {
    const newData = PersonaData.filter((element) => element.id !== id);
    setPersonaData(newData);
    try {
      const response = await axios.delete(`/api/persona?id=${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/persona");

      setPersonaData(response.data.data);
    })();
  }, []);

  return (
    <>
      <div className="w-2/3 mx-auto flex justify-center">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Persona</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PersonaData.map((element, index) => {
              return (
                <TableRow key={element.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{element.persona}</TableCell>
                  <TableCell className=" flex justify-end space-x-3 items-center">
                    <DialogDemo data={element} updater={setPersonaData} />
                    <AlertDialogCustom
                      Name="Delete"
                      variant="destructive"
                      id={element.id}
                      deletehandler={handleDelete}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
