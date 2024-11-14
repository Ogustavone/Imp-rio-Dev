
// Recuperar o estado do modo escuro do localStorage
let darkMode = localStorage.getItem('darkMode') === 'true'; // Valor booleano armazenado no localStorage

// Aplicar o modo escuro, se estiver ativado
if (darkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelectorAll('button').forEach(btn => btn.classList.add('dark-mode'));
}

// Alternar entre modo escuro e claro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    darkMode = !darkMode; // Alternar entre verdadeiro e falso
    // Aplicar ou remover a classe do modo escuro
    document.body.classList.toggle('dark-mode', darkMode);
    document.querySelector('header').classList.toggle('dark-mode', darkMode);
    document.querySelectorAll('button').forEach(btn => btn.classList.toggle('dark-mode', darkMode));
    
    // Salvar a preferência no localStorage
    localStorage.setItem('darkMode', darkMode);
});