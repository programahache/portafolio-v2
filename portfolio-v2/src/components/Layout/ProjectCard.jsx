import React from 'react'
import medbyteAi from '../../img/medbyte-ai.png'
import Dashboard from '../../img/Dashboard.png'
import controlGastos from '../../img/controlGastos.png'
import CriptoApp from '../../img/CriptoApp.png'
import Dishmechol from '../../img/Dishmechol.png'
import Juegos from '../../img/Juegos.png'
import Lading from '../../img/landing-medbyte-ai.png'
import citas from '../../img/medbyte-co-citas-wagner-rojas.png'
import prueba from '../../img/prueba.jpg'
import universe808 from '../../img/universe808.png'
import wagnerRojas from '../../img/wagnerRojas.png'
import GDLWebcam from '../../img/GDLWebcam.png'

function ProjectCard() {
    const Project = [
   
        {
            nombre: "Medbyte.ai",
            empresa: "Medbyte",
            numero: '01',
            img: medbyteAi
        },
    
        {
            nombre: "Dishmechol",
            empresa: "Dishmechol",
            numero: '05',
            img: Dishmechol
        },
      
        {
            nombre: "GDLWebcam",
            empresa: "GDLW",
            numero: '08',
            img: GDLWebcam
        },
        {
            nombre: "Wagnerrojas.com",
            empresa: "wagner Rojas",
            numero: '14',
            img: wagnerRojas
        },
       
        {
            nombre: "Landing page Medbyte",
            empresa: "Medbyte",
            numero: '10',
            img: Lading
        },
        {
            nombre: "Citas wagner rojas",
            empresa: "Medbyte",
            numero: '11',
            img: citas
        },
        {
            nombre: "Portfolio",
            empresa: "Independiente",
            numero: '12',
            img: prueba
        },
        {
            nombre: "universe808",
            empresa: "Medbyte",
            numero: '13',
            img: universe808
        },
        {
            nombre: "Juego",
            empresa: "Independiente",
            numero: '09',
            img: Juegos
        },
        {
            nombre: "Control Gasto",
            empresa: "Personal",
            numero: '03',
            img: controlGastos
        },
        {
            nombre: "Medbyte Dashboard",
            empresa: "Medbyte",
            numero: '02',
            img: Dashboard
        },
    
          
   
        {
            nombre: "CriptoApp",
            empresa: "Independiente",
            numero: '04',
            img: CriptoApp
        },
    ]
    return (
        <div className='grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4'>
            {
                Project.map((project, index) => (
                    <div key={index} className='project-card mb-20 cursor-pointer'>
                        <div className='flex justify-between items-center mt-2'>
                            <div className='leading-none'>
                                <p>{project.nombre}</p>
                                <span className='text-card-mini'>{project.empresa}</span>
                            </div>
                            <div>
                                <p>{project.numero}</p>
                            </div>
                        </div>
                        <div className='text-center mt-5 bg-slate-100 flex items-center justify-center p-5'>
                            <div className='contenedor-img'><img src={project.img} alt="" /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard