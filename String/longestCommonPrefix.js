const str = ['apple','apply','appartment'];

function longestCommonPrefix(strings) {
    let prefix = "";
    //let minLength = Math.min(...strings.map(s => s.length));
    let minLength = strings[0].length
    for (let i = 0; i < minLength; i++) {
        let char = strings[0][i];
        //console.log(strings[0].length)
        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}
let value = longestCommonPrefix(str);
console.log(value)