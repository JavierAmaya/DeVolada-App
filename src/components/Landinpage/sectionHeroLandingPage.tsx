import React from "react";
const SectionHero:React.FC = () => (
    <section id="hero" >
        <div className="hero-container">
        <div className="wow fadeIn">
            <h1>Bienvenidos a  <span id="colorApp" >¡De Volada!</span></h1>
            <h2>Tu app amiga<span className="rotating"> segura, amigable y practica</span></h2>
            <div className="actions">
            <a href="#about" className="btn-get-started">Nosotros</a>
            <a href="#services" className="btn-services">Nuestros servicios</a>
            </div>
        </div>
        </div>
    </section>
)
  
export default SectionHero;