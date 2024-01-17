import React from 'react'
import ProjectsLayout from './ProjectsLayout'
function ListProjects() {
    const projects = [
        {
            titulo: "Proyectos independiente",
            año: "año",
            cantidad: 3,
        },
        {
            titulo: "EcoAmbiente",
            año: "año",
            cantidad: 3
        },
        {
            titulo: "Medbyte",
            año: "año",
            cantidad: 3
        }
    ]
    return (

        <ProjectsLayout projects={projects} />

    )
}

export default ListProjects