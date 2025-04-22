let typeData = document.querySelector('.type')
let resultText = document.querySelector('.result')
const data = [
    "Python","Javascript","java","c","c++","html","css"
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
})

