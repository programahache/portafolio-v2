import React from 'react'
import ProjectsLayout from './ProjectsLayout'
function ListProjects() {

    const tecnologias = [
        {
            titulo: "UI/UX",
            cantidad: 3,
            tec: ["CSS", "HTML", "Figma", "tailwindcss", "Boostrap", "Sass"]
        },

        {
            titulo: "Front-end",
            cantidad: 5,
            tec: ["JavaScript", "React Js", "Next JS"]
        },
        {
            titulo: "Backend tecnologias",
            cantidad: 3,
            tec: ["MySql", "Node.js", "Express", "MongoDB","PostgreSQL", "Java", "Python"]
        },
     
     
    ]

    return (

        <ProjectsLayout tecnologias={tecnologias} />

    )
}

export default ListProjects