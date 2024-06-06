import React from 'react'

import Projectinfo from '../me/ProjectInfo'
import Formulario from '../Layout/Formulario'

import Header from '../header/Header'

import firma from '../../img/firma.png'

// ICONS 
import mailIcon from '../../assets/icons/mainIcon.svg'
import chat from '../../assets/icons/chat.svg'

function Me() {
    return (
        <div>
            <Header />
            <main className='2xl:mt-80 '>

                <div className='flex flex-col md:flex-row md:border-y border-neutral-700 dark:border-neutral-500 md:py-5   '>

                    <section className=' information md:w-2/4 '>
                        <div className='flex gap-10 w-full items-baseline justify-between md:width-50 mt-1 mb-3 md:mb-7 py-1 md:border-0'>
                            <div className='leading-none'>
                                <p className='mb-1 md:mb-2 dark:text-neutral-400 text-neutral-600 lg:text-base leading-none'>Ubicacion</p>
                                <ul className='dark:text-white text-neutral-800 text-xs lg:text-sm'>
                                    <li>Medellin, Antioquia</li>
                                    <li >Colombia</li>
                                </ul>
                            </div>
                            <div>
                                <p className=' md:ml-1 dark:text-neutral-400 text-neutral-600 lg:text-base leading-none mb-1 ml-1'>Redes</p>
                                <ul className='leading-none dark:text-white text-neutral-800  '>
                                    <li className='flex hover:border-b-2'> <img src={mailIcon} alt="mailIcon" />  <a href="">Haroldandres1901@gmail.com</a></li>
                                    {/* <li className='flex mt-1 mb-1'><img src={chat} alt='chat' /> <a href="">hapacai</a></li> */}
                                    <li className='flex mt-1 hover:border-b-2 '> <span><img src={chat} alt='chat' /> </span> <a href="https://wa.me/573135289758">3135289758</a></li>
                                </ul>

                            </div>
                        </div>

                    </section>

                    <section className='information-2 w-full md:px-20 md:mr-10 md:pb-2 ' >

                        <h3 className='dark:text-white text-neutral-800' >Soy un apasionado desarrollador de software en constante evolución, enfocado en transformar ideas en soluciones innovadoras y funcionales.</h3>

                        <p className='mt-2 mb-2 md:mt-2 leading-snug text-sm dark:text-white text-neutral-800'>
                            Con mi experiencia en desarrollo web, puedo aportar mucho a cualquier equipo o empresa. Me manejo con tecnologías de frontend como HTML, CSS, JavaScript y React, y en backend con Node.js, PHP y Laravel. También tengo buen conocimiento de bases de datos como SQL y MongoDB. Aprendo rápido y siempre busco soluciones creativas para problemas complejos. Me encanta trabajar en equipo y siempre me esfuerzo por alcanzar y superar los objetivos. Siempre estoy buscando nuevos desafíos y oportunidades para crecer y contribuir a proyectos geniales. 
                        </p>
                        <p className='text-center leading-snug text-sm dark:text-white text-neutral-700 hidden sm:block'>¡Hagamos algo increíble juntos!.</p>
                        <div className='firma flex md:justify-center w-full'>
                            <div className='contenedor-firma'>
                                <img src={firma} alt="firma" className='border-b-2 md:mt-4 mt-2 md:w-full w-3/5 border-slate-300 img-firma mb-0 pb-0' />
                                <p className='text-xs md:text-sm m-0 p-0 leading-none dark:text-white text-neutral-800'>Fullstack Developer</p>
                            </div>
                        </div>
                    </section>


                </div>

                <Projectinfo />
            </main>
        </div>
    )
}

export default Me