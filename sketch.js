
xcircle = 185;
ycircle = 328;
rcircle = 20;
wincircle = 450;

pulo = false;
impulso = false; 
hmax = 250;
//animações
img1 = [];
a1 = 0;
e1 = 0;
conta1 = 0;
slowa1 = 0;

img2 = [];
a2 = 0;
ef = 0;
conta2 = 0;
slowa2 = 0;

pedra = 0;
cacto = 0;
cena = 0;
xcena1 = 0;
xcena2 = 606;
deserto = 0;
xcena3 = 0;
xcena4 = 1012;

xo = 0;
yo = 320;
xo2 = 0
yo2 = 310;
rcircle2 = 5;
sx = 20;
sy = 315; 

var vidas = 3;
var pontos =0;
var slow = 1
var dificuldade = 1;

contpulo = 20;
velpulo= 5;

tela = 1;
ctela = 0;
ctela2 = 0;

contvidas = 2;


tamtext = 0;

function preload() {
  for(a1=0;a1<6;a1++){
    img1[a1] = loadImage('imagens/dino'+(a1+1)+'.gif');
  }
    for(a2=0;a2<3;a2++){
    img2[a2] = loadImage('imagens/frame-'+(a2+1)+'.gif');
  }
  cena = loadImage('imagens/cena.jpg')
  cacto = loadImage('imagens/cacto.png')
  pedra = loadImage('imagens/pedra.png')
  deserto = loadImage('imagens/deserto.png')
}
function setup() {
  createCanvas(400, 400)
}

function draw() {
  if (tela == 1){
  background(220);
  textSize (55);
text("DINO2", 115, 150, 110);
  textStyle(BOLD)
  textSize(15);
    ctela++
  if (ctela%3==0){
text("Press Space", 150, 300, 110); 
  }
    if (keyIsDown(32)){
   tela = 2; 
  }
  }
  
  
  
  
 
   if (tela == 2){
  background(220)
      xcena1 = xcena1 -5
    xcena2 = xcena2 -5
    imageMode(CORNER);
    image(cena,xcena1,0);
    image(cena,xcena2,0);
    if(xcena1<=-616){
    xcena1 = +408
    }
  if(xcena2<=-616){
    xcena2 = +408
    }
         xcena3 = xcena3 -3
    xcena4 = xcena4 -3
    imageMode(CORNER);
    image(deserto,xcena3,278);
    image(deserto,xcena4,278);
    if(xcena3<=-1012){
    xcena3 = +1010
    }
  if(xcena4<=-1012){
    xcena4 = +1010
    }
     
     e1 = img1[conta1]
   slowa1=slowa1 + 1
                if (slowa1>=5) {
                  slowa1 = 0;
                  conta1=conta1 + 1
                }
                 if (conta1>=5) {
                   conta1 = 0;
                 }
        ef = img2[conta2]
   slowa2=slowa2 + 1
                if (slowa2>=5) {
                  slowa2 = 0;
                  conta2=conta2 + 1
                }
                 if (conta2>=3) {
                   conta2 = 0;
                 }
                 imageMode(CENTER);
                 image(e1,xcircle,ycircle-12,80,60);
  textSize(18);
  text ("Vida: "+vidas, 10, 30);
  text ("Pontos: "+pontos, 170, 30);
  text ("Nível: "+dificuldade, 320, 30);
slow = slow + 1
  if (slow == 20){
  pontos = pontos + 1
  }
  if (slow > 20){
   slow = 1
 }
  if (pontos <= 50){
    dificuldade = 1;
  }
  if (pontos > 75){
    dificuldade = 2;
  }
  if (pontos > 100){
    dificuldade = 3;
  }
  if (pontos >= 150){
    dificuldade = 4
  }
  //line(0, 340, 400, 340);
 // circle (xcircle, ycircle, rcircle)
  
   if ( keyIsDown(32) && pulo==false){
    pulo = true
     impulso = true
  } 
  if (ycircle <= hmax ){
   impulso = false 
  }
  if (pulo == true){
     velpulo = velpulo + 1
  if (velpulo == 3){
  contpulo = contpulo - 1
  }
  if (velpulo > 3){
   velpulo = 1
 }
    if(impulso==true){
    ycircle=ycircle - contpulo
    }
  } 
    if (ycircle >= 328){
      pulo = false
      contpulo = 20
    }

  if(ycircle<328){
      ycircle+=3
    }
  
  if (keyIsDown(LEFT_ARROW)) {
    xcircle -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xcircle += 3;
  }
    
        
   if (pontos >= 75){
      imageMode(CENTER);
                 image(ef,xo,yo,40,30);
            //circle (xo, yo, rcircle2)
            yo = yo + 3;
            if (yo>400){
            yo = 0;
            xo = random (0,400);
            }
     
            //circle (xo2, yo2, rcircle2)
            xo2 = xo2 - 3;
            if (xo2 < 0){
            xo2 = random (0, 700); 
            }
  }
  
     
  if (pontos >= 100){
          //circle (xo, yo, rcircle2)
          yo = yo + 3;
          if (yo>400){
          yo = 0;
          xo = random (700);
          }
       
       
          //circle (xo2, yo2, rcircle2)
          xo2 = xo2 - 3;
          if (xo2 < 0){
          xo2 = random(0, 500)
          }
         imageMode(CENTER);
    image(cacto,sx,sy,40,60);
          //square (sx, sy, 25)
          sx = sx - 3;
          if (sx < 0){
          sx = random (700,900)
          }
  }
  
 
     
     if (pontos > 50){
         imageMode(CENTER);
    image(cacto,sx,sy,40,60); 
      // square (sx, sy, 25)
          sx = sx - 2
          if (sx < 0){
          sx = random (500,700)
          }
       imageMode(CENTER);
    image(pedra,xo2,yo2,15,15);
          //circle (xo2, yo2, rcircle2)
          xo2 = xo2 - 3;
          if (xo2 < 0){
          xo2 = random(1000)
          } 
  }
  
     
    if (pontos <= 50){
      imageMode(CENTER);
    image(cacto,sx,sy,40,60);
         // square (sx, sy, 25)
          sx = sx - 2
          if (sx < 0){
          sx = random (400,500)
          }
 }
 
     
     
     
     
  if (dist(xcircle, ycircle, xo, yo) < rcircle){
   xcircle = 30;
    ycircle = 328;
     if(pontos< 10){
    pontos = pontos - 10
    vidas = vidas - 1 
   }
    xo = 0;
    yo = 320;
  }
  if (dist(xcircle, ycircle, xo2, yo2) < rcircle){
    xcircle = 30;
    ycircle = 328;
    if(pontos > 10){
  pontos = pontos - 10
  vidas = vidas - 1 
   }
    xo2 = 0
    yo2 = 310;
  }
  if (dist(xcircle, ycircle, sx, sy) < 20){
    xcircle = 30;
    ycircle = 328;
    if (pontos > 10){
    pontos = pontos - 10
    vidas = vidas - 1 
    }
    sx = 400;
    sy = 315; 
  } 
   }
  
  
  
  
  
  
  
  if (vidas == 0){
   tela = 3;
    if(keyIsDown(ENTER)){
    tela = 1; 
    vidas = 3;
    pontos = 0;
    dificuldade = 1;
  }
  }
  
  
  if (tela == 3){
     
  background (150);
  textStyle(BOLD)
  textSize(30);
  text ("GAME OVER", 113, 200, 200);
    ctela++
  if (ctela%3==0){
    textSize(10);
text("Press Enter to return", 150, 250, 150); 
  }
  
    if(keyIsDown(ENTER)){
   tela = 1; 
  }
  
  }
 
  
  
  
  
  
  
  if (pontos == 150){
    tela = 4;
     if(keyIsDown(ENTER)){
    tela = 1; 
    vidas = 3;
    pontos = 0;
    dificuldade = 1;
    xcircle = 185;
    ycircle = 328;
  }
  }
  if (tela == 4){
    if(tamtext < 35){
    slow = slow + 2
   if (slow == 5){
  tamtext = tamtext + 2
  }
  if (slow > 20){
   slow = 1
 }
    }
   background (220);
    textStyle(BOLD);
    textSize(tamtext);
    text ("YOU WIN!", 120, 190, 200)
    ctela++
  if (ctela%3==0){
     textSize(10);
    text("Press Enter to return", 155, 235, 150);
  }
    e1 = img1[conta1]
    imageMode(CENTER);
    image(e1,xcircle,wincircle-12,80,60);
     if(wincircle <= 300){
         slowa1= slowa1 + 1
     }
                if (slowa1>=5) {
                  slowa1 = 0;
                  conta1=conta1 + 1
                }
                 if (conta1>=5) {
                   conta1 = 0;
                 }
 // circle (xcircle, wincircle, rcircle)
     wincircle--
    if (wincircle < 300){
      wincircle = 300;
      xcircle++
    }
}
}




