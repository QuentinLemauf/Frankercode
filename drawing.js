
var cnv,ctx,X,Y,D,N,TIT,CLR0,CLR1,CC=[],start;

    function Step() {
      document.title="jeu de la vie ('"+TIT+"' etape(s): "+(++N)+")";//afficher le nom du motif utilisé initialement
      X1=X-1,Y1=Y-1,pp=[],aa=CC.slice(0,X),Z=X;
      d=D+1; y=1; do { // esquive les bords
        z=Z; Z+=X;
        x=0; do {pp[x]=aa[x]; aa[x]=CC[z+x];} while (++x<X);
        x=1; do { // esquive les bords
          n=pp[x-1]+pp[x]+pp[x+1]+aa[x-1]+aa[x+1]+CC[Z+x-1]+CC[Z+x]+CC[Z+x+1];
          if (n==2) continue; // traite seulement les cellules modifiés
          if (CC[c=z+x]) {
            if (n!=3) {CC[c]=0; ctx.fillStyle=CLR0; ctx.fillRect(1+x*d,1+y*d,D,D);}
          } else {
            if (n==3) {CC[c]=1; ctx.fillStyle=CLR1; ctx.fillRect(1+x*d,1+y*d,D,D);}
          }
        } while (++x<X1);
      } while(++y<Y1);
    }

    function loop_main(){//permet de faire renouveler le motif
      FRAME_RATE = 60 // fps;
      const loop = window.setInterval(function(){
      Step();
      }, 4000/FRAME_RATE)
      }

    function Click(ev)  {//permet de rajouter en temps réel une cellule dans le jeu
      r=cnv.getBoundingClientRect();
      d=D+1; x=(ev.clientX-r.left)/d|0; y=(ev.clientY-r.top)/d|0; z=x+y*X;
      ctx.fillStyle=(CC[z]=1-CC[z])?CLR1:CLR0; ctx.fillRect(1+x*d,1+y*d,D,D);
    }


    function Dims() {// gere les dimmensions du canva
      cnv.width=DX=window.innerWidth; cnv.height=DY=window.innerHeight ;
      ctx.fillStyle=CLR0; ctx.fillRect(0,0,DX,DY); ctx.fillStyle=CLR1;
      d=D+1; z=0; y=0; do {
        x=0; do if(CC[z++]) ctx.fillRect(1+x*d,1+y*d,D,D); while (++x<X);
      } while (++y<Y);
    }


    function Ini() {// fonction appeler par la page html
      loop_main();
      cnv=document.getElementById('Can');
      cnv.addEventListener('click',Click,false);
      ctx=cnv.getContext('2d'); ctx.imageSmoothingEnabled=true;
      FctIni(Math.floor(Math.random() * 6)); N=0; Dims();
      
    }
  
