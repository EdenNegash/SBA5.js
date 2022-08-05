const first= document.getElementById('first');
const last=document.getElementById('last');
const age=document.getElementById('age');
const mes=document.getElementById('mes');
const btn =document.getElementById('btn');
const newbtn =document.getElementById('nbtn');
class Person {
    constructor(){
        this.firstName = first.value;
        this.lastName =last.value;
        this.age=age.value;
    }
}

const func = ()=>{
    document.body.style.background ='bisque';
   const Person1 = new Person();
   console.log(Person1);
   let str=(`Hello,${Person1.firstName} ${Person1.lastName}. You are ${Person1.age} years old.`);
   mes.innerHTML=str;
   
}

btn.addEventListener('click',func);
newbtn.addEventListener('click',()=>{
    document.body.style.backgroundColor='rebeccapurple';
    first.value='';
    last.value='';
    age.value='';
    mes.innerHTML='';

})
