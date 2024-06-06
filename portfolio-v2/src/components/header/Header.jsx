import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'



function Header() {

  // // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

  //DARK MODE
  const [darkMode, setDark] = useState(false)
  const darkText = darkMode ? 'Y' : 'N'

  const toggleDark = () => {
    document.getElementById('html').classList.toggle("dark")
    setDark(!darkMode);
    
  }


//NAVEGACION EFECTO
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);

//ESPERA A QUE CARGUE EL COMPONE PARA APLICARSE LOS EFECTOS
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (logoRef.current && navRef.current) {
        // Calcular nuevo tamaño de fuente
        let newSize = scrollY > lastScrollTop.current
          ? 9 - scrollY * 0.02
          : 10 - scrollY * 0.02;
        newSize = Math.max(newSize, 3);
        newSize = Math.min(newSize, 10);

        // Solo actualizar si el tamaño cambia
        const currentFontSize = parseFloat(logoRef.current.style.fontSize);
        if (newSize !== currentFontSize) {
          logoRef.current.style.fontSize = `${newSize}vw`;
        }

        // Cambia la opacidad de la navegación
        const newOpacity = scrollY > 100 ? 0 : 1;
        const currentOpacity = parseFloat(getComputedStyle(navRef.current).opacity);
        if (newOpacity !== currentOpacity) {
          navRef.current.style.opacity = newOpacity;
        }

        lastScrollTop.current = scrollY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);



 

  return (
    <header className='dark:bg-neutral-800 dark:text-white bg-white '>
      <Link to={'/'}>
        <h1 className='leading-none font-bold border-b dark:border-neutral-500  border-neutral-400 whitespace-nowrap' id='logo' ref={logoRef}>
          H<span className='texto-logo-oculto'>AROLD</span> P<span className='texto-logo-oculto'>ALACIOS</span>
        </h1>
      </Link>
      <nav className='navegacion flex justify-between text-sm text-gray-400 px-2 mt-2 dark:bg-neutral-800 dark:text-white bg-white' ref={navRef}>
        <ul className='d-movil '>
          <li><Link
            to={"/"}
            preventScrollReset={true}

          >Independiente</Link></li>
          <li>Developer</li>
        </ul>
        <ul className='d-movil-ul'>
          <li><NavLink to={"/me"}
            preventScrollReset={true}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Informacion</NavLink></li>
          <NavLink to={'/'} preventScrollReset={true}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Proyectos</NavLink> 
             <li className="cursor-pointer dark:text-white hover:text-black sm:hidden" onClick={toggleDark} >Dark mode ({darkText})</li>

        </ul>
        <ul className='d-movil'>
          <li>Text mode (N)</li>
          <li className="cursor-pointer hover:text-black" onClick={toggleDark} >Dark mode ({darkText})</li>
        </ul>
        <ul className='d-movil'>
          <li>1280x551</li>
          <li>Windows</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header