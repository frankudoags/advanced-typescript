


//  Basic Conditional Types
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<123>;     // false


//  Distributive Conditional Types
// When T is a union, TypeScript distributes conditionals:

type ToString<T> = T extends number ? `${T}` : never;

type U = ToString<1 | 2 | "a">; // "1" | "2"

// If you don’t want distribution, wrap T in a tuple:

type NoDistribute<T> = [T] extends [number] ? 'yes' : 'no';

type C = NoDistribute<1 | 'a'>; // 'no'

// Recursive Conditional Types
// You can recurse by calling the same type within itself:

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};
type Nested = {
    a: {
        b: {
            c: number;
        };
    };
};

type ReadonlyNested = DeepPrettify<DeepReadonly<Nested>>;
//result: 
// {
//     readonly a: {    
//         readonly b: {
//             readonly c: number;
//     };
// };
// };


// Conditional types can also be used with functions:
type IsStringFunction<T> = T extends (arg: infer U) => any
    ? U extends string
    ? true
    : false
    : false;
type E = IsStringFunction<(arg: string) => void>; // true
type F = IsStringFunction<(arg: number) => void>; // false
type G = IsStringFunction<() => void>; // false

//  Conditional Types with Generics
// You can use generics to create more flexible conditional types:
type IsType<T, U> = T extends U ? true : false;
type H = IsType<string, string>; // true
type I = IsType<string, number>; // false

//  Conditional Types with Mapped Types
// You can use conditional types within mapped types to create more complex types:
type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type Base = { a: string; b: number; c: string };

type J = Filter<Base, string>; // "a" | "c"
type K = Filter<Base, number>; // "b"

//  Conditional Types with Indexed Access Types
// You can use conditional types with indexed access types to create more complex types:
type GetType<T, K extends keyof T> = T[K] extends infer U ? U : never;
type L = GetType<{ a: string; b: number }, 'a'>; // string
type M = GetType<{ a: string; b: number }, 'b'>; // number



// Exercises
/**
 * 
- Write a type-safe deep flattening utility
- Build a `DeepReadonly<T>`
- Convert `CamelCase` to `snake_case`
- Convert `snake_case` to `CamelCase`
 */

export type Flatten<T, P extends string = ''> = {
    [K in keyof T]: T[K] extends object
    ? Flatten<T[K], `${P}${K & string}.`>
    : { [Key in `${P}${K & string}`]: T[K] }
}[keyof T]

export type Merge<T> = {
    [K in keyof T]: T[K]
}

export type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

export type Input = {
    name: string
    user: {
        profile: {
            age: number
        }
    },
    brother: {
        age: number
    }
}

export type Output = DeepPrettify<Merge<UnionToIntersection<Flatten<Input>>>>;
/**
 * type Output = {
    name: string;
    "user.profile.age": number;
    "brother.age": number;
}
 */

type SnakeCase<T extends string> =
    T extends `${infer Head}${infer Tail}`
    ? Tail extends Uncapitalize<Tail>
    ? `${Lowercase<Head>}${SnakeCase<Tail>}`
    : `${Lowercase<Head>}_${SnakeCase<Tail>}`
    : T;

type GreetingSnake = SnakeCase<'HelloWorld'>; // "hello_world"

type SnakeCaseObject<T> = {
    [K in keyof T as K extends string ? SnakeCase<K> : K]: T[K] extends object
    ? SnakeCaseObject<T[K]>
    : T[K];
};
type SnakeCaseUser = DeepPrettify<
    SnakeCaseObject<{
        firstName: string;
        lastName: string;
        address: {
            cityDetails: string;
            stateInfo: string;
        };
    }>>;
/**
 * type SnakeCaseUser = {
    first_name: string;
    last_name: string;
    address: {
        city_details: string;
        state_info: string;
    };
}
 */



type CamelCase<T extends string> =
    T extends `${infer Head}_${infer Tail}`
    ? `${Capitalize<Head>}${Capitalize<CamelCase<Tail>>}`
    : T;

type GreetingCamel = CamelCase<'hello_world'>; // "HelloWorld"