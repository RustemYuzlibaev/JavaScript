// The benefit of partial application is our ability to delay the evaluation of a function
// while supplying some of the arguments to be used on the next call,
// whereas traditional function calls require all the arguments to be present at the same time

const getFromAPI = baseURL => endpoint => cb =>
    fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.error(err.message));

const getGithub = getFromAPI('https://api.github.com');

const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

getGithubUsers(data => {
    console.log(data.map(user => user.login));
});

getGithubUsers(data => {
    console.log(data.map(user => user.avatar_url));
});

// Partial application
const partial = (f, ...argList1) => (...argList2) =>
    f(...argList1, ...argList2);

const volume = (a, b, c) => a * b * c;

console.log('partial', partial(volume, 2, 3)(4));
console.log('partial', partial(volume, 2)(3, 4));
console.log('partial', partial(volume)(2, 3, 4));
console.log('partial', partial(volume, 2, 3, 4)());
