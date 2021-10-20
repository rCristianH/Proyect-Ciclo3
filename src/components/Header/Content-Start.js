import React from "react";
import "./../css/StyleProduct.css"
import "./../css/ContentStart.css"

function ContenidoInicio() {
  return (
    <div>
      <div>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total ventas</div>
              <div className="number">40,876</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Desde un mes</span>
              </div>
            </div>
            <i className="bx bx-cart-alt cart"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Productos</div>
              <div className="number">38,876</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">a</span>
              </div>
            </div>
            <i className="bx bxs-cart-add cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Usuarios</div>
              <div className="number">$12,876</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Up from yesterday</span>
              </div>
            </div>
            <i className="bx bx-cart cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total </div>
              <div className="number">$12,876</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Up from yesterday</span>
              </div>
            </div>
            <i className="bx bx-cart cart three"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoInicio;