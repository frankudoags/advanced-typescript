type CapitalizeKeys<T> = {
    [K in keyof T as Capitalize<string & K>]: T[K]
}

type DeepReadOnly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadOnly<T[K]> : T[K];
}

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

type DeepPrettify<T> = T extends object
    ? T extends Function
        ? T
        : Prettify<{ [K in keyof T]: DeepPrettify<T[K]> }>
    : T;

type Promisify<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => infer R
        ? (...args: any[]) => Promise<R>
            : T[K] extends object
            ? Promisify<T[K]>
        : T[K]
}

type API = {
    getUser(): string
    config: {
        reload(): boolean;
        inner: {
            getName(): string;
            internal: {
                getId(): number;
            }
        }
    }
}

type PromiseAPI = DeepPrettify<Promisify<API>>;


type Flatten<T, P extends string = ''> = {
    [K in keyof T]: T[K] extends object
    ? Flatten<T[K], `${P}${K & string}.`>
    : { [Key in `${P}${K & string}`]: T[K] }
}[keyof T]

type Merge<T> = {
    [K in keyof T]: T[K]
}

type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

type Input = {
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

type Output = Merge<UnionToIntersection<Flatten<Input>>>;

type PartialDeep<T> = {
    [K in keyof T]?: T[K] extends object
    ? PartialDeep<T[K]>
    : T[K];
}

type Test = {
    name: number;
    company: {
        name: number;
        address: string;
    }
}

type PartialTest = Partial<Test>;
type PartialDeepTest = DeepPrettify<PartialDeep<Test>>;
