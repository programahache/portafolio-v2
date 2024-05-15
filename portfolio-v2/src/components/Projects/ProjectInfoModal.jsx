import Header from "../header/Header"

import ControlGasto from '../../img/controlGastos.png'
import { Link, useLocation } from "react-router-dom"


import { MagicMotion } from "react-magic-motion";
import "react-magic-motion/card.css";


function ProjectInfoModal() {

    let { state } = useLocation();

    console.log(state)




    return (
        <MagicMotion  transition={{ type: "spring", stiffness: 200, damping: 20 }} >
            <Header />
            <main className="mb-5">
                <section className="flex items-start rounded w-full flex-wrap bg-gray-100 p-5">

                    <div className="w-2/4">
                        <img src={state.img} alt="ControlGasto" />
                    </div>

                    <div className="project-modal-info-container w-2/4 px-3 ">

                        <div className="project-modal-info-containter-titulo flex items-start justify-between w-full pb-5 ">
                            <div>
                                <p className="text-sm text-slate-700 leading-none m-0 ">{state.nombre}</p>
                                <span className="text-xs leading-none text-slate-600">{state.empresa}</span>
                            </div>

                            <Link to={"/"} className="pb-1">X</Link>

                        </div>
                        {/* ID */}

                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between">
                                <div className="w-2/4">
                                    <p>ID</p>
                                </div>
                                <div className="w-2/4">
                                    <p>{state.id}</p>
                                </div>
                            </div>
                        </div>

                        {/* AÑO */}
                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between">
                                <div className="w-2/4"> <p>Año</p> </div>
                                <div className="w-2/4"><p>{state.ano}</p></div>
                            </div>
                        </div>
                        {/* DISEÑADOR */}
                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between  ">
                                <div className="w-2/4">
                                    <p >Diseño</p>
                                </div>
                                <div className="w-2/4">
                                    <p>{state.desing}</p>
                                </div>
                            </div>
                        </div>
                        {/* Rol */}
                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between">
                                <p className="w-2/4">Rol</p>
                                <p className="w-2/4">{state.rol}</p>
                            </div>
                        </div>
                        {/* Tecnologia */}
                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between">
                                <p className="w-2/4">Tecnologia</p>
                                <div className="w-2/4 flex flex-col flex-wrap ">
                                    {state.tecnologias.map((te) => (
                                        <p>{te}</p>
                                    ))}                           
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPCION DEL PROYECTO */}
                        <div className="text-slate-700 border-y border-slate-200 py-1">
                            <div className="flex w-full justify-between">
                                <p className="w-2/4">Descripcion</p>
                                <p className="w-2/4">{state.des}</p>
                            </div>
                        </div>

                        {/* <div className="project-modal-info-container-infoProject">
                      
                        </div> */}
                    </div>
                </section>
            </main>

        </MagicMotion>
    )
}

export default ProjectInfoModal