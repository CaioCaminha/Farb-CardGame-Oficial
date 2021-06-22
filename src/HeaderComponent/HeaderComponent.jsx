import React from "react"
import "./style.css"
import FarbeLogo from "../images/FarbeLogo.png"

function HeaderComponent(){
    return(
        <header>
            <img src={FarbeLogo} />
            <nav>
                <ul class="menu">
                    <li><a href="#">REGRAS</a></li>
                    <li><a href="#">HISTÓRIAS</a>
                        <ul>
                            <li><a href="#">Personagens</a></li>
                            <li><a href="#">Poderes</a></li>
                        </ul>
                    </li>
	  		        <li><a href="#">LISTAGEM</a>
                        <ul>
                            <li><a href="#">VERMELHA</a></li>
                            <li><a href="#">LARANJA</a></li>
                            <li><a href="#">AMARELA</a></li>
                            <li><a href="#">VERDE</a></li>
                            <li><a href="#">AZUIS</a></li>
                            <li><a href="#">ÍNDIGO</a></li>
                            <li><a href="#">ROXA</a></li>
                        </ul>
			        </li>
                    <li><a href="#">CURIOSIDADES</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;