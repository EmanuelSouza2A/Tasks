// Token de acesso
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMT0dJTiI6IjAwMDAxMTMwNDkyODYyU1AiLCJOSUNLTkFNRSI6InNhcmFkZXNvdXphMTMwNDkyODYyIiwiQ0RfVVNVQVJJTyI6IjMwNTIwNTAwNiIsInVuaXF1ZV9uYW1lIjoiUEVSRklTIiwiUEVSRklTIjoiW3tcIkNEX1BFUkZJTFwiOlwiNlwiLFwiTk1fUEVSRklMXCI6XCJBbHVub1wiLFwiTlJfQ09NUE9SVEFNRU5UT1wiOlwiNlwiLFwiQ09NUE9SVEFNRU5UT1wiOlwiQWx1bm9cIn1dIiwiTkFNRSI6IlNBUkEgREUgU09VWkEgRkFHVU5ERVMiLCJNRVRPRE9MT0dJTiI6IlNFRCIsIkNQRiI6IjQ2NjE4NTY1ODk4IiwiRU1BSUwiOiIiLCJuYmYiOjE3ODAwMjM4NTIsImV4cCI6MTc4MDExMDI1MiwiaWF0IjoxNzgwMDIzODUyfQ.WZnOHnHW5F3kP1RcfDoa2Iqmd2Yh3nN_Ndo7RqxkEoI";

// Link da API juntando com o token
const url = `https://sedintegracoes.educacao.sp.gov.br/apirepocmsp/api/cronograma-aula/dados-usuario?token=${token}`;

// Fazendo a requisição para buscar os dados
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Dados recebidos com sucesso!");
    console.log(data);
  })
  .catch(error => {
    console.error("Deu um erro ao tentar buscar os dados:", error);
  });

// ==========================================
// PARTE 2: AUTOMAÇÃO NA TELA (SALA DO FUTURO)
// ==========================================

function responderTarefaAutomaticamente(respostaCorreta) {
    console.log("Iniciando a automação da tarefa...");

    // 1. Encontrar todas as alternativas na tela
    // (O seletor '.alternativa' é um exemplo, precisamos ver o código fonte real da página depois)
    const alternativas = document.querySelectorAll('.alternativa'); 
    
    if (alternativas.length === 0) {
        console.error("Nenhuma alternativa encontrada na tela. Verifique se você está na página da tarefa.");
        return;
    }

    // 2. Marcar a resposta
    alternativas.forEach(botao => {
        // Se o texto do botão for igual à resposta que a API puxou, o robô clica
        if (botao.innerText.includes(respostaCorreta)) {
            botao.click();
            console.log("Resposta selecionada: " + respostaCorreta);
        }
    });

    // 3. Clicar no botão de enviar/finalizar
    setTimeout(() => {
        const botaoEnviar = document.querySelector('.btn-enviar-tarefa'); // Exemplo de botão
        if (botaoEnviar) {
            botaoEnviar.click();
            console.log("Tarefa enviada e marcada como concluída!");
        } else {
            console.error("Botão de enviar não encontrado.");
        }
    }, 2000); // Espera 2 segundos antes de enviar para o sistema não desconfiar
}

// Para testar, a gente chamaria a função assim (simulando que a API deu a resposta "A"):
// responderTarefaAutomaticamente("A");
