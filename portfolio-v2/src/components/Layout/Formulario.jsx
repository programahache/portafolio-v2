import React from 'react'

function Formulario() {
    return (
        <form action="" className='flex flex-col justify-between mt-32'>
            <legend className='text-center'><h3>Contacto</h3></legend>
            <div className='flex flex-col'>
                <label htmlFor="">Nombre</label>
                <input type="text" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>

            <button type="submit">Enviar</button>

        </form>
    )
}

export default Formulario