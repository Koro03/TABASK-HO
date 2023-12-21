
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

const search=document.querySelector(".search");
const btn=document.querySelector(".btn");
const input=document.querySelector(".input");

btn.addEventListener("click",()=>{
    search.classList.toggle("active");//toggle metode add and remove in the same time class
    input.focus();//i put focus in my input
})

