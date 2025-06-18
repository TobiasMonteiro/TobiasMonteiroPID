import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qhbewyvljpmvwaahjzkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYmV3eXZsanBtdndhYWhqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzI1NTMsImV4cCI6MjA2MjgwODU1M30.qWUQ5IN2Xq0F8BTH3-_PDcd5RyDZ4pLZ073kj1wpY50';
const supabase = createClient(supabaseUrl, supabaseKey);

const fullLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_full.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X2Z1bGwuc3ZnIiwiaWF0IjoxNzUwMjU0MzY1LCJleHAiOjE3ODE3OTAzNjV9.YZFn4hxRX9DM6uA9ELA9frg5QqdAugarIzeiGBfdRRY";
const notextLogoUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/logos/breakingthehabit_notext.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9icmVha2luZ3RoZWhhYml0X25vdGV4dC5zdmciLCJpYXQiOjE3NTAyNTQzODEsImV4cCI6MTc4MTc5MDM4MX0.X197YBQSgeXL9oWJ9Dd1MooXVUc79PKkB0PP27GIc8M";

document.querySelector(".logo").innerHTML+=`<img src="${notextLogoUrl}" alt="Breaking the Habit logo (no text)" width="128px" height="128px" onContextMenu="return false;" onDragStart="return false;">`



const dicaIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/dicas_sel.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9kaWNhc19zZWwuc3ZnIiwiaWF0IjoxNzUwMjUzODMxLCJleHAiOjE3ODE3ODk4MzF9.mdW1NKxSCCyKgJ2G6m9IuJNxVpwcZAvNhc_nzmsE_0I";
const planosIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/planos.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wbGFub3Muc3ZnIiwiaWF0IjoxNzUwMjUyOTU5LCJleHAiOjE3ODE3ODg5NTl9.kffriNgkPcIzV92kgqtK5xkY3o26DzWhzW31aPaai0k";
const perfilIconUrl="https://qhbewyvljpmvwaahjzkm.supabase.co/storage/v1/object/sign/icons/perfil.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNzZmMDI3Yi0xNGJjLTRlM2QtODMyOC0xNDUyOTA4ODg2NjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpY29ucy9wZXJmaWwuc3ZnIiwiaWF0IjoxNzUwMjUzODQ1LCJleHAiOjE3ODE3ODk4NDV9.csXSvkTNAjnet6K9RAEXsrYg8BE-bIXRC2cggKM_bLo";
document.querySelector("#dicas").innerHTML+=`<img src="${dicaIconUrl}">`
document.querySelector("#planos").innerHTML+=`<a href="/plans.html"><img src="${planosIconUrl}"></a>`
document.querySelector("#perfil").innerHTML+=`<a href="/profile.html"><img src="${perfilIconUrl}"></a>`