export function sum(a: number, b: number): number {
    return a+ b;
}

export function divide(a: number, b: number): number {
    if (b !== 0) {
        return a / b;
    }
    throw new Error("zero_division")
}
