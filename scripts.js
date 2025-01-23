const carousel = new bootstrap.Carousel(
  document.querySelector("#heroCarousel"),
  {
    interval: 5000,
    touch: true,
    pause: "hover",
  }
);

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    try {
     // Validação básica do formulário
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Aqui você normalmente adicionaria sua lógica de envio de formulário
      // Para FormSubmit, você pode simplesmente permitir o envio do formulário
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      this.submit(); // 
      this.reset(); // 
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  });

// Rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
