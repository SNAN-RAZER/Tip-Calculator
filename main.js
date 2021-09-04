
'use strict';
const billAount = document.querySelector('.bill-input-entry');
const tipBtns = document.querySelectorAll('.btn');
const noPeople  = document.querySelector('.people-input-number');
const customTip = document.querySelector('.tip-custom');
const tipAmount = document.querySelector('.tip-amount-value');
const total = document.querySelector('.tip-total-value');
const warningBill =  document.querySelector('.warning-bill');
const warningPeople =  document.querySelector('.warning-people');
const resetBtn = document.querySelector('.result-reset');
let bill = 0;
let tip = 5;
let people = 0;
let tipA = 0;
let final = 0;

function clearActivebtn(){
    //to remove active btn
    tipBtns.forEach((temp)=>{

        temp.classList.remove('active');
    });

}

function initialize(){
    let bill = 0;
    let tip = 5;
    let people = 0;
    let tipA = 0;
    let final = 0;
    billAount.value ="";
    noPeople.value = "";
    warningBill.classList.add('hidden');
    warningPeople.classList.add('hidden');
    tipAmount.textContent = "$"+`${tipA}`;
    total.textContent = "$"+`${final}`;
    customTip.value='Custom'
    clearActivebtn();
    tipBtns[0].classList.add('active');


}
initialize();

tipBtns.forEach((tipBtn)=>{
    tipBtn.addEventListener('click',function(){

        //to remove active btn
        clearActivebtn();
        // to add active btn
        tipBtn.classList.add('active');
        tip = Number(this.textContent.split('%')[0]);
        calculate()

    });
})
function customTipChange(){
    clearActivebtn();
    tip= Number(customTip.value);
    tip=parseFloat(tip.toFixed(2));
    calculate();
}
function calculate(){


    if (billAount.value==='0' ||  billAount.value ===""){
        warningBill.classList.remove('hidden');
        return 0;      
    }
    bill=Number(billAount.value);

    if (noPeople.value === '0' || noPeople.value === ""){
        warningPeople.classList.remove('hidden');
        return 0;      
    }
    warningPeople.classList.add('hidden');
    people=Number(noPeople.value);



    let billPerPerson= bill/people;

    billPerPerson= parseFloat(billPerPerson.toFixed(2));


    tipA = (billPerPerson *(tip/100));
    tipA=parseFloat(tipA.toFixed(2));
    final= Number(billPerPerson) + Number(tipA );
    final=parseFloat(final.toFixed(2));
    tipAmount.textContent = "$"+`${tipA}`;
    total.textContent = "$"+`${final}`;

}

//Run calculate funtion 
billAount.onchange = calculate;
noPeople.onchange= calculate;
customTip.onchange = customTipChange;


//reset 
resetBtn.addEventListener('click',initialize); 