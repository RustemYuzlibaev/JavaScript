function Clients() {
    this.cache = {};
}

Clients.prototype.lookup = function(client) {
    if (this.cache.hasOwnProperty(client)) {
        console.log(`Returning ${client} form cache`);
    } else {
        this.cache[client] = client;
        console.log(`Added ${client} to the memory in db`);
    }
};

var client1 = new Clients();
client1.lookup('value'); // Added value to the memory in db
client1.lookup('value'); // Returning value form cache

// ******************************************************** //

// Functional-level caching
function slowFun(n) {
    let x = 2;
    let y = 3;
    let z = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            z = x * y;
        }
    }
    return z + n;
}

function memorizer(fun) {
    let cache = [];
    return function(idx) {
        if (cache[idx] === undefined) {
            cache[idx] = fun(idx);
        }

        return cache[idx];
    };
}

let mem_slowFun = memorizer(slowFun);

mem_slowFun(100000); // first call
mem_slowFun(100000); // second call (carry it through faster)

// other implementations
const memo = f => {
    let memoMap = new Map();

    return fArg => {
        memoMap.has(fArg)
            ? memoMap.get(fArg)
            : memoMap.set(fArg, f(fArg)).get(fArg);
    };
};
