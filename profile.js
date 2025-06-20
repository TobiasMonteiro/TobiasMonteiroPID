import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const dicasIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhcy5zdmciLCJpYXQiOjE3NTAyNTI3NDQsImV4cCI6MTc4MTc4ODc0NH0.k5QqXIfNmMVxjKjaETsNG4E8xwguKJL53RLqwiYhJck";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Muc3ZnIiwiaWF0IjoxNzUwMjUyOTU5LCJleHAiOjE3ODE3ODg5NTl9.kffriNgkPcIzV92kgqtK5xkY3o26DzWhzW31aPaai0k";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWxfc2VsLnN2ZyIsImlhdCI6MTc1MDI1Mjg0OSwiZXhwIjoxNzgxNzg4ODQ5fQ.44FZFvK01wOOez5nD-pAXlsQHvtBSL6_A0qAKZ2SxfA";
document.querySelector("#dicas").innerHTML+=`<a href='/tips.html'><img src="${dicasIconUrl}"></a>`
document.querySelector("#planos").innerHTML+=`<a href='/plan_chosen.html'><img src="${planosIconUrl}"></a>`
document.querySelector("#perfil").innerHTML+=`<img src="${perfilIconUrl}">`

const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";
document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`

let id_user;
let username;
let pfpUrl;

window.addEventListener("load", async() => {
    const { data, error } = await supabase.auth.getUser()
    console.log(data)
    if (data.user.user_metadata.avatar_url === undefined || data.user.user_metadata.avatar_url === null) {
        pfpUrl = defaultPfp
    } else {
        pfpUrl = data.user.user_metadata.avatar_url;
    }
    let username;
    id_user = data.user.id;
    username = data.user.user_metadata.full_name
    localStorage.setItem("id_user", id_user)
})
id_user = localStorage.getItem("id_user");

let id_vicio;
let plano;

window.addEventListener("load", async() => {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let name = localStorage.getItem("nome");
    let date = localStorage.getItem("data");
    id_vicio = localStorage.getItem("id_vicio");
    let planos;
    switch (id_vicio) {
        case "0":
            planos=["Não fumar durante 1 dia..Não fumar durante 1 semana (conviva com amigos/colegas durante pausas se tiver problemas com impulsos)..Não fumar durante 1 mês","Não fumar durante 1 dia..Não fumar durante 1 semana (consuma pastilha elástica se tiver problemas com impulsos)..Não fumar durante 1 mês","Não fumar durante 1 dia..Não fumar durante 1 semana (distraia-se com o seu telemóvel se tiver problemas com impulsos)..Não fumar durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
        case "1":
            planos=["Não beber durante 1 dia..Não beber durante 1 semana (opte por bebidas sem álcool se tiver problemas com impulsos)..Não beber durante 1 mês","Não beber durante 1 dia..Não beber durante 1 semana (rodeie-se de pessoas que não bebem/também querem deixar de beber se tiver problemas com impulsos)..Não beber durante 1 mês","Não beber durante 1 dia..Não beber durante 1 semana (evitar situções que frequentemente lhe levam a beber se tiver problemas com impulsos)..Não beber durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
        case "2":
            let planos=["Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (investir (mais) tempo em hobbies se tiver problemas com impulsos)..Não apostar/jogar durante 1 mês","Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (conviver mais com pessoas que também procuram quebrar este vício)..Não apostar/jogar durante 1 mês","Não apostar/jogar durante 1 dia..Não apostar/jogar durante 1 semana (invista financeiramente em bens com valor e que lhe trarão felicidade no futuro)..Não apostar/jogar durante 1 mês"]
            plano = planos[Math.floor(Math.random() * planos.length)];
            localStorage.setItem("plano", plano);
            break;
    }
    plano = localStorage.getItem("plano");
    id_user = localStorage.getItem("id_user");
    await supabase.from('planos').upsert({id_vicio: id_vicio, id_user: id_user, plano: plano})
    await supabase.from('planos').update({plano: plano}).eq("id_user", id_user)
    await supabase.from('utilizadores').upsert({id_user: id_user, email: email, password: password, nome: name, data_nasc: date, id_tipouser: 1, id_vicio: id_vicio});
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("nome");
    localStorage.removeItem("data");
    localStorage.removeItem("plano")
    // if (window.localStorage) {
    //     if (!localStorage.getItem('firstLoad')) {
    //         localStorage['firstLoad'] = true;
    //         window.location.reload();
    //     }  
    //     else
    //         localStorage.removeItem('firstLoad');
    // }
})

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

const defaultPfp = "https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/default_pfp.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kZWZhdWx0X3BmcC5zdmciLCJpYXQiOjE3NTA0Mjk1MDUsImV4cCI6MTc4MTk2NTUwNX0.2eaPQ1oyl91zBnB95dXhlefI3ysZ6BHeIPJ-zojRCu4";
window.addEventListener("load", async() => {
    const {data} = await supabase.from("utilizadores").select().eq('id_user', id_user)
    console.log(data)
    if (data.user === undefined || data.user === null) {
        username = data[0].nome
    } else {
        username = data[0].nome
    }
    document.querySelector("#pfpDiv").innerHTML+=`<img width='128px' height='128px' src='${pfpUrl}'><br><br><br>`
    document.querySelector("#nome").innerHTML+=`<p class="tipP" style="font-size: 25px">Nome: ${username}</p>`
})

let data_nasc;
window.addEventListener("load", async() => {
    const {data} = await supabase.from("utilizadores").select().eq('id_user', id_user)
    data_nasc = data[0].data_nasc;
    document.querySelector("#data").innerHTML+=`<p class="tipP" style="font-size: 25px">Data de nascimento: ${data_nasc}</p>`
})

let vicio;
window.addEventListener("load", async() => {
    id_vicio = localStorage.getItem("id_vicio");
    const {data} = await supabase.from("vicios").select().eq("id_vicio", id_vicio)
    vicio = data[0].vicio;
    document.querySelector("#vicio").innerHTML+=`<p class="tipP" style="font-size: 25px">Vício: ${vicio}</p>`
})









