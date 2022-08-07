let p=5
let n=''
for (let i=0;i<=p;i++){
  for (let k=0;k<=p-i;k++){
    n+='*';
  }n+='\n'
}console.log(n)

//reverse right triangle

let r=5
let n=''
for (let i=0;i<=r;i++){
  for (let k=0;k<=i;k++){
    n+='*';
  }n+='\n'
}console.log(n)

//right triangle triangle

let n=5
let string=''
for (let i=1;i<=n;i++){
  for (let j=1;j <= n-i;j++){
    string+=''
  }
  for (let k=0;k<2*i-1;k++){
    string+='*'
  }
  string+='\n'
}console.log(string)
// use  single string it get output right angle triangle

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}console.log(string);
// use double string it get output triangle
