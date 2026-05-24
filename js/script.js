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