import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const handleScroll = () => {
    let lastScrollTop = 0;
    const textoCambiante = document.getElementById('logo');
    const navegacion = document.querySelector('.navegacion');

    return () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollTop) {
        // Scroll hacia abajo
        let newSize = 5 - scrollY * 0.02;
        newSize = Math.max(newSize, 3);
        textoCambiante.style.fontSize = `${newSize}rem`;
      } else {
        // Scroll hacia arriba
        let newSize = 9 - scrollY * 0.02;
        newSize = Math.min(newSize, 8.5);
        textoCambiante.style.fontSize = `${newSize}rem`;
      }

      lastScrollTop = scrollY;

      // Cambia la opacidad de la navegación
      if (scrollY > 100) {
        navegacion.style.display = "none";
        navegacion.style.transition = 'opacity 0.5s';
      } else {
        navegacion.style.display = "flex";
        navegacion.style.transition = 'opacity 0.5s';
      }
    };
  };

  useEffect(() => {
    const scrollHandler = handleScroll();
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header>
      <Link to={'/'}>
        <h1 className='leading-none font-bold border-y-2 whitespace-nowrap' id='logo'>
          H<span className='texto-logo-oculto'>AROLD</span> P<span className='texto-logo-oculto'>ALACIOS</span>
        </h1>
      </Link>
      <nav className='navegacion flex justify-between text-sm text-gray-400 px-2 mt-2'>
        <ul>
          <li><Link to={"/me"}>Independiente</Link></li>
          <li>Developer</li>
        </ul>
        <ul>
          <li><Link to={"/me"}>Informacion</Link></li>
          <Link to={'/'}>Proyectos</Link>
        </ul>
        <ul>
          <li>Text mode (N)</li>
          <li>Dark mode (N)</li>
        </ul>
        <ul>
          <li>1280x551</li>
          <li>Windows</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header