import React from "react"
import "./style.css"
import FarbeLogo from "../images/FarbeLogo.png"

function HeaderComponent(){
    return(
        <header>
            <img src={FarbeLogo} />
            <nav>
                <ul class="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
	  		        <li><a href="#">O que fazemos?</a>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
			        </li>
                    <li><a href="#">Links</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;