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
