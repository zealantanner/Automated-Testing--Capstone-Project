

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const Int = Number;

export const customTimeout = 5000;

export const searchQueries = [
    "adapter","amp","amplifier","audio","cable","jack","microphone","plug","power","speaker","sound","stand","stereo","tool","wire"
]
export const worseSearchQueries = [
    "adapter","amp","amplifier","audio","bluetooth","cable","case","cleaner","digital","headphones","jack","microphone","mixer","mono","phono","plug","portable","power","receiver","record","speaker","sound","stage","stand","stereo","stream","tool","turntable","wire"
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

export function getElementByText(text:str, $base=$('body')) {
    const $element = $base.$(`//*[contains(text(),'${text}')]`)
    return $element
}