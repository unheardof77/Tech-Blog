const editButtons = document.querySelectorAll('.postEditButton');

async function editSubmitHandler(e){
    e.preventDefault();

    let obj ={};

    obj.post_title = document.getElementById('titleEdit').value.trim();
    obj.post_message = document.getElementById('message').value.trim();
    obj.post_id = document.getElementById('submitEditButtonJJ').getAttribute('data-id');

    let data = await fetch('/api/updatepost', {
        method: "PUT",
        body: JSON.stringify(obj),
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(data.ok){
        location.replace('/dashboard');
    }else{
        data = await data.json();
        alert(data)
    }
};

function editClickHandler(e){
    const id = e.target.getAttribute('data-id');
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    const title = document.createElement('input');
    const message = document.createElement('textarea');
    const submitButton = document.createElement('button');
    console.log(id);
    form.setAttribute('id', 'editForm');
    h2.textContent = "Editing post";
    title.setAttribute('id', 'titleEdit');
    message.setAttribute('rows', 5)
    message.setAttribute('id', 'message');
    submitButton.setAttribute('data-id', `${id}`);
    submitButton.textContent = "Submit Post Edits";
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submitEditButtonJJ');

    e.target.parentNode.appendChild(form);
    form.appendChild(h2);
    form.appendChild(title);
    form.appendChild(message);
    form.appendChild(submitButton);
    document.getElementById('editForm').addEventListener('submit', editSubmitHandler)
};

editButtons.forEach((data) =>{
    data.addEventListener('click', editClickHandler);
});