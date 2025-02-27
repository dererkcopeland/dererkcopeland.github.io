import { projects } from "@/Data";
import React from "react";

const RecentProjects = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                A small selection of {''}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap justify-center items-center p-4 gap-16 mt-10">
                {projects.map((project, i) => (
                    <div key={i} className="">
                        {project.title}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RecentProjects