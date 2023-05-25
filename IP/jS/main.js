const accoritems = document.querySelectorAll(".accordion-icon")

const accContents = document.querySelectorAll(".accordion-body")

accoritems.forEach(accoritem => {   
    accoritem.addEventListener('click',(e)=>
    {
        accoritem.classList.toggle('active')
    })
})

const accordion = document.getElementsByClassName('contentBx')
for (i=0;i<accordion.length;i++)
{
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

let activemenu=document.querySelector('.navbar-collapse')
let openbtn=document.querySelector('.btn-open')
let exitbtn=document.querySelector('.btn-exit')
let over = document.querySelector("#overlay")

openbtn.addEventListener('click',(e) =>
{
    activemenu.classList.toggle('active')
    over.classList.toggle("show")
    openbtn.classList.add('none')
    exitbtn.classList.add('show')
    console.log(1)
})

exitbtn.addEventListener('click',(e) =>
{
    document.getElementById('overlay').style.display="none"
    activemenu.classList.toggle('active')
    openbtn.classList.remove('none')
    exitbtn.classList.remove('show')
    console.log(0)
})
