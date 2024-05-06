const formularioContato = document.getElementById('formularioContato');

formularioContato.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value;

    const dados = {
        nome: nome,
        telefone: telefone,
        email: email,
        servico: servico,
        mensagem: mensagem
    };

    // Enviar dados para o servidor (ex: via AJAX)
    console.log('Dados do formulário:', dados);

    // Limpar o formulário
    formularioContato.reset();

    // Exibir mensagem de sucesso ou erro
    alert('Obrigado por entrar em contato! Entraremos em contato com você em breve.');
});
