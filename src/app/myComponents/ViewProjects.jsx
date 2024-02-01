"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
import { Textarea } from "@/components/ui/textarea";

function DialogDemo({ data, updater }) {
  const [formData, setFormData] = useState(data);
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.patch("/api/project", formData);
      updater((prev) => {
        return prev.map((element) => {
          if (element.id === data.id) {
            return { ...element, projectName: formData.projectName };
          }
          return element;
        });
      });
      if (response.status === 200)
        toast({
          description: "Successfull ✅",
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(formData);
  }
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
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
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
            <DialogFooter>
              <Button
                type="submit"
                className="my-3"
                variant="outline"
                disabled={isLoading}
              >
                Update Now
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default function ViewProjects() {
  const [ProjectData, setProjectData] = useState([
    { projectName: "Fetching", id: "1" },
  ]);

  async function handleDelete(id) {
    const newData = ProjectData.filter((element) => element.id !== id);
    setProjectData(newData);
    try {
      const response = await axios.delete(`/api/project?id=${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/project");
      console.log(response.data.data);
      setProjectData(response.data.data);
    })();
  }, []);

  return (
    <>
      <div className="w-2/3 mx-auto flex justify-center">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ProjectData.map((element, index) => {
              return (
                <TableRow key={element.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{element.projectName}</TableCell>
                  <TableCell className=" flex justify-end space-x-3 items-center">
                    <DialogDemo data={element} updater={setProjectData} />
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
