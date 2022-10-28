const arrayOfButtons = document.querySelectorAll('.addCommentButton');

function commentClickHandler(e){
    const text = e.target.previousElementSibling.value.trim();
    
};

arrayOfButtons.forEach((data) =>{
    data.addEventListener('click', commentClickHandler);
});