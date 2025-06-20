import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`

const plansContainer = document.getElementById("plansContainerStart");

// window.addEventListener("load", async() => {
//   id_user = localStorage.getItem("id_user");
//   const { data, error } = await supabase.from("utilizadores").select().eq('id_user', id_user)
//   console.log(data)
//   if (data[0].id_vicio != null) {
//     console.log("peak")
//     window.location.href("/plan_chosen.html")
//   }

// })

window.addEventListener("load", async() => {
  const{ data, error } = await supabase.from("vicios").select();
  data.forEach((arrayItem, index) => {
    let vicios = arrayItem.vicio.toLowerCase()
    plansContainer.innerHTML+=`<input type="radio" class="btn-check" id="btncheck${index}" autocomplete="off" value="${vicios}" name="option"><label for="btncheck${index}" class="btn btn-primary second d-grid gap-2">${arrayItem.vicio}</label><br>`
  })
})

let id_user;
let id_vicio;
// window.addEventListener("load", async() => {
//   const { data, error } = await supabase.auth.getUser()
//   id_user = data.user.id
//   localStorage.setItem('id_user', id_user)
// })

let previousWindow = document.referrer;

if (previousWindow == "http://localhost:5173/signup.html") {
  const bt = document.querySelector('#bt');
  bt.addEventListener('click', async(event) => {
    let checkboxes = document.querySelectorAll('input:checked');
    let output = [];
    checkboxes.forEach((checkbox, index) => {
      output.push(checkbox.value);
      switch (checkbox.value) {
        case "fumar":
          id_vicio=0;
          break;
        case "beber":
          id_vicio=1;
          break;
        case "jogo":
          id_vicio=2;
          break;
      }
    });
    if (output=="") {
      alert("Selecione um plano")
    } else {
      let email = localStorage.getItem("email");
      let password = localStorage.getItem("password");
      let name = localStorage.getItem("nome");
      let date = localStorage.getItem("data");

      id_user = localStorage.getItem("id_user");


      
        const {data, error} = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              nome: name,
              data_nasc: date,
            }
          }
        });   
      localStorage.setItem("id_vicio", id_vicio)
      window.location.href = '/profile.html';
    } 
  }
)} else if (previousWindow == "http://localhost:5173/login.html"){
  document.querySelector("#dataInput").innerHTML=`
  <div class="mb-3">
    <label for="inputDate" class="form-label">Data de Nascimento</label>
    <input type="date" class="form-control" id="inputDate">
  </div>
  `

const bt = document.querySelector('#bt');
  let date = document.getElementById("inputDate").value;
  bt.addEventListener('click', async(event) => {
    let checkboxes = document.querySelectorAll('input:checked');
    let output = [];
    checkboxes.forEach((checkbox, index) => {
      output.push(checkbox.value);
      switch (checkbox.value) {
        case "fumar":
          id_vicio=0;
          break;
        case "beber":
          id_vicio=1;
          break;
        case "jogo":
          id_vicio=2;
          break;
      }
    });
    if (output=="") {
      alert("Selecione um plano")
    } else {
      const {data} = await supabase.auth.getUser()
      let email = localStorage.setItem("email");
      let password = localStorage.setItem("password");
      let name = localStorage.setItem("nome");
      date = localStorage.setItem("data");

      localStorage.setItem("id_vicio", id_vicio)
      window.location.href = '/profile.html';
    } 
  }
)}

