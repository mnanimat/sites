
const root = document.documentElement;
const cursorSpot = (e)=>{ root.style.setProperty('--spot-x', e.clientX + 'px'); root.style.setProperty('--spot-y', e.clientY + 'px');};
addEventListener('pointermove', cursorSpot);

document.querySelectorAll('[data-tilt]').forEach(card=>{
  const strength = Number(card.dataset.tiltStrength || 10);
  card.addEventListener('pointermove', e=>{
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width;
    const py = (e.clientY - r.top)/r.height;
    const rx = (0.5 - py) * strength;
    const ry = (px - 0.5) * strength;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  card.addEventListener('pointerleave', ()=>{ card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'; });
});

const io = new IntersectionObserver(entries=>entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('[data-accordion] .accordion-head').forEach(btn=>{
  btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('open'));
});

function setupAudio(){
  const button = document.querySelector('[data-audio-toggle]');
  if(!button) return;
  let ctx, master, lfo, voices = [], playing = false;
  function createVoice(freq, type='sine', vol=0.03){
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type; osc.frequency.value = freq; gain.gain.value = vol;
    osc.connect(gain).connect(master); osc.start();
    return {osc,gain};
  }
  function start(){
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = .06; master.connect(ctx.destination);
    voices = [createVoice(220,'sine',.025), createVoice(277.18,'triangle',.018), createVoice(329.63,'sine',.012)];
    lfo = ctx.createOscillator(); const lfoGain = ctx.createGain(); lfo.frequency.value = 0.08; lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain).connect(master.gain); lfo.start();
    playing = true; button.textContent = '♫ Música ambiente: ligada'; button.setAttribute('aria-pressed','true');
  }
  function stop(){
    if(voices.length) voices.forEach(v=>{ try{v.osc.stop();}catch(e){} });
    if(lfo){ try{lfo.stop();}catch(e){} }
    if(ctx){ ctx.close(); }
    voices=[]; lfo=null; ctx=null; playing = false; button.textContent = '♫ Ativar música ambiente'; button.setAttribute('aria-pressed','false');
  }
  button.addEventListener('click', ()=>{ playing ? stop() : start(); });
}
setupAudio();

window.demoFormHandler = function(form, targetSel, message){
  form.addEventListener('submit', (e)=>{ e.preventDefault(); const target = document.querySelector(targetSel); if(target) target.textContent = message; form.reset(); });
}
