const display=document.querySelector('.calculator-screen')
const zero=document.querySelector('.zero')
const one=document.querySelector('.one')
const two=document.querySelector('.two')
const three=document.querySelector('.three')
const four=document.querySelector('.four')
const five=document.querySelector('.five')
const six=document.querySelector('.six')
const seven=document.querySelector('.seven')
const eight=document.querySelector('.eight')
const nine=document.querySelector('.nine')
const percent=document.querySelector('.percent')
const decimal=document.querySelector('.decimal')
const plus=document.querySelector('.plus')
const minus=document.querySelector('.minus')
const times=document.querySelector('.times')
const square=document.querySelector('.square')
const divide=document.querySelector('.divide')
const result=document.querySelector('.result')
const clear=document.querySelector('.clear')
let num1=''
let num2=''
let x=0
let y=0
let arrnum
const arr=['+','-','*','/']
zero.addEventListener('click',()=>{
  num1+='0'
  display.value=num1
  })
one.addEventListener('click',()=>{
num1+='1'
display.value=num1
})
  two.addEventListener('click',()=>{
    num1+='2'
    display.value=num1
    })
    three.addEventListener('click',()=>{
      num1+='3'
      display.value=num1
      })
      four.addEventListener('click',()=>{
        num1+='4'
        display.value=num1
        })
        five.addEventListener('click',()=>{
          num1+='5'
          display.value=num1
          })
          six.addEventListener('click',()=>{
            num1+='6'
            display.value=num1
            })
            seven.addEventListener('click',()=>{
              num1+='7'
              display.value=num1
              })
              eight.addEventListener('click',()=>{
                num1+='8'
                display.value=num1
                })
                nine.addEventListener('click',()=>{
                  num1+='9'
                  display.value=num1
                  })
                  decimal.addEventListener('click',()=>{
                    num1+='.'
                    display.value=num1

                })

minus.addEventListener('click',()=>{
arrnum=1
    x=Number(num1)
display.value=''
num1=''

})
plus.addEventListener('click',()=>{
  arrnum=0
      x=Number(num1)
  display.value=''
  num1=''
  
  })
  times.addEventListener('click',()=>{
    arrnum=2
        x=Number(num1)
    display.value=''
    num1=''
    
    })
    divide.addEventListener('click',()=>{
      arrnum=3
          x=Number(num1)
      display.value=''
      num1=''
      
      })

      square.addEventListener('click',()=>{
        
            x=Number(num1)
        display.value=Math.sqrt(x)
        num1=''
        
        })
        percent.addEventListener('click',()=>{
         
              x=Number(num1)
          display.value=x/100
          num1=''
          
          })
         


result.addEventListener('click',()=>{
y=Number(num1)
if (arr[arrnum]=='-') {
    display.value=x-y
}
else if (arr[arrnum]=='+') {
  display.value=x+y
}
else if (arr[arrnum]=='/') {
  display.value=x/y
}
else {
  display.value=x*y
}
num2=''
num2=''
arrnum=undefined
x=0
y=0

})

clear.addEventListener('click',()=>{
  num1=''
num2=''
arrnum=undefined
x=0
y=0  
display.value=0
})
