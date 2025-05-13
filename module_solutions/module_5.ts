type Pair = [number, string]; // tuple
type NumArray = number[]; // array

type T = [1, 2, 3];
type Len = T['length']; // 3 ✅
type First = T[0]; // 1 ✅
type Second = T[1]; // 2 ✅
type Third = T[2]; // 3 ✅

type Length<T extends readonly unknown[]> = T['length'];
type Len123 = Length<[1, 2, 3]>; // 3


//assignments

type Zip<A extends any[], B extends any[]> =
    A extends [infer FirstA, ...infer RestA]
        ? B extends [infer FirstB, ...infer RestB]
            ? [[FirstA, FirstB], ...Zip<RestA, RestB>]
            : []
    : [];
type Zipped = Zip<[1, 2, 3], ['a', 'b', 'c']>; // [[1, 'a'], [2, 'b'], [3, 'c']]

type FlattenTuple<T extends any[]> =
    T extends [infer First, ...infer Rest]
    ? First extends any[]
    ? [...FlattenTuple<First>, ...FlattenTuple<Rest>]
    : [First, ...FlattenTuple<Rest>]
    : [];

type Flattened = FlattenTuple<[1, 2, [3, 4], 5]>; // [1, 2, 3, 4, 5]

type Head5<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail5<T extends any[]> = T extends [any, ...infer R] ? R : never;

type H5 = Head5<[1, 2, 3]>; // 1
type T5 = Tail5<[1, 2, 3]>; // [2, 3]

//bonus
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
type Init<T extends any[]> = T extends [...infer I, any] ? I : never;

type L5 = Last<[1, 2, 3]>; // 3
type I5 = Init<[1, 2, 3]>; // [1, 2]


//csv row practice
type ToObject<T extends [PropertyKey, any][]> = {
    [P in T[number] as P[0]]: P[1];
}

type CSVObject<Keys extends any[], Values extends any[]> =
    ToObject<Zip<Keys, Values>>;

type CSVHeaders = ['name', 'age', 'isAdmin'];
type CSVSchema = [string, number, boolean];

type Row = CSVObject<CSVHeaders, CSVSchema>;
/*
  {
    name: string;
    age: number;
    isAdmin: boolean;
  }
*/
