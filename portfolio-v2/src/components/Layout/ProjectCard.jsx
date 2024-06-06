
import medbyteAi from '../../img/medbyte-ai.webp'
import Dashboard from '../../img/Dashboard.webp'
import controlGastos from '../../img/controlGastos.webp'
import CriptoApp from '../../img/CriptoApp.webp'
import Dishmechol from '../../img/Dishmechol.webp'
import Juegos from '../../img/Juegos.webp'
import Lading from '../../img/landing-medbyte-ai.webp'
import citas from '../../img/medbyte-co-citas-wagner-rojas.webp'
import prueba from '../../img/prueba.webp'
import universe808 from '../../img/universe808.webp'
import wagnerRojas from '../../img/wagnerRojas.webp'
import GDLWebcam from '../../img/GDLWebcam.webp'


import { Link, NavLink } from 'react-router-dom'


function ProjectCard() {





    const Project = [

        {
            nombre: "Medbyte.ai",
            empresa: "Medbyte",
            numero: '01',
            img: medbyteAi,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript"],
            desc: "Este proyecto fue realizado para la pagina principal de Medbyte S.A.S, fue un reto maquetar su totalidad en 48 horas y mantenserse fiel al diseño",
            ano: "2022",
            rol: "Developer",
            desing: "Samir Basante"
        },

        {
            nombre: "Dishmechol",
            empresa: "Dishmechol",
            numero: '05',
            img: Dishmechol,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript"],
            desc: "Maquetado de una pagina web de referencia para un cliente que se dedica a la venta de insumos medicos, el reto de esta pagina fue que no se tenia un diseño y se trabajo todo de forma imaginativa y usando referencias",
            ano: "2020",
            rol: "Developer",
            desing: "Samir Basante"
        },

        {
            nombre: "GDLWebcam",
            empresa: "GDLW",
            numero: '08',
            img: GDLWebcam,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "MYSQL", "REACT", "NODE.JS"],
            desc: "GDLWebcam fue un proyecto realizado para un evento tecnologico, este fue mi primer proyecto integrando tecnologias backend y front, adquiri mucho conocimiento al momento de planear un desarrollo, sin duda fue un gran reto.",
            ano: "2021",
            rol: "Developer",
            desing: "Harold Palacios"
        },
        {
            nombre: "Wagnerrojas.com",
            empresa: "wagner Rojas",
            numero: '14',
            img: wagnerRojas,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript"],
            desc: "Pagina realizada a una IPS de ginecologia muy reconocida en el pais, fue un proyecto que fue sencillo realizar por el requirimientod el cliente ya que solo se necesitaba una pagina informativa sin mucha complijidad",
            ano: "2021",
            rol: "Developer",
            desing: "Samir Basante"
        },

        {
            nombre: "Landing page Medbyte",
            empresa: "Medbyte",
            numero: '10',
            img: Lading,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript"],
            desc: "Este proyecto fue realizado para la compañia Medbyte S.A.S, fue un reto maquetar su totalidad en 48 horas y mantenserse fiel al diseño",
            ano: "2022",
            rol: "Developer",
            desing: "Samir Basante"
        },
        {
            nombre: "Citas wagner rojas",
            empresa: "Medbyte",
            numero: '11',
            img: citas,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "React", "MYSQL", "CalendarJs", "Node.Js"],
            desc: "Paginas de cita para la ginecologia Wagner rojas, este proyecto fue diseñado y desarrollado por mi ",
            ano: "2022",
            rol: "Developer",
            desing: "Samir Basante"
        },
        {
            nombre: "Portfolio",
            empresa: "Independiente",
            numero: '12',
            img: prueba,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "React", "MYSQL", "Node.Js"],
            desc: "Esta pagina fue creada para un cliente extanjero ",
            ano: "2023",
            rol: "Developer",
            desing: "Hapacai"
        },
        {
            nombre: "universe808",
            empresa: "Medbyte",
            numero: '13',
            img: universe808,
            tecnologias: ["Shopify"],
            desc: "Pagina Ecomerce, para innovadora marca de ropa ubicada en la ciudad de medellin",
            ano: "2022",
            rol: "Developer",
            desing: "Esteban Herrera"
        },
        {
            nombre: "CriptoApp",
            empresa: "Independiente",
            numero: '04',
            img: CriptoApp,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "React"],
            desc: "Proyecto en el cual aprendi a consumir APIS, aun lo uso para operar en criptos ",
            ano: "2020",
            rol: "Developer",
            desing: "Juan de la cruz"
        },
        {
            nombre: "Control Gasto",
            empresa: "Personal",
            numero: '03',
            img: controlGastos,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "React", "MYSQL", "Node.Js"],
            desc: "Mi proyecto mas personal, fue un proyecto que surgio a raiz de una problematica propia me gusto poder crear una solucion que ayudo a mejorar mi finanzas ",
            ano: "2020",
            rol: "Developer",
            desing: "Juan de la cruz"
        },
        {
            nombre: "Medbyte Dashboard",
            empresa: "Medbyte",
            numero: '02',
            img: Dashboard,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript", "React", "MYSQL", "CalendarJs", "PHP", "Laravel", "Twilo", "OpenAi API"],
            desc: "Proyecto mas grande para el cual participe, uniendo muchas tecnologias y usando distintas tecnicas para llevar el proyecto a cabo, fue algo ambicioso e increible, me trajo experiencias y muchos conocimientos me hizo probar de lo que era capaz",
            ano: "2022",
            rol: "Developer",
            desing: "Samir Basante"
        },

        {
            nombre: "Juego",
            empresa: "Independiente",
            numero: '09',
            img: Juegos,
            tecnologias: ["HTMLS", "CSS", "Bootstrap", "JavaScript"],
            desc: "En un momento de aburrimiento, decidi crear este juego para estas ocaciones asi espero que lo disfrutes ",
            ano: "2018",
            rol: "Developer",
            desing: "Harold Palacios"
        },


    ]

    return (
        <div className='dark:bg-neutral-800 dark:text-white bg-white grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 2xl:mt-80 mt-10'>
            {
                Project.map((project, index) => (
                    <NavLink
                        to={`proyectos/proyectoInfo/${project.nombre}`} state={{
                            tecnologias: project.tecnologias,
                            des: project.desc,
                            nombre: project.nombre,
                            id: project.numero,
                            empresa: project.empresa,
                            img: project.img,
                            ano: project.ano,
                            rol: project.rol,
                            desing: project.desing
                        }}

                    >
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
                            <div className='text-center mt-5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 bg-withe hover:dark:bg-neutral-600 container-cont-img flex items-center justify-center '>
                                <div className='contenedor-img'>
                                    <img src={project.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </NavLink>

                ))
            }
        </div>
    )
}

export default ProjectCard