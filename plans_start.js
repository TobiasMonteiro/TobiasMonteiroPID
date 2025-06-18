import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const fullLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_full.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X2Z1bGwuc3ZnIiwiaWF0IjoxNzUwMjU0MzY1LCJleHAiOjE3ODE3OTAzNjV9.YZFn4hxRX9DM6uA9ELA9frg5QqdAugarIzeiGBfdRRY";
const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`

const plansContainer = document.getElementById("plansContainerStart");


window.addEventListener("load", async() => {
    const{ data, error } = await supabase.from("vicios").select();
    data.forEach((arrayItem, index) => {
      let vicios = arrayItem.vicio.toLowerCase()
        plansContainer.innerHTML+=`<input type="radio" class="btn-check" id="btncheck${index}" autocomplete="off" value="${vicios}" name="option"><label for="btncheck${index}" class="btn btn-primary second d-grid gap-2">${arrayItem.vicio}</label><br>`
    })
})

let toggles = document.getElementsByTagName("input");

for (let i = 0; i < toggles.length; i++) {
  // toggles[i].addEventListener("toggle", function() {
  //   console.log(toggles[i].value);
  // });
}

const bt = document.querySelector('#bt');
  bt.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
      output.push(checkbox.value);
    });
    if (output=="") {
      document.body.innerHTML+='<br><p id="buttonDiv">nah</p>'
    }
    console.log(output[0])
}); 