"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function DropDown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IoIosArrowDropdownCircle size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Perform Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
export default function ViewProjects() {
  const PersonaData = [
    {
      Persona: "User 1",
      ProjectName: "Project A",
      Description: "Lorem ipsum dolor sit amet",
    },
    {
      Persona: "User 2",
      ProjectName: "Project B",
      Description: "Consectetur adipiscing elit",
    },
    {
      Persona: "User 3",
      ProjectName: "Project C",
      Description: "Sed do eiusmod tempor incididunt",
    },
    {
      Persona: "User 4",
      ProjectName: "Project D",
      Description: "Ut labore et dolore magna aliqua",
    },
    {
      Persona: "User 5",
      ProjectName: "Project E",
      Description: "Duis aute irure dolor in reprehenderit",
    },
  ];
  return (
    <>
      <div className="w-2/3 mx-auto flex justify-center">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Persona</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PersonaData.map((element, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{element.Persona}</TableCell>
                  <TableCell>{element.ProjectName}</TableCell>
                  <TableCell>{element.Description}</TableCell>
                  <TableCell className="text-right">
                    <DropDown />
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
