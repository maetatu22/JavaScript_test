window.addEventListener('load', () => {

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document. querySelectorAll(".pull-down-list")

  pullDownButton.addEventListener('mouseover', function()  {
    this.setAttribute("style", "background-color:#FFBEDA;")
  })
  
  pullDownButton.addEventListener('mouseout',  function()  {
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click',  function()  {
    if (pullDownParents.getAttribute("style") == "display: block;"){
      pullDownParents.removeAttribute("style", "display: block;")
    }else{
      pullDownParents.setAttribute("style", "display: block;")
    }
  })

  pullDownChild.forEach((list) => {
    list.addEventListener('click', () => {
      value = list.innerHTML
      console.log(value)
    })
  })
})