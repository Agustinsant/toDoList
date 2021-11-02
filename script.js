var input = document.querySelector('.input')
var botonAgregar = document.querySelector('.boton-agregar')
var container = document.querySelector('.container')



class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea);
    }
    crearDiv(nuevaTarea){
        var inputItem = document.createElement('input');
        var botonEditar = document.createElement('button')
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add('boton-editar')
        
        var botonRemover = document.createElement('button')
        botonRemover.innerHTML = '<i class="fas fa-trash">'
        botonRemover.classList.add('boton-remover')
        
        inputItem.value = nuevaTarea
        inputItem.classList.add('item-input')
        inputItem.type = 'text'
        inputItem.disabled = true

        let itemBox = document.createElement('div')
        itemBox.classList.add('item')
        
        itemBox.appendChild(inputItem)
        itemBox.appendChild(botonEditar)
        itemBox.appendChild(botonRemover)
        container.appendChild(itemBox)

        botonEditar.addEventListener('click', function(){
            if(inputItem.disabled == true){
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                inputItem.disabled = !true
            }
            else{
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
                inputItem.disabled = true
            }
        })

        botonRemover.addEventListener('click', function(){
            itemBox.removeChild(inputItem)
            itemBox.removeChild(botonEditar)
            itemBox.removeChild(botonRemover)



        })
    }
}

function chequearInput(){
    if (input.value != ''){
        let nuevaTarea = new Item(input.value)
        
    }
    // else{alert('Por favore agregue una tarea.')}
}

botonAgregar.addEventListener('click', function(){
    chequearInput()
    input.value = ''
})







