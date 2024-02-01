"use client";

import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { IoMailSharp } from "react-icons/io5";
import AddPersona from "./AddPersona";
import AddProject from "./AddProject";
import Mails from "./Mails";
import ViewPersona from "./ViewPersona";
import ViewProjects from "./ViewProjects";

export default function SideBar({ updateComponent }) {
  const SideBarData = [
    {
      Text: "Persona",
      Icon: <IoPersonAddSharp />,
      Component: <AddPersona />,
    },
    {
      Text: "Edit Persona",
      Icon: <IoPersonAddSharp />,
      Component: <ViewPersona />,
    },
    {
      Text: "Projects",
      Icon: <GrProjects />,
      Component: <AddProject />,
    },
    {
      Text: "Edit Projects",
      Icon: <GrProjects />,
      Component: <ViewProjects />,
    },
    {
      Text: "Mails",
      Icon: <IoMailSharp />,
      Component: <Mails />,
    },
  ];
  const [sideBarSize, setSideBarSize] = useState(10);
  const handleResize = (event) => {
    setSideBarSize(() => {
      return event;
    });
    console.log(sideBarSize);
  };
  return (
    <ResizablePanel
      collapsible
      minSize={3}
      maxSize={10}
      onResize={handleResize}
    >
      <>
        {SideBarData.map((element, index) => {
          return (
            <div
              className="flex items-center leading-7 text-md justify-center border-t-2 border-b-2 py-2 "
              key={index}
              onClick={() => updateComponent(element.Component)}
            >
              {sideBarSize > 5 ? (
                <>
                  <div className="mr-2">{element.Icon}</div>
                  {element.Text}
                </>
              ) : (
                <>{element.Icon}</>
              )}
            </div>
          );
        })}
      </>
    </ResizablePanel>
  );
}
