(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then((json)=>{
  json.forEach(function(data) {

    let article=document.createElement("article");
    let post={
      title: data.title,
      body: data.body,
      id:data.id
    }
    let contents=`${post.title}
                  ${post.body}
                  ${post.id}`
let node=document.createTextNode(contents);
article.appendChild(node);
document.body.appendChild(article);
  });

})

/*  if(window.attachEvent) {
    window.attachEvent('onload', callapi);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            callapi(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = callapi;
    }
}
function callapi(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

}*/
  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
})(window);
