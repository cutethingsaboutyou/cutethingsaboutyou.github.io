var counters = [0, 0, 0];
var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var compliments = ["CUTE", "NICE", "RESPECTFUL", "SMART", "FUNNY", "GOOD", "FUN",
  "PRETTY", "CARING", "GREAT", "EASY", "INCREDIBLE", "SHY", "EASY TO BE AROUND",
  "ADORABLE", "PERFECT", "CUTE", "NICE", "SHY", "FUN", "FUNNY", "EXCELLENT",
  "HOT", "PERFECT", "THE BEST", "CUTE"];

window.onload = function(){
  var message = document.getElementById("message");
  var disp1 = document.getElementById("disp1");
  var disp2 = document.getElementById("disp2");
  var disp3 = document.getElementById("disp3");
  document.getElementById("next1").onclick = function(){
    if(counters[0] == 25){
      return
    }
    counters[0]++;
    disp1.innerHTML = alph[counters[0]];
    message.innerHTML = checkName();
  };
  document.getElementById("last1").onclick = function() {
    if(counters[0] == 0){
      return
    }
    counters[0]--;
    disp1.innerHTML = alph[counters[0]];
    message.innerHTML = checkName();
  };
  document.getElementById("next2").onclick = function(){
    if(counters[1] == 25){
      return
    }
    counters[1]++;
    disp2.innerHTML = alph[counters[1]];
    message.innerHTML = checkName();
  };
  document.getElementById("last2").onclick = function() {
    if(counters[1] == 0){
      return
    }
    counters[1]--;
    disp2.innerHTML = alph[counters[1]];
    message.innerHTML = checkName();
  };
  document.getElementById("next3").onclick = function(){
    if(counters[2] == 25){
      return
    }
    counters[2]++;
    disp3.innerHTML = alph[counters[2]];
    message.innerHTML = checkName();
  };
  document.getElementById("last3").onclick = function() {
    if(counters[2] == 0){
      return
    }
    counters[2]--;
    disp3.innerHTML = alph[counters[2]];
    message.innerHTML = checkName();
  };
}

function checkName (){
  if(alph[counters[0]] == "T" && alph[counters[1]] == "A" && alph[counters[2]] == "S"){
    return "You are Tasha Ann Steele. <br><br><big>Will you go to homecoming with me?</big><br><br> -Alex Anderson";
  }
  var comp = ""
  if(compliments[counters[0]] == compliments[counters[1]] && compliments[counters[1]] == compliments[counters[2]]){
    comp += compliments[counters[0]];
    return "You are " + comp + ".";
  }
  else if(compliments[counters[0]] == compliments[counters[1]]) {
    comp += compliments[counters[0]] + " and " + compliments[counters[2]];
    return "You are " + comp + ".";
  }
  else if(compliments[counters[1]] == compliments[counters[2]] || compliments[counters[0]] == compliments[counters[2]]){
    comp += compliments[counters[0]] + " and " + compliments[counters[1]];
    return "You are " + comp + ".";
  }
  return "You are " + compliments[counters[0]] + ", " + compliments[counters[1]] + ", and " + compliments[counters[2]] + ".";

}
