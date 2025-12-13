/** List of good search queries to test with */
export const searchQueries = [
    "adapter","amp","amplifier","audio","cable","jack","microphone","plug","power","speaker","sound","stand","stereo","tool","wire"
]

/** Returns a string of random letters numbers and spaces */
export function randLetters(length=5):string {
    const keyboardChars = [
        ...range(48,57), // 0-9
        ...range(65,90), // A-Z
        ...range(97,122),// a-z
    ]
    const goodCharacters:any[] = [
        [32], // Space
        ...Array(5).fill(null).map(()=>[...keyboardChars]),
    ]
    const chars:string[] = []
    for(let i=0;i<length;i++) {
        const val = String.fromCharCode(randomFrom(randomFrom(goodCharacters)))
        chars.push(val)
    }
    return chars.join("")
}

/** Returns a string of random unicode characters */
export function randChars(length=5):string {
    const chars:string[] = []
    for (let i=0;i<length;i++) {
        const Numtostr = Math.floor(Math.random() * 2000);
        const val = String.fromCharCode(Numtostr)
        chars.push(val)
    }
    return chars.join("")
}

/** Returns an array counting from `start` to `stop` */
export function range(start:number, stop:number):number[] {
    const result:number[] = [];
    for(let i = start; i <= stop; i++) {
        result.push(i)
    }
    return result;
}

/** Returns randomized array */
export function shuffle<T>(array:T[]):T[] {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

/** Returns random value in `array` */
export function randomFrom<T>(array:T[]):T {
    return shuffle(array)[0]
}

/** Returns random `$element` in `$$elements` */
export async function random$From($$elements:ChainablePromiseArray, ops:{preferFirstHalf?:boolean}={}):Promise<ChainablePromiseElement> {
    const {preferFirstHalf=false} = ops;
    
    const length = await $$elements.length
    const arrayLength = preferFirstHalf ? Math.ceil(length/2) : length-1

    const randomVal = randomFrom(range(0, arrayLength))

    const $toReturn = $$elements[randomVal]
    return $toReturn
}

/** Returns `$element` that has text: `text` */
export function getElementByText(text:string, $base=$('body')) {
    const $element = $base.$(`//*[contains(text(),'${text}')]`)
    return $element
}

/** Returns score for starting character in given string `word`
 * 
 * `A` is lower, `Z` is higher */
export function charScore(word:string):number {
    const char = word.trim().toLowerCase()[0];
    if (!char) return 0;
    return char.charCodeAt(0);
}
