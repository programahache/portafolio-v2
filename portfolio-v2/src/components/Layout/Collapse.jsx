
import { useState } from "react"


import arrow from '../../assets/icons/arrow.svg'



function Collapse({ title, children, className }) {

    const [isOpen, setIsopen] = useState(false)

    const toggleCollapse = () => { setIsopen(!isOpen) }

    return (
        <div className={` w-full flex collapse-container justify-between font-bold px-2 md:text-2xl dark:text-white  hover:bg-black cursor-pointer hover:text-white `}>
            <div className="w-full">
                <button onClick={toggleCollapse} className="collapse-button w-full text-left flex items-center ">
                    <img src={arrow}  />
                    {title}
                </button>
                <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                    <div>              
                        {children}
                    </div>
             
                </div>
            </div>
            <div>
                <p>3</p>
            </div>
        </div>
    )
}

export default Collapse