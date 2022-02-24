const merge2String = (str1, str2) => {
    let res = '';
    const stop = str1.length > str2.length ? str2.length : str1.length;
    for (let i = 0; i < stop; i++) {
        res += str1[i] + str2[i];
    }
    stop === str1.length
        ? (res += str2.slice(stop))
        : (res += str1.slice(stop));
    return res;
};

console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcd', '123'));