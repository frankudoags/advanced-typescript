export type MyPartial<T> = {
    [K in keyof T]?: T[K];
}

export type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
}

export type MyRequired<T> = {
    // the - in front of -? basically removes the optional modifier if it exists
    [K in keyof T]-?: T[K];
}