import React from 'react'
import ListProjects from '../Layout/ListProjects'

function ProjectInfo() {
    return (
        <div className='flex  py-3'>

            <section className=' information '>
                <div>
                    <p>Clientes</p>
                    <p>Index</p>
                </div>
            </section>

            <section className='information-2 px-20 mr-10 ' >
                <ListProjects />
            </section>

        </div>
    )
}

export default ProjectInfo