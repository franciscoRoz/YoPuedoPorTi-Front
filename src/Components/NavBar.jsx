import { useState } from "react";
import { Link } from "react-router-dom"

import "../CSS/NavBar.css"
export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);

    };

    const toggleSubMenu1 = () => {
        setShowSubMenu1(!showSubMenu1);
 
        setSelectedOption('Opción 1');
    };

   /* <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                       Control Stock y Ventas
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/opcion1/enlace1">Enlace 3</Link></li>
                        <li><Link to="/opcion1/enlace2">Enlace 4</Link></li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                        Gestion Facturas
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/opcion1/enlace1">Enlace 5</Link></li>
                        <li><Link to="/opcion1/enlace2">Enlace 6</Link></li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                        Gestion caja chica
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/opcion1/enlace1">Enlace 7</Link></li>
                        <li><Link to="/opcion1/enlace2">Enlace 8</Link></li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                        Bodega
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/opcion1/enlace1">Enlace 9</Link></li>
                        <li><Link to="/opcion1/enlace2">Enlace 10</Link></li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 2' ? 'selected' : ''}>
                        RR.HH.
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/opcion2/enlace1">Registrar Empleado</Link></li>
                        <li><Link to="/rrhh/gestionhoras">Registros de Horas</Link></li>
                    </ul>
                </li>*/
    return (

        <nav className="bloque-navbar">
            
            <div className="elemento-hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`elemento-menu-items ${showMenu ? 'modificador-show' : ''}`}>
           
            <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                    <li><Link to="/Home">Inicio</Link></li>
                    </span>
                   
                        
                      
                </li>   
           
         <li>
                    <span onClick={toggleSubMenu1} className={selectedOption === 'Opción 1' ? 'selected' : ''}>
                        Nosotros
                    </span>
                    <ul className={showSubMenu1 ? 'modificador-show' : ''}>
                        <li><Link to="/Informacion">Quienes Somos</Link></li>
                        <li><Link to="/Informacion">Visión</Link></li>
                        <li><Link to="/Informacion">Misión</Link></li>
                    </ul>
                </li>
                
               
            </ul>
        </nav>


    )
}
