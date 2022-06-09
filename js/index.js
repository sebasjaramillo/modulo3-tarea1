import { personajes } from "./card.js";
const adelante=document.getElementById('adelante');
const atras=document.getElementById('atras');
const img=document.querySelector('.imagen');
const select=document.getElementById('seleccionador');
const container=document.querySelector('.contenedor');
const descripcion=document.querySelector('.description');
const name=document.querySelector('.nombre');
const volv=document.getElementById('volver');

let contador=0;


const iradelante=()=>{
    if(contador<10){

        contador = contador +1;
        img.setAttribute('src',`${personajes[contador].image}`);
        select.innerText=`${personajes[contador].name}`;

    }
    if(contador==0){
        atras.disabled=true;
        atras.style.background='gray';
        
    }else if(contador>0){
        atras.disabled=false;
        atras.style.background='rgba(18, 46, 205, 0.83)';
    }
    if(contador==10){
        adelante.disabled=true;
        adelante.style.background='gray';
    }else if(contador<10){
        adelante.disabled=false;
        adelante.style.background='rgba(18, 46, 205, 0.83)';
    }
    

    console.warn(contador);
}
atras.disabled=true;
atras.style.background='gray';
const iratras=()=>{
    if(contador>0){
        

        contador = contador -1;
        img.setAttribute('src',`${personajes[contador].image}`);
        select.innerText=`${personajes[contador].name}`;
        
    }
    if(contador==0){
        atras.disabled=true;
        atras.style.background='gray';
        
    }else if(contador>0){
        atras.disabled=false;
        atras.style.background='rgba(18, 46, 205, 0.83)';
    }
    if(contador==10){
        adelante.disabled=true;
        adelante.style.background='gray';
    }else if(contador<10){
        adelante.disabled=false;
        adelante.style.background='rgba(18, 46, 205, 0.83)';
    }
    
    console.log(contador);

    console.error(contador);
}
function informacion(){
    atras.style.visibility = "hidden";
    adelante.style.visibility = "hidden";
    select.style.visibility = "hidden";
    descripcion.style.visibility="visible";
    name.style.visibility="visible";
    volv.style.visibility="visible";
    img.style.right = "250px";
    img.style.top= "5%";
    volv.style.right= "330px";
    volv.style.top="3%";
    descripcion.innerText=`${personajes[contador].description}`;
    name.innerText=`${personajes[contador].name}`;

    localStorage.setItem("personaje",JSON.stringify(personajes[contador]));
    const get=JSON.parse(localStorage.getItem("personaje"));
}
function inicio(){
   descripcion.style.visibility ="hidden";
   name.style.visibility ="hidden";
   volv.style.visibility ="hidden";
   atras.style.visibility ="visible";
   adelante.style.visibility ="visible";
   select.style.visibility ="visible";
   img.style.right="50px";
   img.style.top="-3%";

}

adelante.addEventListener('click',iradelante);
atras.addEventListener('click',iratras);
select.addEventListener('click',()=>informacion());
volv.addEventListener('click',()=>inicio());



