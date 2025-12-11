

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const customTimeout = 5000;

export const searchQueries = [
    "adapter","amp","amplifier","audio","cable","jack","microphone","plug","power","speaker","sound","stand","stereo","tool","wire"
]

export function randLetters(length=5):str {
    const keyboardChars = [
        ...range(48,57), // 0-9
        ...range(65,90), // A-Z
        ...range(97,122),// a-z
    ]
    const goodCharacters:any[] = [
        [32], // Space
        ...Array(5).fill(null).map(()=>[...keyboardChars]),
    ]
    const chars:str[] = []
    for(let i=0;i<length;i++) {
        const val = String.fromCharCode(pickRandomFrom(pickRandomFrom(goodCharacters)))
        chars.push(val)
    }
    return chars.join("")
}


export function randChars(length=5):str {
    const chars:str[] = []
    for (let i=0;i<length;i++) {
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
export async function pickRandom$From($$elements:ChainablePromiseArray):Promise<ChainablePromiseElement> {
    const randomVal = shuffle(range(0, await $$elements.length - 1))[0]
    const $toReturn = $$elements[randomVal]
    return $toReturn
}

export function getElementByText(text:str, $base=$('body')) {
    const $element = $base.$(`//*[contains(text(),'${text}')]`)
    return $element
}

export function charScore(word:str):number {
    const char = word.trim().toLowerCase()[0];
    if (!char) return 0;
    return char.charCodeAt(0);
}