import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const fullLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_full.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X2Z1bGwuc3ZnIiwiaWF0IjoxNzUwMjU0MzY1LCJleHAiOjE3ODE3OTAzNjV9.YZFn4hxRX9DM6uA9ELA9frg5QqdAugarIzeiGBfdRRY";
const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`

const dicasIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhcy5zdmciLCJpYXQiOjE3NTAyNTI3NDQsImV4cCI6MTc4MTc4ODc0NH0.k5QqXIfNmMVxjKjaETsNG4E8xwguKJL53RLqwiYhJck";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Nfc2VsLnN2ZyIsImlhdCI6MTc1MDQ0MDU3NiwiZXhwIjoxNzgxOTc2NTc2fQ.3nMqoG1wuU-vetrgPBratQrEsYNcMo_39caqWg1ClRE";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWwuc3ZnIiwiaWF0IjoxNzUwNDQwNTY2LCJleHAiOjE3ODE5NzY1NjZ9._8LiVDCHeUrRtu-9nIlusQwCoJc63dya-tUBbzeicPM";
document.querySelector("#dicas").innerHTML+=`<a href='/tips.html'><img src="${dicasIconUrl}"></a>`
document.querySelector("#planos").innerHTML+=`<img src="${planosIconUrl}">`
document.querySelector("#perfil").innerHTML+=`<a href='/profile.html'><img src="${perfilIconUrl}"></a>`




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

let id_user;
window.addEventListener("load", async() => {
    const{ data, error } = await supabase.auth.getUser();
    id_user = data.user.id;
    localStorage.setItem("id_user", id_user)
})
id_user=localStorage.getItem("id_user")

let passo;
window.addEventListener("load", async() => {
    const {data, error}=await supabase.from("planos").select().eq('id_user', id_user)
    passo = data[0].passo

    let plan = data[0].plano.split("..")

    if (plan[passo-1] == undefined || plan[passo-1] == null) {
        document.querySelector("#nextStep").remove()
        document.querySelector("#passos").innerHTML+=`<div><h1>Plano Concluído!</h1></div>`
    } else {

        let plan_step = plan[passo-1];
        document.querySelector("#passos").innerHTML+=`<div class='container-plans'><h1 style="font-size: 30px">Passo ${passo}</h1><p class='tipP' style="font-size: 25px; font-weight: normal">${plan_step}</p></div>`
        // plan.forEach((element,index) => {
        //     let plan_step = element.replaceAll(" ", " ")
        //     document.querySelector("#passos").innerHTML+=`<div><p>${index+1}</p><p>${plan_step}</p></div>`
        // })
    }
})

document.querySelector("#nextStep").addEventListener("click", async() => {
    id_user=localStorage.getItem("id_user")
    passo = passo+1
    await supabase.from("planos").update({passo: passo}).eq("id_user", id_user)
    window.location.reload()
})

let plano;
let id_vicio;
document.querySelector("#anotherPlan").addEventListener("click", async() => {
    passo = "1";
    await supabase.from("planos").update({passo: passo}).eq("id_user", id_user)
    id_vicio = localStorage.getItem("id_vicio")
    let planos;
    switch (id_vicio) {
        case "0":
            planos=["Não fumar durante 1 dia..Não fumar durante 1 semana (conviva com amigos/colegas durante pausas se tiver problemas com impulsos)..Não fumar durante 1 mês","Não fumar durante 1 dia..Não fumar durante 1 semana (consuma pastilha elástica se tiver problemas com impulsos)..Não fumar durante 1 mês","Não fumar durante 1 dia..Não fumar durante 1 semana (distraia-se com o seu telemóvel se tiver problemas com impulsos)..Não fumar durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
        case "1":
            planos=["Não beber durante 1 dia..Não beber durante 1 semana (opte por bebidas sem álcool se tiver problemas com impulsos)..Não beber durante 1 mês","Não beber durante 1 dia..Não beber durante 1 semana (rodeie-se de pessoas que não bebem/também querem deixar de beber se tiver problemas com impulsos)..Não beber durante 1 mês","Não beber durante 1 dia..Não beber durante 1 semana (evitar situações que frequentemente lhe levam a beber se tiver problemas com impulsos)..Não beber durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
        case "2":
            let planos=["Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (investir (mais) tempo em hobbies se tiver problemas com impulsos)..Não apostar/jogar durante 1 mês","Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (conviver mais com pessoas que também procuram quebrar este vício)..Não apostar/jogar durante 1 mês","Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (invista financeiramente em bens com valor e que lhe trarão felicidade no futuro)..Não apostar/jogar durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
    }
    plano = localStorage.getItem("plano")
    await supabase.from('planos').update({plano: plano}).eq("id_user", id_user)
    localStorage.removeItem("plano")
    window.location.reload();
})

// for (let i = 0; i < plan.length; i++) {
//     document.body.innerHTML+=plan.toString().replaceAll(" ", " ")
// }

// plan.forEach(element => {
//     element
//     document.body.innerHTML+=element+" "
// });

