'use client'
import Sidebar from "./Sidebar"
import { useState } from "react";
// import { FaBars } from 'react-icons/fa'

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const showSiderbar = () => setSidebar(!sidebar);

  const toggleSidebar = () => {
    let sideBar = document.getElementById('sideBar');
    console.log(sideBar);
    sideBar?.toggleAttribute('hidden')
    setSidebarOpen(!isSidebarOpen)
    console.log(isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // const hamburguer = document.querySelector('.hamburger-button');
  // const navLinks = document.querySelector('.nav-link');

  // hamburguer.addEventListener('click', () => {
  //   navLinks.classList.toggle('active');
  // });

  // const isSmallScreen = window.innerWidth <= 1100; 
  // Verifica se a tela é pequena

  return (
    <nav className="bg-red-500 w-full h-screen p-2 flex justify-between items-center ">

      <button id="hamburger-button" type="button" onClick={toggleSidebar}
        className="" aria-controls="navbar-hamburger" aria-expanded={isSidebarOpen}>

        {isSidebarOpen ? (
          <div>{/* // Ícone "X" quando a barra lateral está aberta*/}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-15 h-7 sideBar button-x" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <Sidebar id="sideBar" />
          </div>
        ) : (
          // Ícone de hamburguer quando a barra lateral está fechada
          <svg xmlns="http://www.w3.org/2000/svg" className="w-15 h-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}

      </button>
      {/* <button>
      <img src="../logo.png" alt="Logo da Pato a Jato" className="logo" onClick={showSiderbar} />
      {/* <Sidebar id="sideBar"/> */}   {/*     <FaBars onClick={showSiderbar} />   {sidebar && <Sidebar active={setSidebar} />}}   </button> */}

        <a href="#" className="flex items-center justify-center">
          <img src="../logo.png" alt="Logo da Pato a Jato" className="logo h-8 mr-5" />
        </a>
        <a href="#" className="flex items-center">
          <img src="../prototipo-icon.png" alt="Ícone do Protótipo da Pato a Jato" className="icon-popygua h-8 mr-5" />
        </a>

    </nav>
  )
}

export default Nav