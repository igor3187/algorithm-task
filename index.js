function fn(sequence) {
    sequence = sequence.split(" ").map(char => parseInt(char));
    const tempArray = new Array(sequence.length).fill(null);

    let currElIdx = 0;
    let nextElIdx = 1;

    const sequences = [];
    let temp = new Array(sequence.length).fill(null);
    while (nextElIdx < sequence.length) {
        sequence.forEach((v, i, a) => {
            const index = i + 1;
            if (
                sequence[currElIdx] < sequence[index] &&
                temp.every(v => sequence[currElIdx] > v) &&
                i !== nextElIdx - 1
            ) {
                tempArray[currElIdx] = sequence[currElIdx];
                temp[currElIdx] = sequence[currElIdx];
                currElIdx = index;
            } else {
                if (currElIdx <= 1 || i === nextElIdx - 1) {
                    currElIdx++;
                }
            }
            if (i === sequence.length - 1) {
                if (temp.every(v => sequence[currElIdx] > v)) {
                    temp[currElIdx] = sequence[currElIdx];
                }
                sequences.push(temp);
                temp = new Array(sequence.length).fill(null);
                currElIdx = 0;
            }
        });
        nextElIdx += 1;
    }
    let result = [];
    sequences
        .map(s => s.filter(v => v !== null))
        .forEach(s => {
            if (s.length > result.length) {
                result = s;
            }
        });
    return result.join(" ");
}

const string = "9 3 1 3 10";
const string2 = "9 3 7 4 6 9 3 13 5 0";
const string3 = "5 1 8 10 5 2 14 17 19 7 9 29";

console.log(fn(string)); // 1 3 10
console.log(fn(string2)); // 3 4 6 9 13
console.log(fn(string3)); // 1 8 10 14 17 19 29


