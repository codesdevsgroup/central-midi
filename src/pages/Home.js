import React from 'react';
import ProductList from './widgets/ProductList';
import '../assets/css/home.css';
import backgroundMusicForYou from '../assets/img/background_music_for_you.png';

function Home() {
  return (
    <main className="container Home">
      <section className="banner_home">
        <div className="row">
          <div className="col-12 col-sm-6 p-3 grid1">
            <h5 className="h2">Bem vindo a central Midi!</h5>
            <p>Mundo digital da Net</p>
          </div>
          <div className="col-12 col-sm-6 d-flex grid2">
            <div className="p-3 text-end">
              <p className="h1">+ 10.000</p>
              <p>Musicas</p>
            </div>
            <div className="p-3 text-end">
              <p className="h1">+ 700.000</p>
              <p>Acessos</p>
            </div>
          </div>
        </div>
      </section>

      <section id="info_rlm">
        <div className="container">
          <div className="row">
            <div className="text-center text-white mb-3">
              <h2>Você sabe o que MIDI, RLM e L?</h2>
              <p className="p_title">Você terá garantia total nos trabalhos desenvolvidos por nossa Equipe.</p>
            </div>

            <div className="col-12 col-md-6">
              <div className="text_info_rlm">
                <p>
                  <img src="./assets/img/icons/headset_mic.png" alt="" />
                  <strong>MIDI</strong>
                </p>
                <p className="ps-5">É a abreviação de Musical Instrument Digital Interface. É uma linguagem que permite que computadores, instrumentos musicais e outros hardwares se comuniquem.</p>

                <p>
                  <img src="./assets/img/icons/headset_mic.png" alt="" />
                  <strong>RML</strong>
                </p>
                <p className="ps-5">É a abreviação de Musical Instrument Digital Interface. É uma linguagem que permite que computadores, instrumentos musicais e outros hardwares se comuniquem.</p>

                <p>
                  <img src="./assets/img/icons/headset_mic.png" alt="" />
                  <strong>L</strong>
                </p>
                <p className="ps-5">É a abreviação de Musical Instrument Digital Interface. É uma linguagem que permite que computadores, instrumentos musicais e outros hardwares se comuniquem.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="img_info_rlm">
                <img className="img-fluid" src="./assets/img/img_info_rlm.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductList />

      <section id="music_for_you" className="text-white">
        <div className="container">
          <div className="row" style={{ backgroundImage: `url(${backgroundMusicForYou})` }}>
            <div className="col-12 col-md-6 grid_1">
              <div>
                <img className="img-fluid" src="./assets/img/img_music_for_you.png" alt="" />
              </div>
            </div>

            <div className="col-12 col-md-6 grid_2 my-auto">
              <div>
                <div className="text_title_music_for_you">
                  <h2>Musicas feitas para você</h2>
                  <p>Você terá garantia total nos trabalhos desenvolvidos por nossa Equipe.</p>
                </div>

                <p>
                  <img className="img-fluid" src="./assets/img/icons/headset_mic.png" alt="" />
                  A produção de arquivos musicais por encomenda é feita mediante o envio do áudio da música via e-mail, whatsapp ou formulário de envio juntamente à confirmação do pagamento.
                </p>
                <button>
                  <a href="#"> Quero um MIDI
                    <img className="img-fluid" src="./assets/img/icons/icon_music_buttom.png" alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
