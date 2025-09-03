const titulo= document.getElementById ("sox")

let original = true;


console.log (titulo)

titulo.innerText= "Noticias Rosas"
titulo.stylecolor = "pink"

titulo.addEventListener("click",() => {
if (original === true) {
    titulo.innerText = "esto es moda"
    titulo.style.color = "black"
}

else {
titulo.innerText = "Noticias Rosas"
titulo.style.color= "purple"
} 
original = !original;
} )