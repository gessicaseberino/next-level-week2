// Procurar o botão 
document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {

    // Duplicar os campos. Que campos? --- schedule-item é uma classe div la no html 
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    // limpar os campos. Que campos? 
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo pegar
    fields.forEach(function(field){

        //Pegar o field do momento e limpa ele
        field.value =""
    })
 

    fields[0].value = ""
    fields[1].value = ""
    
    // Colocar na página    ----- schedule-items é um id de tag no html 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}

   


    


