let cor;    //cria uma variavel com o nome cor -- definindo aqui a váriavel atingirá todas as funcoes
            // caso a variavel sedeinida dentro de uma função ela só poderá ser utilizada naquela funcao

let velocidade = 3;

let posicaoHorizontal;  //cria a variavel posicaoHorizontal
let posicaoVertical;


function setup() { //setup: função que é executada assim que carregado/atualizado
  
  createCanvas(600, 400); //createCanvas: cria a tela de desenho com (largura, altura  - em pixels)
  
  background("#066B0A");// background: define a cor de fundo da tela criada acima - 
                        //o ideal e estar em setup para não atualizar (mudar) quando outro comando for acionado.
  
  posicaoHorizontal = 300;    // define / altera o valor da variavel
  posicaoVertical =200;       // define / altera o valor da variavel
  cor = color(random(0,255),random(0,255),random(0,255));   //random: seleciona um valor entre 0 e 255
  
}    //OBS: toda função deve ficar entre {}-chaves -- NÃO esquecher de abrir e fechar a chave no local correto

  function draw() {  // draw: pode ser outro nome -- função para desenhar na tela
  
  fill(cor);       // fill: define a cor da caneta / desenho
  
  stroke("#FFF");   // stroke: define a cor da borda da caneta /desenho
  
  circle(posicaoHorizontal, posicaoVertical, 40);  // circle: cria um cirlulo (posiçãox, posição y, diametro)
                                // (posicao do mouse no eixo x, posicao do mouse no eixo y )
    

  if(mouseX < posicaoHorizontal) {  // Se (mouseX for menor que posicaoHorizontal)  executa a sequencia
    
    posicaoHorizontal = posicaoHorizontal - velocidade;   //altera o valor da variavel posicaoHorizontal para menos 1 no valor.
  }

 if(mouseX > posicaoHorizontal) {  // Se (mouseX for maior que posicaoHorizontal)  executa a sequencia
    
    posicaoHorizontal = posicaoHorizontal + velocidade;   //altera o valor da variavel posicaoHorizontal para menos 1 no valor.
  }  

 if(mouseY < posicaoVertical) {  // Se (mouseY for menor que posicaoVertical)  executa a sequencia
    
    posicaoVertical = posicaoVertical - velocidade;   //altera o valor da variavel posicaoHorizontal para menos 1 no valor.
  }    
   if(mouseY > posicaoVertical) {  // Se (mouseY for menor que posicaoVertical)  executa a sequencia
    
    posicaoVertical = posicaoVertical + velocidade;   //altera o valor da variavel posicaoHorizontal para menos 1 no valor.
   }
    
    
if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  //se o mouse for pressionado, muda a cor aleatoriamente
  }
}
