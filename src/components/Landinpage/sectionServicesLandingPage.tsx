import React from "react";
const SectionServices:React.FC = () => (
    <section id="services">
    <div className="container wow fadeInUp">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section-title">Servicios</h3>
          <div className="section-title-divider"></div>
          <p className="section-description">Contamos con una serie de Trabajos</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-desktop"></i></div>
          <h4 className="service-title"><a href="">Lorem Ipsum</a></h4>
          <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
          <h4 className="service-title"><a href="">Dolor Sitema</a></h4>
          <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
          <h4 className="service-title"><a href="">Sed ut perspiciatis</a></h4>
          <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-photo"></i></div>
          <h4 className="service-title"><a href="">Magni Dolores</a></h4>
          <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-road"></i></div>
          <h4 className="service-title"><a href="">Nemo Enim</a></h4>
          <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
          <h4 className="service-title"><a href="">Eiusmod Tempor</a></h4>
          <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div>
  </section>
)
  
export default SectionServices;