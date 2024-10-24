import { event1 } from "./model.js";
import { event2 } from "./model.js";
import { arr } from "./model.js";
import { searchItem } from "./model.js";
import { input } from "./model.js";
import { button1 } from "./model.js";
import { button2 } from "./model.js";
import { page } from "./model.js";
// event1.addEventListener('click',()=>console.log("btn-1"));
// event2.addEventListener('click',()=>console.log("btn-2"))

input.addEventListener('input',()=>searchItem(input.value))

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      

      console.log(array)
      let start= 0;
      let end = 0;
      button1.addEventListener('click',()=>
        { if(!(start > array.length -1) ) start++;end++;
          
         let html; 
         html = ""
         let  data = array.slice((start - 1)*10,end*10) 
        html = data.map((x)=>`<p>${x}</p>`).join('')
        // input.insertAdjacentHTML('afterend',data.map((x)=>`<p>${x}</p>`).join(''))

        page.innerHTML = html
       
        })

