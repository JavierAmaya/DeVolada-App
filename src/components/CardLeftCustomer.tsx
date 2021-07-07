import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSitemap,faUtensils,faShoppingCart,faIndustry,faGlassCheers,faCar,faCoffee,faHeartbeat,faLaptop,faPlus,faSuitcase,faHandshake,faThList,faStar} from '@fortawesome/free-solid-svg-icons';

const CustomerLeft:React.FC = () => (
    <ul className="nav navbar-nav">
        <li className="menu-title"><span>Componentes</span></li>
        <li className="menu-item-has-children dropdown">
            <a href="appCustomer" className="dropdown-togglex"> <FontAwesomeIcon icon={faSitemap}/> <span>Categorias</span></a>
            <ul className="sub-menu children">                            
                <li><FontAwesomeIcon className="IfaIcons" icon={faUtensils}/><a href="Category.html">Restaurantes</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faShoppingCart}/><a href="Category.html">Supermercado</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faIndustry}/><a href="Category.html">Ferretería</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faGlassCheers}/><a href="Category.html">Licorería</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faCar}/><a href="Category.html">Auto Repuestos</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faCoffee}/><a href="Category.html">Cafetería</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faHeartbeat}/><a href="Category.html">Farmacia</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faLaptop}/><a href="Category.html">Tecnología</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faPlus}/><a href="Category.html">Más</a></li>
            </ul>
        </li>
        <li>
            <a href="/appCustomer/Company"><FontAwesomeIcon icon={faSuitcase}/> <span>Empresas</span></a>
        </li>
        <li>
            <a href="/appCustomer/C2C"><FontAwesomeIcon icon={faHandshake}/> <span>Entregas: Cliente a cliente</span></a>
        </li>
        <li className="menu-item-has-children dropdown">
            <a href="#" ><FontAwesomeIcon icon={faThList}/> <span>Registros</span></a>
            <ul className="sub-menu children">
                <li><FontAwesomeIcon className="IfaIcons" icon={faShoppingCart}/><a href="/appCustomer/Shopping">Compras</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faStar}/><a href="/appCustomer/ListState">Estados Productos</a></li>
            </ul>
        </li>
    </ul>
)
export default CustomerLeft;