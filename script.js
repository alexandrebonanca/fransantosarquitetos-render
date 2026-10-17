const header=document.querySelector('[data-header]');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>28),{passive:true});
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('is-open',!open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open')}));
const form=document.querySelector('[data-contact-form]');
form?.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(form);const body=[`Nome: ${data.get('nome')}`,`Telefone: ${data.get('telefone')||'—'}`,`Email: ${data.get('email')}`,`Mensagem:`,data.get('mensagem')].join('\n');window.location.href=`mailto:fransantosarquitetos@gmail.com?subject=${encodeURIComponent('Pedido de reunião — Fran Santos Arquitetos')}&body=${encodeURIComponent(body)}`;const note=form.querySelector('[data-form-note]');if(note)note.textContent='A mensagem foi preparada no seu cliente de email.'});
