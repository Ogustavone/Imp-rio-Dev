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

