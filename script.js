

const myStorage = window.localStorage
let myWeights =[]
let myDates = []
if (myStorage.getItem('weights')){ 
    myWeights = JSON.parse(myStorage.getItem('weights'))
    myDates = JSON.parse(myStorage.getItem('dates'))
} else {
    myWeights =[]
    myDates=[]
}


function addWeight(){
        const currentWeight = prompt('weight?')
        const date = new Date();
        const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
        const dateString = `${day}/${Number(month)+1}/${year}`
        myWeights.push(currentWeight)
        myDates.push(dateString)
    updateDisplay()


}
function updateDisplay(){
    contentContainer.innerHTML=''

    myWeights.forEach((weight,index) => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        let weightDiv=document.createElement('div')
        weightDiv.innerText= myWeights[index];
        cardDiv.appendChild(weightDiv) 
        let dateDiv =document.createElement('div')
        dateDiv.innerText= myDates[index];
        cardDiv.appendChild(dateDiv)
        contentContainer.appendChild(cardDiv)
    })
    myStorage.setItem('weights',JSON.stringify(myWeights))
    myStorage.setItem('dates',JSON.stringify(myDates))
}



contentContainer = document.querySelector('.contentContainer')
document.querySelector('.addButton').addEventListener('click',addWeight)
updateDisplay()