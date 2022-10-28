const arrayOfButtons = document.querySelectorAll('.addCommentButton');

async function commentClickHandler(e){
    const text = e.target.previousElementSibling.value.trim();
    const id = e.target.getAttribute('data-postId');
    if(!text){
        alert("Enter a text to comment on post.")
    }else{
        let comment = {
            comment: text,
            post_id: id
        };

        let data = await fetch('/api/createcomment', {
            method: "POST",
            body: JSON.stringify(comment),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        if(data.ok){
            location.replace('/');
        }else{
            data = await data.json();
            alert(data);
        }
    }
};

arrayOfButtons.forEach((data) =>{
    data.addEventListener('click', commentClickHandler);

});