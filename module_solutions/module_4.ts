type Greeting<T extends string> = `Hello ${T}`;

type A = Greeting<'World'>; // "Hello World"

type Route<T extends string> = `/api/${T}/data`
type UserRoute = Route<'user'>; // "/api/user/data"

type B = Capitalize<'world'>; // 'World'
type C = Uncapitalize<'Hello'>; // 'hello'
type D = Uppercase<'hello'>; // 'HELLO'
type E = Lowercase<'HELLO'>; // 'hello'

type Head<T extends string> = T extends `${infer H}${infer _}` ? H : never;
type Tail<T extends string> = T extends `${infer _}${infer T}` ? T : never;

type F = Head<'Hello'>; // 'H'
type G = Tail<'Hello'>; // 'ello'
type H = Tail<'h'>; // ? never
type I = Head<''>; // ? never

// asignments

type Split<T extends string, D extends string> =
    T extends `${infer A}${D}${infer B}`
    ? [A, ...Split<B, D>]
    : [T];

type J = Split<'a.b.c', '.'>; // ['a', 'b', 'c']
type K = Split<'a.b.c', ','>; // ['a.b.c']

type Join<T extends string[], D extends string> =
    T extends [infer F extends string, ...infer R extends string[]]
    ? R extends []
        ? F
        : `${F}${D}${Join<R, D>}`
    : '';
type L = Join<['a', 'b', 'c'], '.'>; // 'a.b.c'
type M = Join<['a', 'b', 'c'], ', '>; // 'a, b, c'


type Path<T extends object, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends object
    ? `${Prefix}${K & string}` | Path<T[K], `${Prefix}${K & string}.`>
    : `${Prefix}${K & string}`
}[keyof T];

// Usage:
type Obj = {
    user: {
        profile: {
            age: number;
        };
        name: string;
    };
    id: string;
};


type Keys = DeepPrettify<Path<Obj>>;
// "user" | "user.profile" | "user.profile.age" | "user.name" | "id"
