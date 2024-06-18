function metodoProvincia(element) {
    
    var ciudad = element.nextElementSibling;
    
    if (ciudad.classList.contains('hidden')) { //busca arreglo y ve todas la clases del this (element)
        
        ciudad.classList.remove('hidden');
        element.classList.remove('collapsed');

    } else {
        
        ciudad.classList.add('hidden');
        element.classList.add('collapsed');
        
    }
    
}