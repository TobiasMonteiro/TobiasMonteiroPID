import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const fullLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_full.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X2Z1bGwuc3ZnIiwiaWF0IjoxNzUwMjU0MzY1LCJleHAiOjE3ODE3OTAzNjV9.YZFn4hxRX9DM6uA9ELA9frg5QqdAugarIzeiGBfdRRY";
const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logoCenter").innerHTML+=`<img src="${fullLogoUrl}" alt="Breaking the Habit logo (no text)" width="216px" height="216px" onContextMenu="return false;" onDragStart="return false;">`
document.querySelector("#logoPage2").innerHTML+=`<img src="${fullLogoUrl}" alt="Breaking the Habit logo (no text)" width="216px" height="216px" onContextMenu="return false;" onDragStart="return false;">`

const signUpButton = document.getElementById("signUpButton");
const redirectToSignupConclusion = document.getElementById("redirectToSignupConclusion");
const form = document.getElementsByTagName("form")[0];
const form2 = document.getElementsByTagName("form")[1];
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

form.addEventListener("submit", function() {
  event.preventDefault();
  window.location.href = '#page2'
  page1.setAttribute("hidden", '')
  page2.removeAttribute("hidden", true)
})

// redirectToSignupConclusion.addEventListener("click", function() {
//   window.location.href='/signup_conclusion.html'
// })

form2.addEventListener("submit", async() => {
  event.preventDefault();
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  let name = document.getElementById("inputName").value;
  let date = document.getElementById("inputDate").value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("nome", name);
  localStorage.setItem("data", date);
  window.location.href = '/plans_start.html'
})

document.getElementById('showPassword').addEventListener("click", function() {
  let x = document.getElementById("inputPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
})

document.getElementById("redirectToLogin").addEventListener("click", function() {
  window.location.href = '/login.html';
})