let bunav=document.getElementsByTagName("button")[0];
let buac=false;
bunav.onclick=()=>{
    let nav=document.getElementsByTagName("nav")[0];
    let div=nav.getElementsByTagName("div");
    if(buac==false){
        nav.style.height="290px";
        div[0].setAttribute("class","x1");
        div[1].style.width="0px";
        div[2].setAttribute("class","x2");
        buac=true;
    }else{
        nav.style.height="60px";
        div[0].setAttribute("class","");
        div[1].style.width="42px";
        div[2].setAttribute("class","");
        buac=false;
    }
}
let bumore=document.querySelectorAll(".s3>button")[0];
let buac2=false;
bumore.onclick=()=>{
    let s3=document.getElementsByClassName("s3")[0];
    let div=s3.getElementsByTagName("div")[0];
    if(buac2==false){
        div.style.display="block";
        buac2=true;
    }else{
        div.style.display="none";
        buac2=false;
    }
}