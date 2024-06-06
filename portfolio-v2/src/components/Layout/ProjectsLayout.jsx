
import Collapse from './Collapse'


function ProjectsLayout(props) {
    const { tecnologias } = props


    return (

        <>
            {
                tecnologias.map((project, index) => (

                    <Collapse key={index} title={project.titulo}>
                        <ul>
                            {project.tec?.map((tech, idx) => (
                                <li className='flex justify-between px-2 font-normal dark:text-white ' key={idx}>{tech}</li>
                            ))}
                        </ul>
                    </Collapse>

                ))
            }



        </>

    )
}

export default ProjectsLayout