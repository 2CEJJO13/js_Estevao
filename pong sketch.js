//variáveis bolinha
let xbolinha = 100;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xraqueteoponente = 585;
let yraqueteoponente = 150;

//velocidade da bolinha
let velocidadexbolinha = 6; 
let velocidadeybolinha = 6;

//variáveis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

//placar do jogo
let meuspontos = 0;
let pontosdooponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificaColisaoborda();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  verificacolisaoraquete(xraquete, yraquete);  verificacolisaoraquete(xraqueteoponente,yraqueteoponente);
  mostraraquete(xraqueteoponente, yraqueteoponente);
  movimentaraqueteoponente();
  incluiplacar()
  marcaponto();
}

function mostrabolinha() {
  circle(xbolinha, ybolinha, diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificaColisaoborda() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0) {
    velocidadeybolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x, y, raquetecomprimento, raquetealtura);
}

function movimentaminharaquete(){
  if(keyIsDown(87)){
    yraquete -= 10;
  }
  if(keyIsDown(83)){
    yraquete +=10;
  }
}

function verificacolisaoraquete() {
  if(xbolinha - raio < xraquete + raquetecomprimento && ybolinha- 
raio < yraquete + raquetealtura && ybolinha + raio > yraquete){
    velocidadexbolinha *= -1;
    raquetada.play()
  }
}

function verificacolisaoraquete(x, y) {
  colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidiu){
    velocidadexbolinha *= -1;
    raquetada.play();
  }
}

function movimentaraqueteoponente() {
 if (keyIsDown(UP_ARROW)){
   yraqueteoponente -= 10;
 }
 if (keyIsDown(DOWN_ARROW)){
   yraqueteoponente += 10;
 }
}

function incluiplacar(){
stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosdooponente, 470, 26);
}

function marcaponto() {
  if (xbolinha > 590) {
    meuspontos += 1;
    ponto.play();
  }
  
  if (xbolinha < 10) {
    pontosdooponente += 1;
    ponto.play();
  }
}

function preload(){
trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function bolinhanaoficapresa(){
  if(xbolinha - raio < 0){
  xbolinha = 23
  }
}