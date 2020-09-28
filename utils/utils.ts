export function getSeriesOf<T>(builder: () => T, max: number): T[] {
    const results = [];
    const count = max;
    for (let index = 0; index < count; index++) {
        results.push(builder());
    }
    return results;
};

export function getRandomIndex(array: Array<object>) {
    return Math.floor(Math.random() * array.length)

};