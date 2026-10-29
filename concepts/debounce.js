

// debounce implementation
function customDebounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

// leading debounce
function leadingDebounce(fn, delay, immediate = false) {
    let timer;

    
}