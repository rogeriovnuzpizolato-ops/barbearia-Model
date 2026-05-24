// animação nas paginas 
const elements= document.querySelectorAll(".hidden");

const observar= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
})
elements.forEach((element)=>{
    observar.observe(element)
})

// troca das imagens do card na pagina sobre nos 

const servicos= [
    {
        imagem: "img/corte-1.png",
        titulo: "Curry Fade",
        descricao:" degradê moderno com o topo volumoso e texturizado, ideal para destacar cachos com estilo e personalidade."
    },
    {
        imagem: "img/corte-2.png",
        titulo: "French Crop",
        descricao:" Corte moderno com franja reta e topo texturizado, combinado com degradê nas laterais para um visual estiloso e fácil de manter.."
    },
    {
        imagem: "img/corte-4.png",
        titulo: "Side Part com risca",
        descricao:" Corte clássico e elegante com topo penteado de lado, degradê nas laterais e divisão marcada para um visual alinhado e sofisticado."
    }
];
// pegando elementos do html 
const img= document.querySelector(".sobreNos_img");
const titulo= document.querySelector(".corte_name");
const descricao= document.querySelector(".description");
// criando troca dinamica 
let index=0;

if(img && titulo && descricao){
    function trocaServico(){
    img.src= servicos[index].imagem
    titulo.textContent= servicos[index].titulo
    descricao.textContent= servicos[index].descricao

    index++

    if(index >= servicos.length){
        index= 0
    }
}

setInterval(trocaServico, 3000);
}
