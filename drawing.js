
var cnv,ctx,X,Y,D,N,TIT,CLR0,CLR1,CC=[],start;

    function Step() {
      document.title="Game of life ('"+TIT+"' step: "+(++N)+")";
      //console.log(TIT);
      X1=X-1,Y1=Y-1,pp=[],aa=CC.slice(0,X),Z=X;
      d=D+1; y=1; do { // évite les bords
        z=Z; Z+=X;
        x=0; do {pp[x]=aa[x]; aa[x]=CC[z+x];} while (++x<X);
        x=1; do { // évite les bords
          n=pp[x-1]+pp[x]+pp[x+1]+aa[x-1]+aa[x+1]+CC[Z+x-1]+CC[Z+x]+CC[Z+x+1];
          if (n==2) continue; // ne traite que les cellules modifiées
          if (CC[c=z+x]) {
            if (n!=3) {CC[c]=0; ctx.fillStyle=CLR0; ctx.fillRect(1+x*d,1+y*d,D,D);}
          } else {
            if (n==3) {CC[c]=1; ctx.fillStyle=CLR1; ctx.fillRect(1+x*d,1+y*d,D,D);}
          }
        } while (++x<X1);
      } while(++y<Y1);
    }

    function loop_main(){
      FRAME_RATE = 60 // fps;
      const loop = window.setInterval(function(){
      Step();
      }, 4000/FRAME_RATE)
      }
    
    //function Key(ev) {
     // if ((k=ev.keyCode)==32) {/*' '*/ if(!start){start=1;loop_main()}; return;}
     // if ((k>=48)&&(k<=57)) {/*'0'...'9'*/ FctIni(k-48); N=0; Dims();
     //   document.title="Game of life ('"+TIT+"' step: 0)"; return;}
     // alert("Jeu de la vie: Aide [Help]\n'  ':\tavancer d'une étape [next]"
     //   +"\n'S','B':\tdimension des cellules [Smaller or Bigger]"
     //   +"\n'0'...'9':\tno. fonction d'initialisation (selon 'FctIni.js')");
    //}
    function Click(ev)  {
      r=cnv.getBoundingClientRect();
      d=D+1; x=(ev.clientX-r.left)/d|0; y=(ev.clientY-r.top)/d|0; z=x+y*X;
      ctx.fillStyle=(CC[z]=1-CC[z])?CLR1:CLR0; ctx.fillRect(1+x*d,1+y*d,D,D);
    }
    function Dims() {
      cnv.width=DX=window.innerWidth; cnv.height=DY=window.innerHeight ;
      ctx.fillStyle=CLR0; ctx.fillRect(0,0,DX,DY); ctx.fillStyle=CLR1;
      d=D+1; z=0; y=0; do {
        x=0; do if(CC[z++]) ctx.fillRect(1+x*d,1+y*d,D,D); while (++x<X);
      } while (++y<Y);
    }
    function Ini() {
      loop_main();
      cnv=document.getElementById('Can');
      cnv.addEventListener('click',Click,false);
      ctx=cnv.getContext('2d'); ctx.imageSmoothingEnabled=true;
      FctIni(Math.floor(Math.random() * 6)); N=0; Dims();
      
    }
  
