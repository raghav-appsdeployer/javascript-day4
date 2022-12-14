document.getElementById('validateForm').addEventListener('submit',(e)=>{
    e.preventDefault()
const inpValue = document.getElementById('inp').value
console.log(inpValue)
if(inpValue >= 18){
    alert('he/she is applicable to vote')
}else if(inpValue <18 && inpValue>=0 ){
alert(' he/she is not applicable to vote')
}else if(inpValue <0){
    alert('negative age not allowed')
}else{
    alert('Please enter integer')
}
})


document.getElementById('promptEligibility').addEventListener('click',()=>{
let inpValue = prompt('Enter your Age')
const promptTxt = document.getElementById('promptTxt')

const value = confirm('change your input yes/no')

if(value){
    inpValue = prompt('Enter your age')
    if(inpValue >= 18){
        promptTxt.innerText = 'he/she is applicable to vote'
    }else if(inpValue <18 && inpValue>=0 ){
        promptTxt.innerText = ' he/she is not applicable to vote'
    }else if(inpValue <0){
        promptTxt.innerText = 'negative age not allowed'
    }else{
        promptTxt.innerText = 'Please enter integer'
    }
}

if(value === false){
    if(inpValue >= 18){
        promptTxt.innerText = 'he/she is applicable to vote'
    }else if(inpValue <18 && inpValue>=0 ){
        promptTxt.innerText = ' he/she is not applicable to vote'
    }else if(inpValue <0){
        promptTxt.innerText = 'negative age not allowed'
    }else{
        promptTxt.innerText = 'Please enter integer'
    }
}
})

document.getElementById('urlForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    const urlTxt = document.getElementById('urlTxt').value
    window.location.replace(`${urlTxt}`);
})


document.getElementById('promptBackgroundColorAndColor').addEventListener('click',()=>{
    const x = prompt('Enter Your Background Color')
    const y = prompt('Enter Your Text Color')
    document.body.style.backgroundColor = x
    document.body.style.color = y
})