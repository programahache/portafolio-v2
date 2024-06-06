import React from 'react'
import ListProjects from '../Layout/ListProjects'

function ProjectInfo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row py-3'>

            <section className='information  md:w-2/4'>
                <div className='flex justify-between px-1 md:flex-col md:px-0 mt-2 dark:text-white'>
                    <p>Tecnologia</p>
                    <p>Años</p>
                </div>
            </section>

            <section className='information-2 md:px-20 md:mr-10 w-full' >
                <ListProjects />
            </section>

        </div>
    )
}

export default ProjectInfo