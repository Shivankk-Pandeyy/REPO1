
let H_bmi=document.getElementById('h1');
let W_bmi=document.getElementById('w1');
let btn_bmi=document.getElementById('b1');
const bmi=()=>{
    let height=(parseFloat(H_bmi.value))/100;
    let weight=parseFloat(W_bmi.value);
    if(height && weight){
    let bmi=(weight/(height*height)).toFixed(2);
    console.log(bmi);
    let bmi_ans=document.getElementById('bmians');
    bmi_ans.innerHTML=`BMI= ${bmi}`;
    let display=document.getElementById('bmians');
    if(bmi<18.5){
        display.innerHTML="UNDERWEIGHT";
    }
    else if(bmi>18.5 && bmi<24.9){
        display.innerHTML="NORMAL";
    }    
    else if(bmi>25 && bmi<29.9){
        display.innerHTML="OVERWEIGHT";
    }
    else if(bmi>30 && bmi<34.9){
        display.innerHTML="OBESE";
    }
    else if(bmi>35){
        display.innerHTML="EXTREMELY OBESE";
    }
}
    else{
        alert("You haven't added either Height or Weight");
    }
}
btn_bmi.addEventListener('click',bmi)
//BMR CALCULATION 
let H_bmr=document.getElementById('h2');
let W_bmr=document.getElementById('w2');
let btn_bmr=document.getElementById('b2');
let age=document.getElementById('age');
let gen=document.getElementById('gen');
const bmr=() =>{
    let height=parseInt(H_bmr.value);
    let weight=parseInt(W_bmr.value);
    let agebmr=parseInt(age.value);
    let gender=gen.value;
    if(height && weight && agebmr &&gender){
    if(document.getElementById('gen').value.toString().toLowerCase()=='male'){
        let bmrans=(10*weight)+(6.25*height)-(5*agebmr)+5;
        console.log(bmrans);
        let bmr_ans=document.getElementById('bmrans');
        bmr_ans.innerHTML=`Maintainence Calories = ${bmrans}Calories/Day`
    }
    else if(document.getElementById('gen').value.toString().toLowerCase()=='female'){
        let bmrans=(10*weight)+(6.25*height)-(5*agebmr)-16;
        console.log(bmrans);
        let bmr_ans=document.getElementById('bmrans');
        bmr_ans.innerHTML=`Maintainence Calories = ${bmrans}Calories/Day`
    }
    }
    else{
        alert("Add gender as male or female");
    }
}
btn_bmr.addEventListener('click',bmr);