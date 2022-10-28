const form = document.getElementById('form');

async function formHandler(e){
    e.preventDefault();
    let obj = {};
    obj.post_title = document.getElementById('title').value.trim();
    obj.post_message = document.getElementById('txtArea').value.trim();

    let data = await fetch('/api/createpost', {
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
        method: 'POST'
    })

    if(data.ok){
        location.replace('/dashboard');
    }else{
        data = await data.json();
        alert(data);
    }
};

form.addEventListener('submit', formHandler)