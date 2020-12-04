function FctIni(n) { // appelée par index.html
  X= window.innerWidth  || document.documentElement.clientWidth || document.body.clientWidth; // taille du canva en X
  Y= window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight; // taille du canva en Y
  D=16;  // 4 ou 8 ou 16
  Y=Y/D;
  X=X/D;
  CLR0='#000000'; // couleur background
  CLR1='#FFFFFF'; // couleur cube
  //alert(X+" "+Y);
  switch (n) { // Initialisation de plusieurs figures connues


  case 0:
    TIT="Aléatoire";Clear();
    n=X*Y/3; do CC[Math.floor(X*Y*Math.random())]=1; while (--n>0);
    return;


  case 1:
    TIT="Clown";Clear();
    i=Math.floor((Y/2))*X+Math.floor(X/2);
    CC[i-1]=CC[i]=CC[i+1]=CC[(i-1)+X]=CC[(i+1)+X]=CC[(i-1)+2*X]=CC[(i+1)+2*X]=1;
    return;


  case 2:
    TIT="Ligne"; Clear();
    i=X*Math.floor(Y/2); m=i+X; do CC[i]=1; while (++i<m);
    return;


  case 3:
    TIT="Gosper glider gun";
    Clear();
    i=X; CC[i+25]=1;
    i+=X; CC[i+23]=CC[i+25]=1;
    i+=X; CC[i+13]=CC[i+14]=CC[i+21]=CC[i+22]=CC[i+35]=CC[i+36]=1;
    i+=X; CC[i+12]=CC[i+16]=CC[i+21]=CC[i+22]=CC[i+35]=CC[i+36]=1;
    i+=X; CC[i+1]=CC[i+2]=CC[i+11]=CC[i+17]=CC[i+21]=CC[i+22]=1;
    i+=X; CC[i+1]=CC[i+2]=CC[i+11]=CC[i+15]=CC[i+17]=CC[i+18]=CC[i+23]=CC[i+25]=1;
    i+=X; CC[i+11]=CC[i+17]=CC[i+25]=1;
    i+=X; CC[i+12]=CC[i+16]=1;
    i+=X; CC[i+13]=CC[i+14]=1;
   return;

  case 4:
    TIT="Thunderbird";  Clear();
    i=12*X+Math.floor(X/2);
    CC[i-1]=CC[i]=CC[i+1]=CC[i+2*X]=CC[i+3*X]=CC[i+4*X]=1;
    return;

  case 5:
    TIT="Staros"; Clear();
    i=Math.floor((Y/2))*X+Math.floor(X/2)-2*X; CC[i-2]=CC[i]=CC[i+2]=1;
    i=i+X; CC[i-2]=CC[i+2]=1;
    i=i+X; CC[i-2]=CC[i+2]=1;
    i=i+X; CC[i-2]=CC[i+2]=1;
    i=i+X; CC[i-2]=CC[i]=CC[i+2]=1;
  }
}
function Clear() {i=X*Y; do CC[--i]=0; while (i>0);}