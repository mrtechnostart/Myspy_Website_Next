"use client";
import AddPersona from "@/app/myComponents/AddPersona";
import AddProject from "@/app/myComponents/AddProject";
import ViewPersona from "@/app/myComponents/ViewPersona";
import ViewProjects from "@/app/myComponents/ViewProjects";
import { FaHome } from "react-icons/fa";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import SideBar from "@/app/myComponents/sideBar";
export default function Page() {
  const [CurrentComponent, setComponent] = useState(<AddPersona />);
  async function updateComponent(component) {
    setComponent(component);
  }
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <SideBar updateComponent={updateComponent} />
        <ResizableHandle withHandle />
        <ResizablePanel className="min-h-[90vh]">
          {CurrentComponent}
          {/* <ViewPersona />
          <AddProject />
          <ViewProjects /> */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
