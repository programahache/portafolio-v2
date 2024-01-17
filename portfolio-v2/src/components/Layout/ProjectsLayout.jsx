import React from 'react'

function ProjectsLayout(props) {
    const { projects } = props

    console.log(projects)
    return (

    <ul>
            {
            projects.map((project, index) => (
                <li key={index}>
                    <div className=' text-2xl flex justify-between hover:bg-black cursor-pointer hover:text-white font-bold px-2'>
                        <div>
                            <h4>{project.titulo}</h4>
                        </div>
                        <div>
                            <p>{project.cantidad}</p>
                        </div>
                    </div>
                </li>
            ))
        }

    </ul>

    )
}

export default ProjectsLayout