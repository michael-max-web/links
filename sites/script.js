// Botão de contato rola suavemente até a seção de contato
document.getElementById('botaoContato').addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});