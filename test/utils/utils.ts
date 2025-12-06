

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const Int = Number;

export const customTimeout = 5000;

export const searchQueries = [
    "adapter","amp","amplifier","analog","audio","bluetooth","cable","case","cd","cleaner","DAC","digital","earbuds","headphones","interface","microphone","mixer","phono","player","portable","power","preamp","receiver","record","remote","speaker","sound","stage","stand","stream","tuner","turntable","vinyl","wire"
]


export function range(start:int, stop:int):int[] {
    const result:int[] = [];
    for(let i = start; i <= stop; i++) {
        result.push(i)
    }
    return result;
}

export function shuffle<T>(array:T[]):T[] {
    return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function pickRandomFrom<T>(array:T[]):T {
    return shuffle(array)[0]
}

