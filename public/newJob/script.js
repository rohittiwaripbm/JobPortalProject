let addButton = document.getElementById('addSkillBtn')

addButton.addEventListener('click',()=>{
    let divElement = document.createElement('div');
    divElement.classList.add("input-group", "my-2","newSkillClass")
    let inputElement = document.createElement('input');
    inputElement.type='text';
    inputElement.name = 'skillRequired';
    inputElement.className = 'form-control';
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.type = 'button';
    deleteButton.classList.add("btn", "btn-primary", "ms-2");
    deleteButton.addEventListener('click', (e)=>{
        e.target.offsetParent.remove();

    });
    divElement.appendChild(inputElement);
    divElement.appendChild(deleteButton);
    let skill = document.getElementById('skills');
    skill.appendChild(divElement);
    console.log(deleteButton.type);
    

});

let deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(element => {
    element.addEventListener('click',(e)=>
    {
        e.target.offsetParent.remove();
    })
});