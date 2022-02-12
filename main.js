const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-frilance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2'),

      costFlat = document.getElementById('costs-flat'),
      costHouseServices = document.getElementById('costs-house-servisces'),
      costTransport = document.getElementById('costs-transport'),
      costCredit = document.getElementById('costs-credit'),

      totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year')

let totalDay, totalMonth, totalYear;

const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation')
      totalSpend = document.getElementById('spend')

let accumulation = 0
let totalPresents = 0


const inputs = document.querySelectorAll('.input')



for (input of inputs){
    input.addEventListener('input', () => {
    accumulationMoney()
    countingSpend()
    })
}




const countingAviableMoney = () => {
    const totalPerMonth = incomeSalary.value*1 + incomeFreelance.value*1 + incomeExtra1.value*1 + incomeExtra2.value*1
    const totalCosts = costFlat.value*1 + costHouseServices.value*1 + costTransport.value*1 + costCredit.value*1
    totalMonth = totalPerMonth - totalCosts
    totalMonthInput.value = totalMonth
}


moneyBoxRange.addEventListener('input', e =>{
    const totalPresentsEl = document.querySelector('#total-precents')
    totalPresentsEl.textContent = e.target.value
    accumulationMoney()
    countingSpend()
})



const accumulationMoney = () =>{
    accumulation = (totalMonth*totalPresents / 100).toFixed()
   accumulationInput.value = accumulation
}

const countingSpend = () =>{
    totalSpend.value = totalMonth - accumulation
    totalDayInput.value = (totalSpend.value/30).toFixed()
    totalYearInput.value = accumulation*12
}