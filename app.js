// #1

const filterOutOdds = (...arguments) => arguments.filter(val => val % 2 === 0);

// #2

const findMin = (...arguments) => Math.min(...arguments);

// #3

const mergeObjects = obj1, obj2 => ({ ...obj1, ...obj2 });

// #4

const doubleAndReturnArgs = (arr, ...arguments) => [...arr, arguments.map(val => val * 2)];

// #5

const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    let obj2 = { ...obj };
    obj2[key] = val;
    return obj2;
}

const removeKey = (obj, key) => {
    let obj2 = { ...obj };
    delete obj2[key];
    return obj2;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let obj2 = { ...obj };
    obj[key] = val;
    return obj2;
}