let bunav=document.getElementsByTagName("button")[0];
let hei=false;
bunav.onclick=()=>{
    let nav=document.getElementsByTagName("nav")[0];
    let div=nav.getElementsByTagName("div");
    if(hei==false){
        nav.style.height="290px";
        div[0].setAttribute("class","x1");
        div[1].style.width="0px";
        div[2].setAttribute("class","x2");
        hei=true;
    }else{
        nav.style.height="60px";
        div[0].setAttribute("class","");
        div[1].style.width="42px";
        div[2].setAttribute("class","");
        hei=false;
    }
}