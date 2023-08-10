let ip=document.getElementById('input-box');
let listcontainer=document.getElementById('list-container');
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    if(ip.value === ''){
        alert("Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ip.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ip.value='';
})
const highlight= ()=>{
    ip.style.backgroundColor="wheat";
}
const donthighlight= ()=>{
    ip.style.backgroundColor="white";
}
listcontainer.addEventListener('click',()=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
},false);