

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const Int = Number;

export const customTimeout = 5000;

export const searchQueries = [
    "adapter","amp","amplifier","audio","cable","jack","microphone","plug","power","speaker","sound","stand","stereo","tool","wire"
]

export const randLetters = (length = 5):str => Math.random().toString(36).slice(2, 2+length)

export function randChars(length = 5):str {
    const chars:str[] = []
    for (let i = 0; i < length; i++) {
        const Numtostr = Math.floor(Math.random() * 2000);
        const val = String.fromCharCode(Numtostr)
        chars.push(val)
    }
    return chars.join("")
}

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

/** waits to stop loading */
export async function waitForLoad() {
    const $loadingIcon = $('#loadingIndicator')
    await $loadingIcon.waitForDisplayed({reverse:true})
    // await this.loadingIcon.waitForExist({reverse:true})
}
