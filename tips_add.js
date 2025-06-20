import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`

window.addEventListener("load", async() => {
    const {data} = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT') {
            localStorage.clear("id_user")
            window.location.href='/login.html'
        }
    })
})


document.querySelector("img").addEventListener("click", async() => {
    await supabase.auth.signOut()
    localStorage.clear()
})

const backButtonIconUrl = "https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/back.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9iYWNrLnN2ZyIsImlhdCI6MTc1MDQ0ODcwOSwiZXhwIjoxNzgxOTg0NzA5fQ.ZIATQak688iCy7QCN8MpDRAPipvkuHL01OmIYrr4A2Q";
document.querySelector("#backButton").innerHTML=`<a href="/tips.html"><img src="${backButtonIconUrl}"></a>`

let id_user;
let id_vicio;
document.querySelector('#submitTip').addEventListener("click", async() => {
    id_user = localStorage.getItem('id_user');
    id_vicio = localStorage.getItem('id_vicio');
    let dica = document.getElementById('tipAddInput').value;
    await supabase.from('dicas').insert({id_user: id_user, dica: dica, id_vicio: id_vicio})
    window.location.href = '/tips.html'
})

const dicaIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhc19zZWwuc3ZnIiwiaWF0IjoxNzUwNDQ3NzM4LCJleHAiOjE3ODE5ODM3Mzh9.sPAcFY9-vNgVsPna1e9oNoaUtQo27bK75K74fMwnS88";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Muc3ZnIiwiaWF0IjoxNzUwNDQ3NzkwLCJleHAiOjE3ODE5ODM3OTB9.4iW9Y2vcdvj0VYeHte_RWNmyvg-VB1Pw6QPukZmR3QY";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWwuc3ZnIiwiaWF0IjoxNzUwMjUzODQ1LCJleHAiOjE3ODE3ODk4NDV9.csXSvkTNAjnet6K9RAEXsrYg8BE-bIXRC2cggKM_bLo";
document.querySelector("#dicas").innerHTML+=`<img src="${dicaIconUrl}">`
document.querySelector("#planos").innerHTML+=`<a href="/plans.html"><img src="${planosIconUrl}"></a>`
document.querySelector("#perfil").innerHTML+=`<a href="/profile.html"><img src="${perfilIconUrl}"></a>`