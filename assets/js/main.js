// Menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Voltar ao topo
const voltarTopo = document.getElementById('voltar-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    voltarTopo.style.display = 'flex';
  } else {
    voltarTopo.style.display = 'none';
  }
});
voltarTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validação do formulário de contato
const form = document.getElementById('form-contato');
form.addEventListener('submit', function(e) {
  let valid = true;
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  if (!nome) {
    alert('Por favor, preencha o nome.');
    valid = false;
  }
  if (!email || !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    alert('Por favor, insira um email válido.');
    valid = false;
  }
  if (!mensagem) {
    alert('Por favor, escreva uma mensagem.');
    valid = false;
  }
  if (!valid) e.preventDefault();
});

// Scroll suave para navegação
const links = document.querySelectorAll('.nav-list a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Destaque da seção ativa no menu
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
