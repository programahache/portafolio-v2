import Header from "../header/Header"

import { Link, useLocation } from "react-router-dom"



function ProjectInfoModal() {

    let { state } = useLocation();

    console.log(state)




    return (
        <div>
            <Header />
            <main className="mb-5">
                <section className="flex flex-col md:flex-row items-start rounded w-full flex-wrap dark:bg-neutral-700 dark:text-white bg-gray-100 p-5">

                    <div className="md:w-2/4">
                        <img src={state.img} alt="ControlGasto" className="" />
                    </div>

                    <div className="project-modal-info-container md:w-2/4 md:px-3 mt-5  ">

                        <div className="project-modal-info-containter-titulo flex items-start justify-between w-full pb-5 ">
                            <div>
                                <p className="text-sm dark:text-white text-slate-700 leading-none  ">{state.nombre}</p>
                                <span className="text-xs leading-none dark:text-neutral-400 text-neutral-500">{state.empresa}</span>
                            </div>

                            <Link to={"/"} className="pb-1">X</Link>

                        </div>
                        {/* ID */}

                        <div className=" dark:text-neutral-300 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between">
                                <div className="w-2/4 text-neutral-500">
                                    <p>ID</p>
                                </div>
                                <div className="w-2/4 dark:text-white text-neutral-800">
                                    <p>{state.id}</p>
                                </div>
                            </div>
                        </div>

                        {/* AÑO */}
                        <div className="  dark:text-neutral-300 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between">
                                <div className="w-2/4 text-neutral-500 "> <p>Año</p> </div>
                                <div className="w-2/4 dark:text-white text-neutral-800"><p>{state.ano}</p></div>
                            </div>
                        </div>
                        {/* DISEÑADOR */}
                        <div className="dark:text-neutral-300 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between text-neutral-500  ">
                                <div className="w-2/4">
                                    <p >Diseño</p>
                                </div>
                                <div className="w-2/4 dark:text-white text-neutral-800">
                                    <p>{state.desing}</p>
                                </div>
                            </div>
                        </div>
                        {/* Rol */}
                        <div className="dark:text-neutral-300 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between">
                                <p className="w-2/4 text-neutral-500">Rol</p>
                                <p className="w-2/4 dark:text-white text-neutral-800">{state.rol}</p>
                            </div>
                        </div>
                        {/* Tecnologia */}
                        <div className=" dark:text-neutral-400 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between">
                                <p className="w-2/4 text-neutral-500">Tecnologia</p>
                                <div className="w-2/4 flex flex-col flex-wrap dark:text-white text-neutral-800  ">
                                    {state.tecnologias.map((te) => (
                                        <p>{te}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPCION DEL PROYECTO */}
                        <div className="dark:text-neutral-300 border-b border-neutral-300 dark:border-neutral-500 py-2">
                            <div className="flex w-full justify-between ">
                                <p className="w-2/4 text-neutral-500">Descripcion</p>
                                <p className="w-2/4 dark:text-white text-neutral-800">{state.des}</p>
                            </div>
                        </div>

                        {/* <div className="project-modal-info-container-infoProject">
                      
                        </div> */}
                    </div>
                </section>
            </main>

        </div>
    )
}

export default ProjectInfoModal