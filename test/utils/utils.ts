

export const _ = undefined;
export type bool = boolean;
export type int = number;
export type str = string;

export const Int = Number;

export const customTimeout = 5000;


// export function patchAllElementActions(dismissPopup) {
//     const proto = Object.getPrototypeOf(browser.$('body'))

// }
// export async function doSafe<T extends WebdriverIO.Element>(el: T) {
//     return new Proxy(el, {
//         get(target, prop) {
//             const value = target[prop];

//             if (typeof value === 'function') {
//                 return async (...args: any[]) => {
//                     await base.Popup.dismissPopupIfPresent();
//                     const result = await value.apply(target, args);
//                     await base.Popup.dismissPopupIfPresent();
//                     return result;
//                 };
//             }

//             return value;
//         }
//     });
//     for(const step of steps) {
//         await base.Popup.dismissPopupIfPresent()
//         await step()
//     }
//     await base.Popup.dismissPopupIfPresent()
// }

