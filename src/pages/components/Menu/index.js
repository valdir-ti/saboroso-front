import React from 'react';
import {Nav} from './styles';

export default function Menu(){
  return (
    <>
    <Nav role="navigation">
            <div class="gtco-container">

              <div class="row">
                <div class="col-sm-4 col-xs-12">
                  <div id="gtco-logo">
                    <a href="/">Saboroso
                      <em>!</em>
                    </a>
                  </div>
                </div>
                <div class="col-xs-8 text-right menu-1">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="menu">Menu</a>
                    </li>
                    <li>
                      <a href="services">Serviços</a>
                    </li>
                    <li>
                      <a href="contact">Contato</a>
                    </li>
                    <li class="btn-cta">
                      <a href="reservation">
                        <span>Reserva</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </Nav>
      </>
  );
}
