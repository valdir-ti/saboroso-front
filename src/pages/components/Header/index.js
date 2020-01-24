import React, {Component} from 'react';
import {HeaderStyle} from './styles';
import Background from '../../../images/img_bg_1.jpg';
import MakeBy from '../../components/MakeBy';

export default class Header extends Component{

  render(){

    return (
      <>
        <header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner" style={{ backgroundImage: `url(${Background})`, backgroundPosition: '50% 0%' }}  data-stellar-background-ratio="0.5">
              <div class="overlay"></div>
              <div class="gtco-container">
                <div class="row">
                  <div class="col-md-12 col-md-offset-0 text-left">


                    <div class="row row-mt-15em">
                      <div class="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">

                        <MakeBy msg={'Restaurante Saboroso!'}/>

                      </div>
                      <div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
                        <div class="form-wrap">
                          <div class="tab">

                            <div class="tab-content">
                              <div class="tab-content-inner active" data-content="signup">
                                <h3 class="cursive-font">Reserva de mesa</h3>
                                <form action="#">
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label for="inputName">Nome</label>
                                      <input type="text" id="inputName" name="name" class="form-control" />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label for="inputEmail">E-mail</label>
                                      <input type="email" id="inputEmail" name="email" class="form-control" />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label for="inputPeople">Pessoas</label>
                                      <select id="inputPeople" name="people" class="form-control">
                                        <option value=""> -- selecione -- </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5+</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label for="inputDate">Data</label>
                                      <input type="text" id="inputDate" name="date" class="form-control" />
                                    </div>
                                  </div>
                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <label for="inputTime">Hora</label>
                                      <input type="text" id="inputTime" name="time" class="form-control" />                                  </div>
                                  </div>

                                  <div class="row form-group">
                                    <div class="col-md-12">
                                      <input type="submit" class="btn btn-primary btn-block" value="Reservar Agora" />
                                    </div>
                                  </div>
                                </form>
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </header>
      </>
    );
  }

}
