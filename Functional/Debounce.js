// A function that, when called, can only be called after
// a certain amount of time has passed

let debounce = (fn, ms) => {
    let timeout;
    return function(args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(args), ms);
    };
};

let onResize = event => {
    console.log(event, window.innerHeight, window.innerWidth);
};

window.addEventListener('resize', debounce(onResize, 500));
