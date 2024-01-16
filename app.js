// let btn = document.querySelector("i");
// btn.addEventListener("click", () => {
//     let inp = document.querySelector("#input");
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     let ul = document.querySelector("ul");
//     ul.appendChild(item);
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     item.appendChild(delBtn);
//     delBtn.classList.add("delete");

//     const delBtns = document.querySelectorAll(".delete");
//     delBtns.forEach((Element)=>{
//         Element.addEventListener('click',()=>{
//             Element.parentElement.style.display='none';
//         })
//     })
// });
// const delBtns = document.querySelectorAll(".delete");
// delBtns.forEach((Element)=>{
//     Element.addEventListener('click',()=>{
//         Element.parentElement.style.display='none';
//     })
// });
let btn=document.querySelector("i");
btn.addEventListener("click",()=>{
    let inp=document.querySelector("#input");
    if(inp.value!="")
    {
        let newTask=document.createElement("li");
        newTask.innerText=inp.value;
        let ul=document.querySelector("ul")
        ul.appendChild(newTask);
        // console.log(ul,newTask);
       const delBtn=document.createElement("i");
       newTask.appendChild(delBtn);
       delBtn.classList.add("fa-solid");
       delBtn.classList.add("fa-trash");
       delBtn.style.color ="#ffff"
       delBtn.addEventListener("click",()=>{
        newTask.remove();
       })
    }
})
