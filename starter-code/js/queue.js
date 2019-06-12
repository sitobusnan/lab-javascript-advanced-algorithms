var queueData = new QueueDataStructure;
var qtext = document.getElementById('inputQueue')
var qbtnAdd = document.getElementById('qadd')
var qbtnTake = document.getElementById('qtake')
var emptyElement = ""
var usedElement = ""

qbtnAdd.onclick=(()=>{
  
  if(qtext.value!==""){
    if(queueData.canEnqueue()){
      document.querySelectorAll('.qempty')[0].innerHTML = qtext.value
      document.querySelectorAll('.qempty')[0].classList.toggle("qused")
      document.querySelectorAll('.qempty')[0].classList.toggle("qempty")
      queueData.enqueue(qtext.value)
      qtext.value = ""
    }
    if(document.querySelectorAll('.qused').length !== 0){
      document.getElementById('queueEmpty').setAttribute("class", "hide")
    }
    if(document.querySelectorAll('.qempty').length === 0){
      document.getElementById('queueFull').setAttribute("class","list-group-item alert")
    }
  }
  console.log(queueData.queueControl)
})

qbtnTake.onclick=(()=>{
  if(!queueData.isEmpty()){
    queueData.dequeue();
    console.log(document.querySelectorAll('.q'))
    document.querySelectorAll('.q').forEach(element=>{
      element.remove()
    })
    queueData.queueControl.reverse().forEach(element=>{
      usedElement = document.createElement('li')
      usedElement.setAttribute('class', 'list-group-item qused q')
      usedElement.innerHTML = element;
      document.getElementById('queueList').appendChild(usedElement)
    })
    for (i = 0; i < queueData.MAX_SIZE - queueData.queueControl.length; i++) {
      emptyElement = document.createElement('li')
      emptyElement.setAttribute('class', 'list-group-item qempty q')
      emptyElement.innerHTML = "EMPTY"
      document.getElementById('queueList').append(emptyElement)
    }
  }
  if(queueData.queueControl.length !== stackData.MAX_SIZE){
    document.getElementById('queueFull').setAttribute("class","hide")
  }
  if(queueData.queueControl.length === 0){
    document.getElementById('queueEmpty').setAttribute("class", "list-group-item alert")
  }
})
