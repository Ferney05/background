
function element (selector) { return document.querySelector(selector)}

const input = element('.input')
const boton = element('.boton')
const seccion = element('.body')

boton.addEventListener('click', () => {
    const estilosCSS = input.value;
    seccion.style.cssText = estilosCSS;
})