var a=0;
var b=1;
var e=1;
var isdraw=1;

// add class or play game...>>>

function gameon(id) {
    // console.log(id);
    var palyer=document.getElementById(id).classList.contains("bg-danger");
    var secplayer=document.getElementById(id).classList.contains("bg-info");
   if (palyer==false && secplayer==false) {
    if (a==0) {
        document.getElementById(id).classList.add("bg-danger");
        a++;
    } else {
        document.getElementById(id).classList.add("bg-info");
        a--;
    }
}
winner();

}

// for finding winner...>>>>

function winner() {


    var ret=0;
// this for first winner bg danger...
    var d1 = document.getElementById("div1").classList.contains('bg-danger');
    var d2 = document.getElementById("div2").classList.contains('bg-danger');
    var d3 = document.getElementById("div3").classList.contains('bg-danger');

    var d4 = document.getElementById("div4").classList.contains('bg-danger');
    var d5 = document.getElementById("div5").classList.contains('bg-danger');
    var d6 = document.getElementById("div6").classList.contains('bg-danger');

    var d7 = document.getElementById("div7").classList.contains('bg-danger');
    var d8 = document.getElementById("div8").classList.contains('bg-danger');
    var d9 = document.getElementById("div9").classList.contains('bg-danger');

// this for second winner bg info...
    var e1 = document.getElementById("div1").classList.contains('bg-info');
    var e2 = document.getElementById("div2").classList.contains('bg-info');
    var e3 = document.getElementById("div3").classList.contains('bg-info');

    var e4 = document.getElementById("div4").classList.contains('bg-info');
    var e5 = document.getElementById("div5").classList.contains('bg-info');
    var e6 = document.getElementById("div6").classList.contains('bg-info');

    var e7 = document.getElementById("div7").classList.contains('bg-info');
    var e8 = document.getElementById("div8").classList.contains('bg-info');
    var e9 = document.getElementById("div9").classList.contains('bg-info');

// check the condition when if the which one is winner..

// check the first  player win or not...
    if((d1 && d2 && d3)||(d3 && d6 && d9)||(d7 && d8 && d9)||(d1 && d4 && d7)||(d4 && d5 && d6)||(d2 && d5 && d8)||(d1 && d5 && d9)||(d3 && d5 && d7)){
        document.getElementById("shwowinner").innerHTML=`<div class="alert alert-danger">Player A is Win</div>`;
        console.log('player first is  win');
        
        document.getElementById("acount").innerHTML=b;
        b++;
        ret=1;
        restartgame();
        
    }
    
    
    // check the second player win or not...
    if((e1 && e2 && e3)||(e1 && e4 && e7)||(e4 && e5 && e6)||(e2 && e5 && e8)||(e7 && e8 && e9)||(e3 && e6 && e9)||(e1 && e5 && e9)||(e3 && e5 && e7)){
        document.getElementById("shwowinner").innerHTML=`<div class="alert alert-danger">Player B is Win</div>`;
        console.log('player second is  win');

        document.getElementById("bcount").innerHTML=e;
        e++;
        ret=1;

        restartgame(); 
    }
   

    if ((d1 || e1)&& (d2||e2) && (d3||e3) && (d4||e4) && (d5||e5) && (d6||e6) &&(d7||e7) && (d8||e8) && (d9||e9) && (ret==0)){
        drawcount();
   }

    
}

// restart game when winnner is diclear...
function  restartgame() {
    for (let i = 1; i < 10; i++) {
         document.getElementById(`div${i}`).classList.remove('bg-danger');  
         document.getElementById(`div${i}`).classList.remove('bg-info'); 
    }
}

// draw match count....

function drawcount(){   
    document.getElementById("drawmatch").innerHTML=+isdraw;
    isdraw++;
    restartgame();
}
