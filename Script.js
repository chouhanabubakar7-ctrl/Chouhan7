let run1=0;
let wk=0;
let b=0;
let o=0;

function run(r){
run1+=r;
document.getElementById("score").innerHTML=run1+"-"+wk;
ball();
}

function wicket(){
wk++;
document.getElementById("score").innerHTML=run1+"-"+wk;
ball();
}

function ball(){
b++;
if(b==6){o++;b=0;}
document.getElementById("over").innerHTML=o+"."+b;
calc();
}

function calc(){
let t=document.getElementById("target").value;
let crr=(run1/(o+(b/6))).toFixed(2);
document.getElementById("crr").innerHTML=crr;
let rrr=((t-run1)/(20-(o+(b/6)))).toFixed(2);
document.getElementById("rrr").innerHTML=rrr;
}

function reset(){
run1=0;wk=0;b=0;o=0;
document.getElementById("score").innerHTML="0-0";
document.getElementById("over").innerHTML="0.0";
}