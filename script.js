const form = document.getElementById('loginForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (usuario === '' && senha === '') {
    mensagem.textContent = 'Preencha o usuário e a senha.';
    return;
  }

  if (usuario === '') {
    mensagem.textContent = 'Informe o usuário.';
    return;
  }

  if (senha === '') {
    mensagem.textContent = 'Informe a senha.';
    return;
  }

  mensagem.textContent = '';
  window.location.href = 'dashboard.html';
});
