async function clickHandler (){
    let data = await fetch(`/api/logout`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    if(data.ok){
        location.replace(`/`);
    }else{
        data = await data.json();
        alert(data);
    };
};

document.getElementById(`logout`).addEventListener(`click`, clickHandler)