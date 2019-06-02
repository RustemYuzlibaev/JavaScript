func = () => console.log('I can be invoked only once');

let once = (fn => {
    let called = false;

    return function() {
        if (!called) {
            called = true;
            fn();
        }
    };
})(func);

once(func);
once(func);
once(func);
