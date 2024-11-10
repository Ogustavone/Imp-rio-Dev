if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "/login";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "login.html";
  }

  function searchSlots() {
    // Obter o valor da pesquisa
    const query = document.getElementById('searchBar').value.toLowerCase();
    const slots = document.querySelectorAll('.slot'); // Todos os slots

    // Para cada slot
    slots.forEach(slot => {
        const slotName = slot.getAttribute('data-name').toLowerCase(); // Nome do slot em minúsculas

        // Se o nome do slot contém a pesquisa, destaque o slot
        if (slotName.includes(query)) {
            slot.classList.add('highlight'); // Destaca o slot
            slot.classList.remove('hidden'); // Torna o slot visível
        } else {
            slot.classList.remove('highlight'); // Remove destaque
            slot.classList.add('hidden'); // Esconde o slot
        }
    });
}

// Adiciona o evento de 'input' para buscar enquanto digita
document.getElementById('searchBar').addEventListener('input', searchSlots);




let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()


 themeSwitch.addEventListener("click", () => {
  console.log("entrou no listener")
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})