let typeData = document.querySelector('.type')
let resultText = document.querySelector('.result')

const data = [
    "Python","Javascript","Java","C","C++","HTML","CSS"
]
let result;
let resultAll=''
typeData.addEventListener('input',function(){
    resultText.style.display='flex'
    result = data.filter(e=>{
        return e.toLowerCase().includes(typeData.value.toLowerCase())
    })
    resultAll = ''
    result.forEach(e=>{
        resultAll += `<li>${e}</li>`
    })
    resultText.innerHTML=`${resultAll}`
    let list = document.querySelectorAll('li')
    list.forEach(e=>{
        e.addEventListener('click',function(){
           typeData.value = e.innerText
        })
    })
        
})

