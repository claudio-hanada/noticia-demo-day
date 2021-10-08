function createComponent(text){
    div = document.createElement('div')
    div.setAttribute('id', 'to_exclude')
    div.setAttribute('class', 'col-md-12 no-gutters d-flex justify-content-center')
    new_text = document.createElement('p')
    new_text.setAttribute('id', 'label_to_exclude')
    new_text.innerHTML = text
    div.append(new_text)
    return div
}

function myFunction(x) {
    var expandir = document.getElementById("noticia_principal");
    var esconder = document.getElementById("noticia_secundaria");
    var imagem = document.getElementById("img_principal");
    var title = document.getElementById("title");

    if (x.matches) { // If media query matches
        esconder.classList.add('d-none');
        imagem.setAttribute('src', '')
        expandir.classList.remove('col-md-5')
        expandir.classList.add('col-md-12')
        if (expandir.children[0].getAttribute('id') == null){
            component = createComponent(title.innerHTML)
            expandir.insertBefore(component, expandir.children[0])
        }
        title.classList.add('d-none')
        
        
    } else{
        esconder.classList.remove('d-none');
        imagem.setAttribute('src', 'pexels-lukas-590016.jpg')
        expandir.classList.remove('col-md-12')
        expandir.classList.add('col-md-5')
        title.classList.remove('d-none')
        document.getElementById('to_exclude').remove()
    }
  }

window.addEventListener('resize', function(event) {
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x)
});