const spreads = [
  {
    l: `
      <span class="cover-heart">&#9825;</span>
      <div class="ribbon">Uma cartinha só sua</div>
      <div class="page-title" style="font-size:19px;">Para a minha<br>Seninha &#9825;</div>
      <p class="cover-subtitle">com todo o meu amor</p>
      <p class="page-num">~</p>
    `,
    r: `
      <div class="ornament">&#10022; &#10022; &#10022;</div>
      <div class="page-title">Ei, você...</div>
      <p class="page-text">
        Existe uma pessoa no mundo que faz o meu dia ficar mais bonito só de existir.<br><br>
        Essa pessoa é você, minha <em>Seninha</em> fofa, minha <em>Pocoyo</em> do coração.
      </p>
      <span class="heart-mid">&#9825;</span>
      <p class="page-num">1</p>
    `
  },
  {
    l: `
      <div class="ornament">&#9729;</div>
      <div class="page-title">Aquelas memórias...</div>
      <p class="page-text">
        Tenho guardadas com tanto carinho as besteiras que a gente faz junto.<br><br>
        As risadas sem motivo, as conversas que não acabam.<br><br>
        <em>Tudo com você vira memória boa.</em>
      </p>
      <p class="page-num">2</p>
    `,
    r: `
      <div class="ornament">&#10024;</div>
      <div class="page-title">Os pequenos momentos</div>
      <p class="page-text">
        Os abraços sem hora certa,<br>
        o silêncio que não pesa,<br>
        a sua risada que eu não enjoo nunca.<br><br>
        <em>São esses que ficam pra sempre.</em>
      </p>
      <span class="heart-mid">&#9825;</span>
      <p class="page-num">3</p>
    `
  },
  {
    l: `
      <div class="ornament">&#10022;</div>
      <div class="page-title">Sabe o que é engraçado?</div>
      <p class="page-text">
        Às vezes não preciso de grandes palavras.<br><br>
        Só de estar perto de você já é o suficiente.<br><br>
        <strong>Você é lar, minha Cuti Cuti.</strong>
      </p>
      <p class="page-num">4</p>
    `,
    r: `
      <div class="ornament">&#9789; &#9733; &#9790;</div>
      <div class="page-title">Te amo, Seninha</div>
      <p class="page-text">
        Não do jeito normal.<br>
        Do jeito que enche o peito,<br>
        que dá um sorriso à toa,<br>
        que faz tudo valer mais.<br><br>
        <em>Desse jeito que só você provoca.</em>
      </p>
      <span class="heart-mid">&#9825;</span>
      <p class="page-num">5</p>
    `
  },
  {
    l: `
      <div class="ornament">&#10047;</div>
      <div class="page-title">Uma promessa pequena</div>
      <p class="page-text">
        Enquanto você for você,<br>
        eu vou continuar me apaixonando.<br><br>
        Todos os dias, de formas diferentes.<br><br>
        <strong>Pode contar comigo sempre.</strong>
      </p>
      <p class="page-num">6</p>
    `,
    r: `
      <span class="cover-heart" style="font-size:44px; margin-top:0.5rem;">&#9825;</span>
      <div class="page-title" style="font-size:16px; line-height:1.6; margin-top:0.3rem;">
        Com amor infinito,<br><em>Cuti Cuti.</em>
      </div>
      <p class="cover-subtitle" style="margin-top:0.9rem;">&#9825; &#9825; &#9825;</p>
      <a href="surpresa.html" style="
        display:inline-block;
        margin-top:1.2rem;
        padding: 9px 22px;
        background: none;
        border: 1.5px solid #c5906a;
        color: #a05050;
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        border-radius: 30px;
        text-decoration: none;
        transition: background 0.2s, color 0.2s;
        animation: pulse-btn 2s ease-in-out infinite;
      " onmouseover="this.style.background='#f4e0d0'" onmouseout="this.style.background='none'">
        tem mais uma coisa... &#9825;
      </a>
      <p class="page-num">~</p>
    `
  }
];

let cur = 0;
let busy = false;

function render(dir) {
  const pL = document.getElementById('pL');
  const pR = document.getElementById('pR');
  const cls = dir > 0 ? 'flip-fwd' : 'flip-bwd';
  pL.classList.remove('flip-fwd','flip-bwd');
  pR.classList.remove('flip-fwd','flip-bwd');
  void pL.offsetWidth;
  pL.innerHTML = spreads[cur].l;
  pR.innerHTML = spreads[cur].r;
  pL.classList.add(cls);
  pR.classList.add(cls);
  document.getElementById('btnPrev').disabled = cur === 0;
  document.getElementById('btnNext').disabled = cur === spreads.length - 1;
  document.getElementById('dots').innerHTML =
    spreads.map((_,i) => `<div class="dot${i===cur?' on':''}"></div>`).join('');
}

function go(dir) {
  if (busy) return;
  const next = cur + dir;
  if (next < 0 || next >= spreads.length) return;
  busy = true;
  cur = next;
  render(dir);
  setTimeout(() => { busy = false; }, 580);
}

// petals
(function() {
  const c = document.getElementById('petals');
  const sym = ['&#9825;','&#10047;','&#10022;','&#10038;'];
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'petal';
    el.innerHTML = sym[Math.floor(Math.random()*sym.length)];
    el.style.left = (Math.random()*100)+'%';
    el.style.fontSize = (9+Math.random()*10)+'px';
    el.style.animationDuration = (6+Math.random()*10)+'s';
    el.style.animationDelay = (Math.random()*10)+'s';
    c.appendChild(el);
  }
})();

render(1);