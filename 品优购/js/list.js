window.addEventListener('load',function(){
    var top=document.querySelector('.top');
    var mask=document.querySelector('.mask');
    var big=document.querySelector('.big');
    var imgMax=document.querySelector('.imgMax');
    top.addEventListener('mouseover',function(){
        mask.style.display='block';
        big.style.display='block';
    })
    top.addEventListener('mouseout',function(){
        mask.style.display='none';
        big.style.display='none';
    })
    top.addEventListener('mousemove',function(e){
        var x=e.pageX-this.offsetLeft;
        var y=e.pageY-this.offsetTop;
        var maskX=x-mask.offsetWidth/2;
        var maskY=y-mask.offsetHeight/2;
        // var maskMaxx=top.offsetWidth-mask.offsetWidth;
        // var maskMaxy=top.offsetHeight-mask.offsetHeight;
        var maskMax=top.offsetWidth-mask.offsetWidth;

        if(maskX<0){
            maskX=0;
        }else if(maskX>=maskMax){
            maskX=maskMax;
        }
        if(maskY<0){
            maskY=0;
        }else if(maskY>=maskMax){
            maskY=maskMax;
        }
        mask.style.left=maskX+'px';
        mask.style.top=maskY+'px';
           var bigMax=imgMax.offsetWidth-big.offsetWidth;
           var bigMovex=maskX*bigMax/maskMax;
           var bigMovey=maskY*bigMax/maskMax;
           imgMax.style.left=-bigMovex+'px';
           imgMax.style.top=-bigMovey+'px';
        
    })
})