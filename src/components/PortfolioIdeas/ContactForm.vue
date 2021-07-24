<template>
  <div class="cuerpo">
    <div class="header">
      <h1>CONTACTO</h1>
    </div>
    <div class="form_container">
      <div class="card">
        <div class="content">
          <div class="sideBar">
            <div class="circle">
              <!-- <span class="material-icons">gmail</span> -->
            </div>
            <div class="circle">
              <!-- <span class="material-icons">gmail</span> -->
            </div>
            <div class="circle">
              <!-- <span class="material-icons">gmail</span> -->
            </div>
          </div>
          <div class="contentBody">
            <div class="contacto">
              <h2 class="description">
                Para proyectos emergentes o para equipos
                <br />en los que pueda aportar gran valor puede
                <br />contactarme por los siguientes medios
              </h2>
              <div class="social">
                <img src="@/assets/img/gitHub.svg" />
                <a href="https://github.com/DuchenDiego" style="color: #b629a0">@DuchenDiego</a>
              </div>
              <div class="social">
                <img src="@/assets/img/linkedin.svg" />
                <a
                  href="https://www.linkedin.com/in/BradDiegoDuchen"
                  style="color: #0a81ab"
                >in/BradDiegoDuchen</a>
              </div>
              <div class="social">
                <img src="@/assets/img/gmail.svg" />
                <a style="color: #f73131">brad.duchen@gmail.com</a>
              </div>
            </div>
            <div id="wrapper">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span class="arrow-down"></span>
                </div>
              </div>
            </div>
            <form @submit.prevent="sendEmail" class="form">
              <input v-model="From" name="fromName" type="text" placeholder="Empresa" />
              <input v-model="FromEmail" name="fromEmail" type="text" placeholder="Email" />
              <textarea v-model="Message" name="message" placeholder="Asunto"></textarea>
              <input @click="sendEmail" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div :class="popUpClass">
      <div class="modal-background"></div>
      <div class="modal-content">
        <article class="message is-dark">
          <div class="message-header">
            <p>ENVIO DE CORREO</p>
            <button class="delete" @click="closePopUp" aria-label="delete"></button>
          </div>
          <div class="message-body">
            <div class="correoNotif">
              <h1>
                <b style="font-size: 1.5em">Correo enviado correctamente</b>
                <br />
                <b>El correo se envío con la información proporcionada</b>
              </h1>
              <img src="@/assets/img/email.svg" width="100em" style="margin-left: 1%" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
import emailjs from "emailjs-com";

@Component
export default class ContactForm extends vue {
  private From = "";
  private FromEmail = "";
  private To = "Brad Diego Duchen Ibañez";
  private Message = "";
  private serviceID = "service_gmailVue";
  private templateID = "template_mwnut42";
  private userID = "user_WXny4NVM5wUdg56idPloI";
  private popUpClass = "";

  private sendEmail(e: any) {
    emailjs
      .sendForm(this.serviceID, this.templateID, e.target, this.userID)
      .then(
        result => {
          console.log("Correo Enviado!", result.status, result.text);
          this.cleanForm();
          this.showPopUpCorreo();
        },
        error => {
          console.log("Error al enviar Correo", error);
          this.cleanForm();
        }
      );
  }

  private closePopUp() {
    this.popUpClass = "modal";
  }

  private showPopUpCorreo() {
    setTimeout(() => {
      this.popUpClass = "modal is-active";
    }, 500);
    this.popUpClass = "modal";
  }

  private cleanForm() {
    this.From = "";
    this.FromEmail = "";
    this.Message = "";
  }
}
</script>

<style lang="scss" scoped>
@import "~material-design-icons/iconfont/material-icons.css";
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css";

.cuerpo {
  padding: 2em;
  background: #333333;
  color: #c2d1da;
  height: 500vh;
  font-family: "Share Tech Mono", monospace;
}

.header {
  width: 100%;
  text-align: end;
  :nth-child(1) {
    margin-right: 10%;
    font-size: 4em;
  }
}
.description {
  padding: 0.5%;
  margin: 1%;
  margin-left: 10%;
  width: 80%;
  font-size: 1.3em;
  // background-color: #fff;
  background-color: #c2d1da;
  color: black;
  text-align: justify;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
}
.form_container {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.form {
  padding: 1%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 50%;
  width: 50%;
  grid-gap: 0.8vh;
}
.form :nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.form :nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.form :nth-child(3) {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
.contacto {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.5%;
}
.card {
  color: #c2d1da;
  background-color: black;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
  padding: 0.5%;
  width: 100%;
}
.content {
  display: flex;
  flex-direction: row;
}
.sideBar {
  display: flex;
  flex-direction: column;
  margin-right: 0.8%;
}
.contentBody {
  background-color: #333333;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.3%;
  margin: 0.5%;
}
.circle {
  position: relative;
  border: solid 3px #646464;
  background-color: #646464;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-right: 40%;
  margin: 20%;
}
::placeholder {
  color: #b629a0;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
  outline: 0;
  color: rgb(21, 202, 102);
  width: 100%;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: none;
  width: 100%;
}

[placeholder]::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
[placeholder]:hover::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
}
[placeholder]:focus::-webkit-input-placeholder {
  color: transparent;
}

[placeholder]::-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
[placeholder]:hover::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
}
[placeholder]:focus::-moz-placeholder {
  color: transparent;
}

[placeholder]:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
[placeholder]:hover:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
}
[placeholder]:focus:-ms-input-placeholder {
  color: transparent;
}

form {
  width: 400px;
  margin: 50px auto;
}

input[type="text"] {
  display: block;
  width: 100%;
  margin: 0 0 20px;
  padding: 8px 12px 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
}

textarea {
  display: block;
  width: 100%;
  height: 150px;
  margin: 0 0 20px;
  padding: 8px 12px 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
}

input[type="submit"] {
  display: block;
  width: 10rem;
  margin-top: 5%;
  margin-left: 80%;
  padding: 8px 0 10px 0;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
  transition: 0.2s all ease-in;
}
input[type="submit"]:hover {
  background: #ffcc00;
  border: 1.5px solid black;
  font-weight: bold;
  color: black;
  transform: scale(1.3);
}

.social {
  margin-top: 1.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social > img {
  width: 4rem;
}
.social > a {
  margin: 6px;
  text-decoration: none;
  font-family: "Kalam", cursive;
  font-size: 1.8rem;
}

/**Flecha animada */
#wrapper {
  display: table;
  width: 5%;
  height: 20%;
}
#wrapper-inner {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
#scroll-down {
  display: block;
  position: relative;
  padding-top: 79px;
  text-align: center;
}
.arrow-down {
  display: block;
  margin: 0;
  width: 10px;
  height: 38px;
}
.arrow-down:after {
  content: "";
  display: block;
  margin: 0;
  padding: 0;
  width: 1em;
  height: 1em;
  border-top: 4px solid #b91a2f;
  border-right: 4px solid #b91a2f;
  -moz-transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(0deg);
}
#scroll-title {
  display: block;
  text-transform: uppercase;
  color: #b91a2f;
  font-family: Helvetica Neue, Helvetica, Arial;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
}
#scroll-down::before {
  position: absolute;
  left: 0;
  transform: rotate(20deg);
  width: 0.3em;
  height: 10em;
  background: #b91a2f;
  content: " ";
  animation: shimmy 3s infinite;
  animation-direction: alternate;
}

@keyframes shimmy {
  0% {
    transform: rotate(20deg);
    transform: translate(0, 0);
  }
  100% {
    transform: rotate(20deg);
    transform: translate(50px, -50px);
  }
}

/** */
.correoNotif {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
