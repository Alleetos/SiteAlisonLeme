
    // Menu Hamburguer
let bgStart = document.querySelector('.bgStart');
let aside = document.querySelector('.aside');
let hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function() {
    bgStart.classList.toggle('navBarMobile'); // alternar(colaca e remove a classe com o click);
    aside.classList.toggle('navBarMobile'); // alternar(colaca e remove a classe com o click);
    hamburguer.classList.toggle('navBarMobile'); // alternar(colaca e remove a classe com o click);
})

    // máquina de escrever
let msgs = ['Experiência em Seo e Marketing Digital', 'Desenvolvedor front-end'];
let text = document.querySelector('#textIntro');

rodape(msgs);

    // TypeWriter (Máquina escrever)
function escrever(str, done) {
    let char = str.split('').reverse(); // separa as string e inverte os seus valores
    let typer = setInterval(function() {
        if (!char.length)
        {
            clearInterval(typer);
            return setTimeout(done, 1500); // só para esperar um bocadinho
        }
        let next = char.pop(); // remove o último elemento de um array e retorna aquele valor
        text.innerHTML += next;
    }, 70);
}

function limpar(done) {
    let char = text.innerHTML;
    let nr = char.length;
    let typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        text.innerHTML = char.slice(0, nr); //retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim
    }, 70);
}

function rodape(conteudos) {
    let atual = -1;
	function prox() {
		if (atual < conteudos.length - 1)
        {
            atual++;
        }
		else
        {
            atual = 0;
        }
		var str = conteudos[atual];
		escrever(str, function(){
			limpar(prox);
		});
	}
	prox(prox);
}


    //animeScroll
// animações de scroll
let intro =  document.querySelector('.intro')
let sectionAbout = document.querySelector('.sectionAbout');
let sectionExperiences = document.querySelector('.sectionExperiences');
let sectionPortfolio = document.querySelector('.sectionPortfolio');
let sectionContact = document.querySelector('.sectionContact');

addEventListener('scroll', function() {
    animeScroll();
})

function animeScroll() {
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    //Transparencia Start
    if(windowTop > (sectionAbout.offsetTop-100))
    {
        intro.style.opacity = '60%';
        intro.style.transition = '1000ms';

        if(windowTop > (sectionAbout.offsetTop-50))
        {
            intro.style.opacity = '40%';
            intro.style.transition = '1000ms';

            if(windowTop > (sectionAbout.offsetTop))
            {
                intro.style.opacity = '20%';
                intro.style.transition = '1000ms';

                if(windowTop > (sectionAbout.offsetTop+150))
                {
                    intro.style.opacity = '0%';
                    intro.style.transition = '1000ms';
                }
            }
        }
    }
    else
    {
        intro.style.opacity = '100%';
        intro.style.transition = '1000ms';
    }


    //Mudar cor do menu
    if(windowTop > (sectionAbout.offsetTop+200))
    {
        aside.classList.add('mudaCorMenuBege');
        aside.classList.remove('mudaCorMenuPreto');

        if(windowTop > (sectionExperiences.offsetTop+200))
        {
            aside.classList.remove('mudaCorMenuBege');
            aside.classList.add('mudaCorMenuPreto');

            if(windowTop > (sectionPortfolio.offsetTop+200))
            {
                aside.classList.add('mudaCorMenuBege');
                aside.classList.remove('mudaCorMenuPreto');

                if(windowTop > (sectionContact.offsetTop+200))
                {
                    aside.classList.remove('mudaCorMenuBege');
                    aside.classList.add('mudaCorMenuPreto');
                }
            }
        }
    }
    else
    {
        aside.classList.remove('mudaCorMenuBege')
        aside.classList.remove('mudaCorMenuPreto');
    }


    //Animação dos conhecimentos
    target.forEach(function(element) {
        if(windowTop > (element.offsetTop + sectionExperiences.offsetTop)) // offsetTop traz a distancia do topo do elemento PAI mais proximo com o RELATIVE.
        {
            element.classList.add('animate');
        }
    })
}

    //selecting all required elements
const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image'); 
let target = document.querySelectorAll('[data-anime]');

onload = ()=>{ // once window loaded
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains('item')) // verificar se o click está sendo em um lugar que tenha a classe .item.
        {
            filterItem.querySelector('.active').classList.remove('active');  // encontra onde está com o active e remove.
            selectedItem.target.classList.add('active'); // coloca o active onde está sendo clicado.
            let filterName = selectedItem.target.getAttribute('data-name'); // armazenanddo o nome que está sendo selecionado no filtro.
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute('data-name'); // pegando o valor do data-name das imagens.

                // se o valor do filter name for igual a o valor do data-name da imagem
                // ou se o valor do filter name for igual a 'all'.
                if((filterImages == filterName) || (filterName == 'all'))
                {
                    image.classList.remove('hide');
                    image.classList.add('show');
                }
                else
                {
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });
        }
    }
    for(let i = 0; i < filterImg.length; i++)
    {
        filterImg[i].setAttribute('onclick', 'preview(this)'); //adding onclick attribute in all avaibale images
    }
}

    //selecting all required elements
const previewBox = document.querySelector('.preview-box'),
previewImg = previewBox.querySelector('img'),
categoryName = previewBox.querySelector('p');
closeIcon = previewBox.querySelector('.icon');
shadow = document.querySelector('.shadow');

    //fullscreen preview image function
function preview(element) {
    document.querySelector('body').style.overflow = 'hidden'; // quando o usuario clicar em uma imagem, tirar a barra de rolagem.
    let selectedPrevImg = element.querySelector('img').src; // pegando a url da imagem que o usuario clicou.
    previewImg.src = selectedPrevImg; // colocando a imgame que o usuario clicou no preview
    let selectedImgCategory = element.getAttribute('data-name') // pegando o valor o atributo que está no 'data-name' que o usuario clicou
    categoryName.innerText = selectedImgCategory; // passandddo o valor do atributo clocado para o campo categoria.
    previewBox.classList.add('show'); // show the preview box
    shadow.classList.add('show'); // add classe show para deixar o fundo escuro
    
    closeIcon.onclick = ()=>{ // if user click on the close of the preview box
        previewBox.classList.remove('show'); // hide the preview box
        shadow.classList.remove('show');
        document.querySelector('body').style.overflow = 'scroll'; // quando o usuario clicar no x, voltar a barra de rolagem.
    }
}


    //scroll Suave
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});


//função para retornar a distancia do elemento até o topo.
function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target);
    smoothScrollTo(0, distanceFromTheTop, 900);
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }


//Recriando a animação do smooth (código Clément Bourgoin).
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
        clearInterval(timer);
    }
    window.scroll(newX, newY);
    }, 1000 / 60);
}