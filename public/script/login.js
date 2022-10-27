const $form =  document.getElementById(`form`);

async function formHandler (e) {
    e.preventDefault();
    let obj = {};
    obj.password  = document.getElementById(`password`).value.trim();
    obj.username  = document.getElementById(`username`).value.trim();

    let data = await fetch(`/api/login`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    });
    if(data.ok){
        location.replace(`/`);
    } else {
        data = await data.json();
        console.log(data);
        alert(data)
    }
};

$form.addEventListener(`submit`, formHandler)