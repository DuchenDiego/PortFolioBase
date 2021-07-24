<template>
  <div class="card">
    <div class="card_left">
      <img
        style="border-radius:50%; max-width:100%"
        src="https://i.picsum.photos/id/870/200/200.jpg?hmac=G4IaFUfMAbn5JlMY8wZINYyI9gol9fXYZXdaVEF5Jzg"
        alt
      />
    </div>
    <div class="card_right">
      <h1 class="card_title">CONTACT</h1>
      <form action="#" class="form">
        <div class="form_names">
          <div class="form_field">
            <label for="name" class="form_label">First Name</label>
            <input type="text" id="name" class="form_input" />
          </div>
          <div class="form_field">
            <label for="surname" class="form_label">Last Name</label>
            <input type="text" id="surname" class="form_input" />
          </div>
        </div>
        <div class="form_field">
          <label for="email" class="form_label">email</label>
          <input type="email" id="email" class="form_input" />
        </div>
        <div class="form_field">
          <label for="message" class="form_label">Message</label>
          <textarea class="form_textarea"></textarea>
        </div>
        <input type="submit" class="form_submit" value="send" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class FlexLab extends vue {}
</script>

<style scoped>
body {
  font-family: sans-serif;
  /* background-image: radial-gradient(circle, #b94bf8, #3a1957); */
  margin: 0;
  color: antiquewhite;
  height: 100vh;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
}
.form_field {
  display: flex;
  flex-direction: column;
}
.form_label {
  padding: 0 1rem;
  margin: 0.2rem;
  text-transform: uppercase;
}
.form_submit {
  color: black;
}
.form_textarea,
.form_input {
  background: none;
  border: none;
  border-bottom: 1px solid #ffff;
  color: inherit;
  resize: none;
}
.card {
  background-color: #333;
  width: 80%;
  height: 450px;
  display: flex;
  margin: 2em auto;
}
.card_right {
  width: 80%;
  padding: 0 1rem;
}
.card_left {
  width: 20%;
  display: flex;
  align-items: flex-start;
  background-color: #222;
  padding: 0.4em;
}
.card_title {
  display: flex;
  margin: 0 1rem;
  color: aliceblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.form_names {
  color: white;
  display: flex;
  justify-content: space-between;
}
.form_names input {
  width: 200px;
}
.form_field {
  color: white;
}
</style>