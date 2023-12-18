"use client";
import { useTheme } from "@/store/theme";
import Button from "./button";
import { ArrowRightSquare, ArrowLeftSquare } from "lucide-react";
import { useProject } from "@/store/project";
const ProjectControl = () => {
  const theme = useTheme((s) => s.theme);
  const changeProject = useProject((s)=>s.changeProject)
  const project = useProject((s)=>s.project)
  return (
    <div className="flex flex-col">
      <Button
        className={
          "w-16 p-1 m-1 h-16 flex items-center justify-center" + " " + theme
        }
        onClick={() => {
            if(project<2){
                changeProject(project+1)

            }else{
                changeProject(0)
            }
        }}
      >
        <ArrowRightSquare />
      </Button>
      <Button
        className={
          "w-16 p-1 m-1 h-16 flex items-center justify-center" + " " + theme
        }
        onClick={() => {
            if(project>0){
                changeProject(project-1)

            }else{
                changeProject(2)
            }
        }}
      >
        <ArrowLeftSquare />
      </Button>
    </div>
  );
};

export default ProjectControl;
