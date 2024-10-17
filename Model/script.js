
const model = document.querySelector('.model-hidden')
const buttons = document.querySelector('.header');
const cancelButton = document.querySelector('span');
const overlay = document.querySelector('.over')
      buttons.addEventListener('click',function(e){
        if (e.target.matches('.btn')) {
            model.classList.add('model');
            overlay.classList.add('overlay')
            console.log(overlay)
         
        }
      })
      cancelButton.addEventListener('click',function(){
        model.classList.remove('model')
        overlay.classList.remove('overlay')
      })



     