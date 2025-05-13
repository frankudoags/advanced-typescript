# Advanced TypeScript Mastery Course

## 📘 Overview
This course will take you from a solid understanding of TypeScript fundamentals to expert-level mastery of the type system. You'll gain the skills to write complex type-safe utilities, understand and manipulate TypeScript's advanced features, and apply them to real-world problems.

---

## 🧱 Module 1: Foundations Recap

### Topics:
- TypeScript's type system: `any`, `unknown`, `never`
- Literal types & inference
- Type assertions and `as const`
- Basic generics and object typing

### Assignment:
- Reimplement `Partial<T>`, `Readonly<T>`, `Required<T>`
- Compare `any` vs `unknown`
- Understand type widening

---

## 🔁 Module 2: Mapped Types

### Topics:
- `keyof`, `in`, and indexed access types
- Remapping keys with `as`
- Optional (`?`) and readonly (`readonly`) modifiers
- Removing modifiers: `-?`, `-readonly`

### Assignment:
- Build `CapitalizeKeys<T>`
- Build `OmitByValue<T, V>`
- Build `PartialDeep<T>` and `Prettify<T>`

---

## 🧠 Module 3: Conditional & Recursive Types

### Topics:
- `T extends U ? A : B` logic
- Distributive conditional types
- Deep recursion and conditional inference
- Preventing unintended distribution

### Assignment:
- Write a type-safe deep flattening utility
- Build a `DeepReadonly<T>`
- Convert `CamelCase` to `snake_case`

---

## 🧵 Module 4: Template Literal Types

### Topics:
- String manipulation with template literals
- `Capitalize`, `Uncapitalize`, `Uppercase`, `Lowercase`
- Inferring substrings (`infer` inside templates)

### Assignment:
- `Split<'a.b.c'>` → `['a', 'b', 'c']`
- `Path<T>` → all possible dot paths in object `T`
- `Join<['a', 'b', 'c'], '.'>` → `'a.b.c'`

---

## 🧮 Module 5: Tuples and Arrays

### Topics:
- Tuples vs arrays
- Length inference and manipulation
- Variadic tuple types
- Recursive tuple operations

### Assignment:
- Zip tuples: `Zip<[1, 2], ['a', 'b']>` → `[[1, 'a'], [2, 'b']]`
- Build `Flatten<T[]>`
- Extract tail/head from tuples

---

## 🧪 Module 6: Advanced Inference

### Topics:
- `infer` keyword deep dive
- Function type inference (args and return)
- Inference within mapped and conditional types

### Assignment:
- Build a `Pipe<T>` and `Compose<T>` utility
- Extract arguments and return types from overloaded functions
- Implement `First<T>`, `Last<T>` for tuples

---

## 🛠 Module 7: Utility Types in Depth

### Topics:
- Internals of `Omit`, `Pick`, `ReturnType`, `InstanceType`
- Recreate all built-in utility types
- Custom utilities for common patterns

### Assignment:
- `UnionToIntersection<T>`
- `Mutable<T>`
- `OptionalKeys<T>` vs `RequiredKeys<T>`

---

## 🌐 Module 8: Real-World Use Cases

### Topics:
- Typing REST/GraphQL responses
- Inference from schema validators (e.g., Zod, Yup)
- Mapping DTOs, client contracts, and form builders

### Assignment:
- Build a type-safe API client for REST
- Model GraphQL queries with exact result types
- Generate Zod schemas from types

---

## 🧩 Module 9: Type Challenges Practice

### Topics:
- Solving problems from [type-challenges](https://github.com/type-challenges/type-challenges)
- Reviewing clever and advanced community solutions

### Capstone Assignment:
- Solve at least 5 of:
  - `Permutation<T>`
  - `FlattenDepth<T>`
  - `StringToUnion<T>`
  - `ParseQueryString<T>`
  - `JSONParser<T>`

---

## 🔀 Bonus: Runtime + Compile-Time Bridging

### Topics:
- Zod / io-ts / valibot integration
- Schema-driven type systems
- Bidirectional runtime ↔ type safety

### Assignment:
- Build a validator + UI form using Zod
- Generate types from API response at runtime

---

## 📌 Final Thoughts
By completing this course, you will:
- Understand TypeScript's type system at an advanced level
- Create custom types and utilities for deep type transformations
- Confidently type APIs, data models, and UI logic with precision

Track your progress using this Markdown and update as you learn!