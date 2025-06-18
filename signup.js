import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

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
  console.log(email, password, name, date)
  const { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
  options: {
    data: {
      nome: name,
      data_nasc: date,
    }

  },
  
  });
  await supabase .from('utilizadores') .insert([{ email: email, password: password, nome: name, data_nasc: date, id_tipouser: 1, }]);
  console.log("Success!")
  window.location.href = '/plans_start.html';
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