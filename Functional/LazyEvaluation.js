// Lazy evaluation is a strategy which delays the `evaluation`
// of an expression until its value is needed
// it avoids repeated `evaluations`

const lazyMemoMap = (arr, mapFunction) => {
    const memo = [];
    return {
        get: function(index) {
            if (memo[index]) return memo[index];
            const result = mapFunction(arr[index]);
            memo[index] = result;
            return result;
        },

        take: function(n) {
            return arr.slice(0, n).map(mapFunction);
        },

        value: function() {
            return arr.map(mapFunction);
        },
        getMemo: function() {
            return memo;
        },
    };
};

const lazyArray = lazyMemoMap([1, 2, 3, 4, 5], x => x * 2);
lazyArray.get(4);

lazyArray.getMemo(); // [ <4 empty items>, 10 ]
