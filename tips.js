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

const addButtonIconUrl = "https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/add.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9hZGQuc3ZnIiwiaWF0IjoxNzUwNDQ4ODM1LCJleHAiOjE3ODE5ODQ4MzV9.rQ_4-MPKLXxBaV1Wr8RUflm-H15xgqNU_2kxa0Y5nn8";
document.querySelector("#addButton").innerHTML=`<a href="/tips_add.html"><img src="${addButtonIconUrl}"></a>`

let id_vicio;
window.addEventListener("load", async() => {
    id_vicio = localStorage.getItem('id_vicio');
    const {data} = await supabase.from('dicas').select().eq("id_vicio", id_vicio)
    data.forEach(element => {
        console.log(element.dica)
        document.querySelector('.container-plans').innerHTML+=`<div class='tip'><p class='tipP'>${element.dica}</p></div>`
    });
})









const dicaIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhc19zZWwuc3ZnIiwiaWF0IjoxNzUwNDQ3NzM4LCJleHAiOjE3ODE5ODM3Mzh9.sPAcFY9-vNgVsPna1e9oNoaUtQo27bK75K74fMwnS88";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Muc3ZnIiwiaWF0IjoxNzUwNDQ3NzkwLCJleHAiOjE3ODE5ODM3OTB9.4iW9Y2vcdvj0VYeHte_RWNmyvg-VB1Pw6QPukZmR3QY";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWwuc3ZnIiwiaWF0IjoxNzUwMjUzODQ1LCJleHAiOjE3ODE3ODk4NDV9.csXSvkTNAjnet6K9RAEXsrYg8BE-bIXRC2cggKM_bLo";
document.querySelector("#dicas").innerHTML+=`<img src="${dicaIconUrl}">`
document.querySelector("#planos").innerHTML+=`<a href="/plan_chosen.html"><img src="${planosIconUrl}"></a>`
document.querySelector("#perfil").innerHTML+=`<a href="/profile.html"><img src="${perfilIconUrl}"></a>`