
function element (selector) { return document.querySelector(selector)}

const input = element('.input')
const boton = element('.boton')
const seccion = element('.body')

boton.addEventListener('click', () => {
    const estilosCSS = input.value;
    seccion.style.cssText = estilosCSS;
})

input.addEventListener('change', () => {
    // Verifica si se seleccionó un archivo
    if(input.files.length > 0) {
      const file = input.files[0];
      const imageURL = URL.createObjectURL(file);
      seccion.style.backgroundImage = `url(${imageURL})`;
      URL.revokeObjectURL(imageURL);
    }
});
