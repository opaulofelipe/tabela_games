var jogador0 = {
  nome: "Jogador 0",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var jogadores = [];


function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}


function exibirTabela(jogadores) {
  var html = ""; 
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button>";
    html += "<button onClick='adicionarEmpate(" + i + ")'>Empate</button>";
    html += "<button onClick='adicionarDerrota(" + i + ")'>Derrota</button>";
    html += "<button onClick='zerarPontos(" + i + ")'>Zerar</button></td></tr>"
  }
  var tabelaJogadores = document.querySelector("#tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}


function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirTabela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirTabela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirTabela(jogadores);
}


function zerarPontos(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibirTabela(jogadores);
}


function adicionarJogador(jogadores) {
  var jogadorNovo = Object.create(jogador0)
  
  jogadorNovo.nome = document.querySelector("input").value;
  jogadorNovo.vitorias = 0;
  jogadorNovo.empates = 0;
  jogadorNovo.derrotas= 0;
  jogadorNovo.pontos = 0;
  jogadores.push(jogadorNovo);
  
  exibirTabela(jogadores);
  
  document.querySelector("input").value = "";
}