import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase.auth.getUser()
let pfpUrl = data.user.user_metadata.avatar_url;
let userName = data.user.user_metadata.full_name;
console.log(data)
document.querySelector("#pfpDiv").innerHTML+=`<img src='${pfpUrl}'>`
document.body.innerHTML+=`<p>Nome: ${userName}</p>`


const dicaIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhcy5zdmciLCJpYXQiOjE3NTAyNTI3NDQsImV4cCI6MTc4MTc4ODc0NH0.k5QqXIfNmMVxjKjaETsNG4E8xwguKJL53RLqwiYhJck";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Muc3ZnIiwiaWF0IjoxNzUwMjUyOTU5LCJleHAiOjE3ODE3ODg5NTl9.kffriNgkPcIzV92kgqtK5xkY3o26DzWhzW31aPaai0k";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWxfc2VsLnN2ZyIsImlhdCI6MTc1MDI1Mjg0OSwiZXhwIjoxNzgxNzg4ODQ5fQ.44FZFvK01wOOez5nD-pAXlsQHvtBSL6_A0qAKZ2SxfA";
document.querySelector("#dicas").innerHTML+=`<a href="/tips.html"><img src="${dicaIconUrl}"></a>`
document.querySelector("#planos").innerHTML+=`<a href="/plans.html"><img src="${planosIconUrl}"></a>`
document.querySelector("#perfil").innerHTML+=`<img src="${perfilIconUrl}">`

// async function getIcons() {
//     const { data, error } = await supabase.storage.from('icons').getPublicUrl('file-path')
//     console.log(data)
// }
// window.onload=getIcons()





