var text = document.getElementById('inputStack')
var btnAdd = document.getElementById('sadd')
var btnTake = document.getElementById('stake')
// var stackList = document.getElementById('stackList').children
var sempty = document.querySelectorAll('.sempty')
var stackData = new StackDataStructure;

btnAdd.onclick=(()=>{
  console.log(text)
  if(text.value){
    if(stackData.canPush()){
      stackData.push(text.value)
      document.querySelectorAll('.sempty')[document.querySelectorAll('.sempty').length-1].innerHTML = text.value
      document.querySelectorAll('.sempty')[document.querySelectorAll('.sempty').length-1].classList.toggle("sused")
      document.querySelectorAll('.sempty')[document.querySelectorAll('.sempty').length-1].classList.toggle("sempty")
      text.value = ""
    }
    if(document.querySelectorAll('.sused').length !== 0){
      document.getElementById('stackEmpty').setAttribute("class", "hide")
    }
    if(document.querySelectorAll('.sempty').length === 0){
      document.getElementById('stackFull').setAttribute("class","list-group-item alert")
    }
  }
})

btnTake.onclick=(()=>{
  if(!stackData.isEmpty()){
    console.log(document.querySelectorAll('.sused')[0])
    document.querySelectorAll('.sused')[0].innerHTML = 'EMPTY';
    document.querySelectorAll('.sused')[0].setAttribute("class", "list-group-item sempty")
    stackData.pop();
  }
  if(document.querySelectorAll('.sused').length !== stackData.MAX_SIZE){
    document.getElementById('stackFull').setAttribute("class","hide")
  }
  if(document.querySelectorAll('.sused').length === 0){
    document.getElementById('stackEmpty').setAttribute("class", "list-group-item alert")
  }

})
