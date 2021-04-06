const textarea = document.getElementById('text-a');

const ch = document.getElementById('characters');

const word = document.getElementById('words');

const sent = document.getElementById('sentences');

const rt = document.getElementById('readingtime');

const btn = document.getElementById("generate");

function findchar(){
  return textarea.value.trim().length;
}

function countWords(){
  let s = textarea.value;
  s=s.trim();
  let n = s.length;
  if(n==0)
  return 0;
  let count = 0;
  for(let i=0;i<n;i++){
    if(s.charAt(i)==' ')
    count++;
  }
  return count+1;
}

function counts(){
  let s = textarea.value.trim();
  let count = 0;
  for(let i=0;i<s.length;i++){
    if(s.charAt(i) == "." || s.charAt(i) == "?" || s.charAt(i) == "!")
    count++;
  }
  return count;
}

function readt(){
  let c = 3.5;
  return Math.ceil(countWords()/c);
}

btn.addEventListener("click", () =>{
  ch.innerHTML = "Characters: "+findchar();
  word.innerHTML = "Words: "+countWords();
  sent.innerHTML = "Sentences: "+counts();
  let ans = readt();
  let m = Math.floor(ans/60);
  let s = ans - m*60;
  rt.innerHTML = "Reading Time: "+m+" MINUTES "+s+" SECONDS ";
});
