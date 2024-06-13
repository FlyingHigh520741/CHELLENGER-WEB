const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white.png";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white.png";
    }
}

function entrar(event) { 
  
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    if (login === "1234" && senha === "1234") {
      alert("Logado com sucesso");
      window.location.href = '../index.html';
    } else {
      alert("Usuário ou senha inválidos");
    }
  }
  

function voltar(){
    window.location.href = '../index.html'
}

function email(){
    alert("successfully registered");
}