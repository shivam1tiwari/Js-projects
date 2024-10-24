export const event1 = document.querySelector('.btn-1').addEventListener('click',()=>console.log("btn-1"));

export const event2 = document.querySelector('.btn-2').addEventListener('click',()=>console.log("btn-2"));
export const page = document.querySelector('.pagination')
export const button1 = document.querySelector('.btn-1')
export const button2 = document.querySelector('.btn-2')
export const input = document.querySelector('.search')
export const arr = ["shivam","raju","har"]

export function searchItem(str){
 if(str.length >= 4){
  let data = arr.filter((x)=>{if(x==str){return x}});
  input.insertAdjacentHTML('afterend',data.map((x)=>`<p>${x}</p>`).join(''))
  
  
}}






