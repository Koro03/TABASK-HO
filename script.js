
const clicpourvoirplus = (element) => {
    if(element.classList.contains("opened")){
      element.classList.remove("opened")
    }else{
      element.classList.add("opened")
    }
    
  }


function toggleDetails(button) {
    var figure = button.parentNode;
    var details = figure.querySelectorAll('figcaption:not(:first-child)');
    details.forEach(function (detail) {
        detail.classList.toggle('hidden');
    });
}
