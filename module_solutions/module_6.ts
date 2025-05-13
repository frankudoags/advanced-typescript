/**
 * 1. The infer Keyword Deep Dive
infer allows you to capture parts of a type into a name you can use later:
 */

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


type Args<T> = T extends (...args: infer A) => any ? A : never;
type Ret<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: string, y: number) => boolean;

type A6 = Args<Fn>; // [string, number]
type R6 = Ret<Fn>;  // boolean
