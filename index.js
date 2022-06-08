$ = (queryString) => document.querySelector(queryString);

const animate = () =>{
    $('a-sphere').setAttribute('color','blue');
    requestAnimationFrame(animate);
}


requestAnimationFrame(animate);