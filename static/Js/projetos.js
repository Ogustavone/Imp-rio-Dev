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
   
    const query = document.getElementById('searchBar').value.toLowerCase();
    const slots = document.querySelectorAll('.slot'); 

    
    slots.forEach(slot => {
        const slotName = slot.getAttribute('data-name').toLowerCase(); 

        
        if (slotName.includes(query)) {
            slot.classList.add('highlight');
            slot.classList.remove('hidden');
        } else {
            slot.classList.remove('highlight');
            slot.classList.add('hidden');
        }
    });
}


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