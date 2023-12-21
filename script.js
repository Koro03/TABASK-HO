
const clicpourvoirplus = (element) => {
    if(element.classList.contains("opened")){
      element.classList.remove("opened")
    }else{
      element.classList.add("opened")
    }
    
  }


  function toggleDetails(button) {
    var description = button.previousElementSibling; // Assurez-vous que c'est le bon sélecteur
    description.classList.toggle('hidden');
}

