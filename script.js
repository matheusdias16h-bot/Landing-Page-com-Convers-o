// Rola até o formulário
function scrollToForm(){
  document.getElementById("leadFormSection").scrollIntoView({ behavior: 'smooth' });
}

// Simula envio do lead
document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Aqui você poderia integrar com API real, ex: Mailchimp ou WhatsApp
  console.log(`Lead capturado: ${name} - ${email}`);

  document.getElementById("successMsg").innerText = "Obrigado! Seu cadastro foi realizado.";
  this.reset();
});
