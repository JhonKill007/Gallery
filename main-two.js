var num = 1;

document.querySelector(".a").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/01.jpg";
    num = 1;   
});

document.querySelector(".b").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/02.jpg";
    num = 2; 
});

document.querySelector(".c").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/03.jpg";
    num = 3; 
});

document.querySelector(".d").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/04.jpg";
    num = 4; 
});

document.querySelector(".e").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/05.jpg";  
    num = 5;   
});

document.querySelector(".f").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/06.jpg";
    num = 6; 
});

document.querySelector(".g").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/07.jpg";
    num = 7; 
});

document.querySelector(".h").addEventListener('click', () =>{
    var foto = document.getElementById("foto");
    foto.src = "img/08.jpg";
    num = 8; 
});




function atras(){
    num--;
    if(num < 8 && num > 0){
        num.toString;
        var foto = document.getElementById("foto");
        foto.src = "img/0"+num+".jpg";  
    }
    else{
        var foto = document.getElementById("foto");
        foto.src = "img/08.jpg";
        num = 8;     
    }

}

function adelante(){
    num++;
    if(num < 8 && num > 0){
        num.toString;
        var foto = document.getElementById("foto");
        foto.src = "img/0"+num+".jpg";  
    }
    else{
        var foto = document.getElementById("foto");
        foto.src = "img/01.jpg";
        num = 1;     
    }

}
