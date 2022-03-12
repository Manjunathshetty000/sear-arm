
let searchData=()=>{
    let input= document.getElementById("input").value;
    let searchName=document.getElementsByClassName("names");
    let requiredArray=[]
    for(i=0;i<searchName.length;i++)
    {
            requiredArray.push(searchName[i].innerHTML)
    }
    let showData=document.getElementById("dis");
    let hideData=document.getElementById("hidedata");
    hideData.style.display="none";
    let myText="";
   let sortedArray= requiredArray.filter(val=>{
        if(val.toUpperCase().indexOf(input.toUpperCase())!==-1){
            myText+= `<li>${val}</li>`;
        }
    })
    console.log(myText);
    showData.innerHTML=myText;
}

// -----------------------------armstrong-----------------------------

let amstrongNum=(number)=>{

let power=number.toString().length
console.log(power);
let eachNum=number.toString().split("")
console.log(eachNum);
let output=0;
eachNum.map(val=>{
    if(val>=0){
        output+=val**power
    }})
    console.log(output);
    
    output===number?console.log("it is a amstrong"):console.log("it is not a amstrong")
}
// amstrongNum(153)