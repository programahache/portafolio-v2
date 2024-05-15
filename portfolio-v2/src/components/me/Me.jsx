import React from 'react'

import Projectinfo from '../me/ProjectInfo'
import Formulario from '../Layout/Formulario'

import Header from '../header/Header'

function Me() {
    return (
        <div>
            <Header />
            <main>

                <div className='md:flex border-y-2 py-3 mt-2 '>

                    <section className=' information '>
                        <div className='flex gap-10 width-50 items-baseline'>
                            <div className='leading-none'>
                                <p className='mb-2'>Ubicacion</p>
                                <ul>
                                    <li>Medellin, Antioquia</li>
                                    <li>Colombia</li>
                                </ul>
                            </div>
                            <div>
                                <p className='mb-2'>Redes</p>
                                <ul className='leading-none'>
                                    <li> <span>M</span> <a href="">Haroldandres1901@gmail.com</a></li>
                                    <li><span>IG</span> <a href="">hapacai</a></li>
                                    <li><span>X</span> <a href="">hapacai</a></li>
                                </ul>

                            </div>
                        </div>

                    </section>

                    <section className='information-2 px-20 mr-10 mb-40  ' >

                        <h3 >Me especializo en el desarrollo FullStack.
                            Como profesional independiente, colaboro con empresas de todos los tamaños, startups,
                            estudios de diseño y creativos de todo el mundo.</h3>

                        <p className='mt-5 mb-3 leading-snug text-sm'>Soy reconocido por mi creatividad y agilidad en la resolución de problemas. Mi experiencia se centra en la programación web, donde me destaco en el uso de la biblioteca JavaScript, con un enfoque particular en el desarrollo frontend. Además, poseo conocimientos sólidos en el desarrollo backend, con experiencia en librerías PHP y la gestión de bases de datos SQL. Mi dominio se extiende a Node.js, lo que me permite ofrecer soluciones completas en el desarrollo web.</p>
                        <p className='leading-snug text-sm'>Pero, por encima de todo, mi mayor pasión es forjar relaciones laborales sólidas y vínculos genuinos con otras personas creativas de ideas afines.</p>
                    </section>


                </div>

                <Projectinfo />
            </main>
        </div>
    )
}

export default Me