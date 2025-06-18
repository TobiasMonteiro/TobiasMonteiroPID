import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

// const{data: {user}} = await supabase.auth.getUser();
// console.log(user);

const{ data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    if(event === 'SIGNED_OUT') {
        window.location.href = '/login.html'
    }
});


window.addEventListener("load", async() => {
    // const{data: {user}} = await supabase.auth.getUser();
    // let email = await supabase.from("utilizadores").select("email");
    // if (user.email=email) {
    //     console.log("same")
    // }

    const{data} = await supabase.from("utilizadores").select("id_plano")
    console.log(data)
    console.log(await supabase.from("planos").select("id_vicio"))

    // const{ data, error } = await supabase.from("utilizadores").select("nome, id_plano");
    // data.forEach((arrayItem, index) => {
    //     console.log(data);
    //     let vicios = arrayItem.vicio.toLowerCase()
    //     plansContainer.innerHTML+=`<input type="checkbox" class="btn-check" id="btncheck${index}" autocomplete="off" value="${vicios}" ><label for="btncheck${index}" class="btn btn-primary second d-grid gap-2">${arrayItem.vicio}</label><br>`
    // })
})