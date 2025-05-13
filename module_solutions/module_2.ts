export type CapitalizeKeys<T> = {
    [K in keyof T as Capitalize<string & K>]: T[K];
}
type TUser = {
    name: string;
    age: number;
}
type CapitalizedUser = CapitalizeKeys<TUser>;
// Result: { Name: string; Age: string }

export type OmitByValue<T, V> = {
    [K in keyof T as T[K] extends V ? never : K]: T[K];
}
type OmittedUser = OmitByValue<TUser, string>;
// Result: { age: number; }


export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type DeepPrettify<T> = T extends object
    ? T extends Function
    ? T
    : Prettify<{ [K in keyof T]: DeepPrettify<T[K]> }>
    : T;


//Module 2: TypeScript Basics - Mapped Types
// Mapped types are a powerful feature in TypeScript that allow you to create new types by transforming existing ones.

type User = {
    name: string;
    age: number;
}

type Keys = keyof User; // "name" | "age"

type MappedUser = {
    [K in Keys]: User[K]; // loops over keys "name" and "age"
}
/**
 * {
 *  name: string;
 * age: number;
 *  }
 */

type MappedGeneric<T> = {
    [K in keyof T]: T[K];
}

type MappedUserGeneric = MappedGeneric<User>;
/**
 * {
 * name: string;
 * age: number;
 * }
 * 
 * MappedUserGeneric is equivalent to MappedUser because we passed User as a type argument to MappedGeneric.
 */
