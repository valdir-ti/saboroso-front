import React from 'react';

export default function Subscribe(){
  return (
    <>
      <div id="gtco-subscribe">
            <div class="gtco-container">
              <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
                  <h2 class="cursive-font">Se inscrever</h2>
                  <p>Receba as novidades do nosso restaurante</p>
                </div>
              </div>
              <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2">
                  <form class="form-inline">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label for="email" class="sr-only">E-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Seu E-mail" />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <button type="submit" class="btn btn-default btn-block">Inscrever</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
