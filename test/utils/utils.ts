

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const Int = Number;

export const customTimeout = 5000;


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

