const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");


// Adicionar novo processo (exibir formulário de upload de arquivo)
const addProcessBtn = document.getElementById('addProcessBtn');
const uploadForm = document.getElementById('uploadForm');

// Mostrar o formulário de upload quando o botão "Adicionar Processo" for clicado
addProcessBtn.addEventListener('click', () => {
    uploadForm.style.display = 'block'; // Exibir formulário de upload
});

// Enviar arquivo via formulário de upload
const uploadFileForm = document.getElementById('uploadFileForm');
uploadFileForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impedir envio padrão do formulário

    const formData = new FormData(uploadFileForm);
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Arquivo enviado com sucesso!');
        } else {
            alert('Erro ao enviar o arquivo');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o arquivo');
    });
});


