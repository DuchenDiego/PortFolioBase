<template>
  <div>
    <div class="cuerpo">
      <div>
        <h1>PORTFOLIO</h1>
        <h2>
          Proyectos relevantes en los que estuve involucrado total o
          parcialmente
        </h2>
      </div>
      <div class="first-grid">
        <div class="project" @click="popup(1)">
          <img src="@/assets/img/queue.jpg" class="image" alt />
          <!-- <div class="middle">
            <div @click="popup(1)" class="text">
              <a style="color:white;">
                <h3>VER DETALLES</h3>
              </a>
            </div>
          </div> -->
          <span class="tooltip">Alpha-Queue</span>
        </div>
        <div class="project" @click="popup(2)">
          <img src="@/assets/img/dispatcher.jpg" alt />
          <span class="tooltip">Alpha-Dispatch</span>
        </div>
        <div class="project" @click="popup(3)">
          <img src="@/assets/img/efacturacion.jpg" alt />
          <span class="tooltip">Alpha-EBill</span>
        </div>
      </div>
      <div class="second-grid">
        <div class="project" @click="popup(4)">
          <img class="cropped" src="@/assets/img/pbx.jpg" alt />
          <span class="tooltip">Alpha-Stic</span>
        </div>
        <div class="project" @click="popup(5)">
          <img src="@/assets/img/odoo.png" alt />
          <span class="tooltip">ERP Odoo / Facturación Electrónica</span>
        </div>
      </div>
    </div>
    <div :class="modalClass">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <a
            style="color: #c2d1da;"
            v-if="showBackBtn"
            @click="goToMainModulePage"
          >
            <span class="material-icons">arrow_back</span>
          </a>
          <p class="modal-card-title">PROYECTO</p>
          <button
            class="delete"
            aria-label="close"
            @click="closePopup"
          ></button>
        </header>
        <section class="modal-card-body">
          <div v-if="modalContent == 1" class="first-modal-grid">
            <p>
              Sistema que permite el control, seguimiento y automatización de un
              proceso de encolamiento desde la obtención del ticket hasta la
              finalización del giro/transacción ó solicitud del cliente
            </p>
            <img
              style="margin-left:15%; border-radius:80%"
              src="@/assets/img/AlphaSystemsLogo.png"
              alt="Empresa Alpha Systems"
            />
            <div>
              <div class="boxOne">
                <b>Empresa:</b>
                <b>Intervención:</b>
                <b>Rol Cumplido:</b>
                <b>Tecnologías Empleadas:</b>
                <b>Base de Datos:</b>
              </div>
              <div class="boxTwo">
                <b>Alpha Systems</b>
                <b>Parcial</b>
                <b>FrontEnd / BackEnd</b>
                <b>C#, JS, .Net FW, Vue, Vuex, Axios, Vuetify, Leaflet</b>
                <b>MSSQL Server</b>
              </div>
            </div>
            <div>
              <a class="modulos" @click="modalContent = 1.1">
                <!-- <span class="material-icons">developer_board</span> -->
                VER MODULOS
              </a>
              <a class="back" @click="closePopup">
                Volver
                <!-- <span class="material-icons">arrow_forward</span> -->
              </a>
            </div>
          </div>
          <div v-else-if="modalContent == 1.1" class="first-modal-subgrid">
            <div
              :class="scaleActive"
              @click="moduloScaled = !moduloScaled"
              :aria-pressed="moduloScaled ? 'true' : 'false'"
            >
              <p v-if="!moduloScaled">TicketVirtual</p>
              <img v-else src="@/assets/DemoEticket.gif" />
            </div>
            <div>
              <p v-if="!moduloScaled">Eliga un Módulo del Sistema</p>
            </div>
            <!-- <div>
              <div v-if="!moduloScaled" class="modulo-item">Ticket Virtual</div>
            </div>
            <div>
              <div v-if="!moduloScaled" class="modulo-item">Centralizador</div>
            </div> -->
            <!-- <div v-if="moduloScaled">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, est.
            </div> -->
            <!-- <div v-if="moduloScaled">
              <div>
                <a class="modulos" style="margin-left:50%">
                  Demo
                </a>
                <a class="back" @click="moduloScaled = false">
                  Volver
                </a>
              </div>
            </div> -->
          </div>
          <div v-if="modalContent == 2" class="first-modal-grid">
            <p>
              Sistema Dispatching para control y seguimiento de personal para
              atención a clientes (Soporte, Mantenimiento y Calidad)
            </p>
            <img
              style="margin-left:15%; border-radius:80%"
              src="@/assets/img/AlphaSystemsLogo.png"
              alt="Empresa Alpha Systems"
            />
            <div>
              <div class="boxOne">
                <b>Empresa:</b>
                <b>Intervención:</b>
                <b>Rol Cumplido:</b>
                <b>Tecnologías Empleadas:</b>
                <b>Base de Datos:</b>
              </div>
              <div class="boxTwo">
                <b>Alpha Systems</b>
                <b>Parcial</b>
                <b>FrontEnd</b>
                <b>JS, Vue, Vuex, Axios, Vuetify</b>
                <b>MSSQL Server</b>
              </div>
            </div>
            <div>
              <a class="modulos" @click="modalContent = 2.1">
                VER MODULOS
              </a>
              <a class="back" @click="closePopup">
                Volver
              </a>
            </div>
          </div>
          <div v-else-if="modalContent == 2.1" class="first-modal-subgrid">
            <div
              :class="scaleActive"
              @click="moduloScaled = !moduloScaled"
              :aria-pressed="moduloScaled ? 'true' : 'false'"
            >
              <p v-if="!moduloScaled">Cliente</p>
              <img v-else src="@/assets/DemoDispatchClient.gif" />
            </div>
            <div>
              <p v-if="!moduloScaled">Eliga un Módulo del Sistema</p>
            </div>
            <div>
              <!-- <div
                :class="scaleActive"
                @click="moduloScaled = !moduloScaled"
                :aria-pressed="moduloScaled ? 'true' : 'false'"
              >
                <p v-if="!moduloScaled">Interno</p>
                <img v-else src="@/assets/DemoDispatchInterno.gif" />
              </div> -->
              <div v-if="!moduloScaled" class="modulo-item">Interno</div>
              <!-- <img v-else src="@/assets/DemoDispatchInterno.gif" /> -->
            </div>
            <div>
              <div v-if="!moduloScaled" class="modulo-item">Centralizador</div>
            </div>
          </div>
          <div v-if="modalContent == 3" class="first-modal-grid">
            <p>
              Sistema de Facturación Electrónica diseñado para certificación de
              modalidades Propia y Proveedor de acuerdo a la normativa del
              Servicio de Impuestos Nacionales
            </p>
            <img
              style="margin-left:15%; border-radius:80%"
              src="@/assets/img/AlphaSystemsLogo.png"
              alt="Empresa Alpha Systems"
            />
            <div>
              <div class="boxOne">
                <b>Empresa:</b>
                <b>Intervención:</b>
                <b>Rol Cumplido:</b>
                <br />
                <b>Tecnologías Empleadas:</b>
                <br />
                <b>Base de Datos:</b>
              </div>
              <div class="boxTwo">
                <b>Alpha Systems</b>
                <b>Parcial</b>
                <b>Backend / FrontEnd / Mobile/ Integración</b>
                <b
                  >Visual Basic, C#, .Net FW, Vue, Flutter, Vuex, Axios,
                  Vuetify</b
                >
                <b>MSSQL Server</b>
              </div>
            </div>
            <div>
              <a class="modulos" @click="modalContent = 3.1">
                VER MODULOS
              </a>
              <a class="back" @click="closePopup">
                Volver
              </a>
            </div>
          </div>
          <div v-else-if="modalContent == 3.1" class="first-modal-subgrid">
            <div
              :class="scaleActive"
              @click="moduloScaled = !moduloScaled"
              :aria-pressed="moduloScaled ? 'true' : 'false'"
            >
              <p v-if="!moduloScaled">Portal Web</p>
              <img v-else src="@/assets/DemoPortalFact.gif" />
            </div>
            <div>
              <p v-if="!moduloScaled">Eliga un Módulo del Sistema</p>
            </div>
          </div>
          <div v-if="modalContent == 4" class="first-modal-grid">
            <p>
              Sistema Telefónico de Información y Costeo, encargado de capturar
              datos de centrales telefónicas Cisco/Avaya, procesarlos y
              presentarlos con su correspondiente tarifación de llamadas
            </p>
            <img
              style="margin-left:15%; border-radius:80%"
              src="@/assets/img/AlphaSystemsLogo.png"
              alt="Empresa Alpha Systems"
            />
            <div>
              <div class="boxOne">
                <b>Empresa:</b>
                <b>Intervención:</b>
                <b>Rol Cumplido:</b>
                <b>Tecnologías Empleadas:</b>
                <b>Base de Datos:</b>
              </div>
              <div class="boxTwo">
                <b>Alpha Systems</b>
                <b>Completa</b>
                <b>Backend / FrontEnd</b>
                <b>Java, C#, Js, .Net Core, Vue, Vuex, Axios, Vuetify</b>
                <b>MSSQL Server</b>
              </div>
            </div>
            <div>
              <a class="modulos" @click="modalContent = 4.1">
                VER MODULOS
              </a>
              <a class="back" @click="closePopup">
                Volver
              </a>
            </div>
          </div>
          <div v-else-if="modalContent == 4.1" class="first-modal-subgrid">
            <div
              :class="scaleActive"
              @click="moduloScaled = !moduloScaled"
              :aria-pressed="moduloScaled ? 'true' : 'false'"
            >
              <p v-if="!moduloScaled">STIC</p>
              <img v-else src="@/assets/DemoStic.gif" />
            </div>
            <div>
              <p v-if="!moduloScaled">Eliga un Módulo del Sistema</p>
            </div>
          </div>
          <div v-if="modalContent == 5" class="first-modal-grid">
            <p>
              Desarrollo de Módulos para la nacionalización Boliviana de ERP
              (Facturación Computarizada/ Facturación Electrónica / Reportes
              Contables/ POS/ Configuración)
            </p>
            <img
              style="margin-left:15%; border-radius:80%"
              src="@/assets/img/AlphaSystemsLogo.png"
              alt="Empresa Alpha Systems"
            />
            <div>
              <div class="boxOne">
                <b>Empresa:</b>
                <b>Intervención:</b>
                <b>Rol Cumplido:</b>
                <b>Tecnologías Empleadas:</b>
                <b>Base de Datos:</b>
              </div>
              <div class="boxTwo">
                <b>Alpha Systems</b>
                <b>Completa</b>
                <b>Backend / FrontEnd</b>
                <b>Python, JS, Odoo</b>
                <b>PostgreSQL</b>
              </div>
            </div>
            <div>
              <a class="modulos" @click="modalContent = 5.1">
                VER MODULOS
              </a>
              <a class="back" @click="closePopup">
                Volver
              </a>
            </div>
          </div>
          <div v-else-if="modalContent == 5.1" class="first-modal-subgrid">
            <div
              :class="scaleActive"
              @click="moduloScaled = !moduloScaled"
              :aria-pressed="moduloScaled ? 'true' : 'false'"
            >
              <p v-if="!moduloScaled">Facturación Electrónica</p>
              <img v-else src="@/assets/DemoOdoo.gif" />
            </div>
            <div>
              <p v-if="!moduloScaled">Eliga un Módulo del Sistema</p>
            </div>
          </div>
        </section>
        <!-- <footer class="modal-card-foot">
          <button class="button is-primary">Save changes</button>
          <button class="button" @click="closePopup">Cerrar</button>
        </footer>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class PortfolioGrid extends vue {
  private modalClass = "modal";
  private modalContent = 0;
  private moduloScaled = false;

  // get alternateGrid() {
  //   if (this.moduloScaled) {
  //     return "first-modal-subgrid-alternative";
  //   } else {
  //     return "first-modal-subgrid";
  //   }
  // }

  get showBackBtn() {
    if (this.modalContent % 1 == 0) {
      return false;
    } else {
      return true;
    }
  }

  private goToMainModulePage() {
    this.modalContent = Math.round(this.modalContent);
  }

  get scaleActive() {
    if (this.moduloScaled) {
      return "modulo-item modulo-item-scaled";
    } else {
      return "modulo-item";
    }
  }

  private popup(contenido: number) {
    this.modalClass = "modal is-active";
    this.modalContent = contenido;
  }
  private closePopup() {
    this.modalClass = "modal";
  }
}
</script>

<style lang="scss" scoped>
@import "~material-design-icons/iconfont/material-icons.css";
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap");
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css";
a {
  color: inherit;
  text-decoration: none;
}
%modulo-container {
  font-size: 1.8em;
  color: #c2d1da;
  display: grid;
  grid-gap: 2vh;
}
.first-modal-grid {
  @extend %modulo-container;
  grid-template-columns: 500px 400px;
  grid-template-rows: 240px 240px;
}
.first-modal-grid :nth-child(1) {
  font-family: "Slabo 27px", serif;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: justify;
  font-size: 0.9em;
}
.first-modal-grid :nth-child(2) {
  font-family: "Share Tech Mono", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
}
.first-modal-grid :nth-child(3) {
  font-family: "Share Tech Mono", monospace;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .boxOne {
    position: relative;
    flex-direction: column;
    font-size: 0.9em;
    text-align: start;
  }
  .boxTwo {
    position: relative;
    flex-direction: column;
    font-size: 0.88em;
    left: 10%;
    text-align: center;
  }
}
.first-modal-grid :nth-child(4) {
  font-family: "Share Tech Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
%options {
  width: 15rem;
  height: 5rem;
  background-color: #000;
  color: inherit;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
}
.modulos {
  @extend %options;
  margin-left: 1%;
  height: 4rem;
  border: solid 3px #b629a0;
}
.modulos:hover {
  background-color: #b629a0;
}
.back {
  @extend %options;
  margin-top: 3%;
  margin-right: 15%;
  height: 4rem;
  border: solid 3px rgb(21, 202, 102);
}
.back:hover {
  background-color: rgb(21, 202, 102);
}
// Dinamic modal subgrid
.first-modal-subgrid {
  @extend %modulo-container;
  grid-template-columns: 380px 380px 100px;
  grid-template-rows: 180px 100px 180px;
}
.first-modal-subgrid :nth-child(1) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  animation: fadeIn 2s;
}
.first-modal-subgrid :nth-child(2) {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  margin-top: 5%;
  margin-left: 35%;
  animation: fadeIn 2s;
}
.first-modal-subgrid :nth-child(3) {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin-left: 10%;
  animation: fadeIn 2s;
}
.first-modal-subgrid :nth-child(4) {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  animation: fadeIn 2s;
}
.first-modal-subgrid :nth-child(5) {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  animation: fadeIn 3s;
}
.first-modal-subgrid :nth-child(6) {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  animation: fadeIn 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// .first-modal-subgrid-alternative {
//   @extend %modulo-container;
//   grid-template-columns: 50% 50%;
//   grid-template-rows: 50% 50%;
// }
// .first-modal-subgrid-alternative:nth-child(1) {
//   grid-column: 1 / 2;
//   grid-row: 1 / 2;
// }
// .first-modal-subgrid-alternative:nth-child(2) {
//   grid-column: 2 / 3;
//   grid-row: 1 / 2;
// }
// .first-modal-subgrid-alternative:nth-child(2) {
//   grid-column: 2 / 3;
//   grid-row: 2 / 3;
// }
////
.modulo-item {
  width: 15rem;
  height: 10rem;
  border-radius: 80%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 3px #b629a0;
  transition: all 0.5s ease;
}
.modulo-item-scaled {
  margin-top: 40%;
  transform: translate(-350px, 10px); /* Standard syntax */
  width: 100rem;
  height: 20rem;
  border-radius: 0%;
}
.modulo-item:hover {
  background-color: #b629a0;
  border: solid 3px #c2d1da;
  box-shadow: 0 10px 10px -5px;
}
.cuerpo {
  padding: 2em;
  background: #333333;
  height: 150vh;
  font-family: "Share Tech Mono", monospace;
  text-align: start;
}
.modal-card {
  height: 100%;
  width: 80%;
  border-radius: 0%;
}
.modal-card-head {
  background-color: #000;
  border-bottom: solid 1px #c2d1da;
}
.modal-card-body {
  background-color: #000;
}
.modal-card-title {
  color: #c2d1da;
  margin-left: 2%;
}
.modal.is-active {
  animation: modalAnim 0.2s ease-in-out;
}

@keyframes modalAnim {
  0% {
    display: none;
    opacity: 0;
    height: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 396px;
  }
}
h1 {
  color: #c2d1da;
  font-size: 4em;
  margin-right: 60%;
  width: 100%;
}
h2 {
  color: #c2d1da;
  font-size: 1.5em;
  margin-right: 60%;
  width: 100%;
}
%main-grid {
  height: 50vh;
  position: relative;
  margin-top: 5%;
  display: grid;
  grid-gap: 6vh;
}
.first-grid {
  @extend %main-grid;
  grid-template-columns: 300px 100px 300px 100px 300px;
  grid-template-rows: 300px;
}
.second-grid {
  @extend %main-grid;
  grid-template-columns: 230px 300px 100px 300px 100px;
  grid-template-rows: 300px;
}
.project {
  border: 4px solid rgb(21, 202, 102);
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 2rem;
  background-color: #333333;
}
.project:hover .overlay {
  opacity: 1;
}
.project .tooltip {
  visibility: hidden;
  width: 60%;
  font-size: 1.3rem !important;
  background-color: white;
  color: #333;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-top: 24rem;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
.project:hover .tooltip {
  visibility: visible;
}
.project::before {
  content: "";
  position: relative;
  width: 90px;
  height: 6px;
  // right: 54%;
  right: 130%;
  background-color: rgb(21, 202, 102);
}
.project::after {
  content: "";
  position: relative;
  width: 90px;
  height: 6px;
  // left: 54%;
  left: 100%;
  background-color: rgb(21, 202, 102);
}
.first-grid :nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.first-grid :nth-child(2) {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

.first-grid :nth-child(3) {
  grid-column: 5 / 6;
  grid-row: 1 / 2;
}

.second-grid :nth-child(1) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.second-grid :nth-child(2) {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}

.cropped {
  width: 250px; /* width of container */
  height: 250px; /* height of container */
  object-fit: cover;
  object-position: 80% 10%; /* try 20px 10px */
  //border: 5px solid black;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: -110%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.text {
  background-color: #04aa6d;
  color: white;
  border-radius: 10%;
  font-size: 16px;
  padding: 16px 10px;
  text-decoration: none;
}
.project:hover .image {
  opacity: 0.3;
}

.image:hover {
  transition: transform 0.2s;
}

.project:hover .middle {
  opacity: 1;
}
</style>
