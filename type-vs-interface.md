# Type Alias vs Interface in TypeScript: Core Differences and When to Use Them

In TypeScript, both `type` aliases and `interface` define custom types and help developers write maintainable, type-safe code. However, they have some important differences.

## 1. Core Differences

**Interface** is primarily used to describe the structure of objects and classes. It supports declaration merging, meaning multiple interfaces with the same name are automatically combined.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now requires both name and age.
```

**Type aliases** can represent more than object structures. They support unions, intersections, primitives, tuples, and function types.

```ts
type ID = string | number;

type Point = [number, number];

type Admin = {
  name: string;
  role: "admin";
};
```

Unlike interfaces, type aliases cannot be reopened through declaration merging. However, they can combine existing types using intersection (`&`).

Both support extension: interfaces use `extends`, while type aliases commonly use intersections.

## 2. When Should You Choose One?

Choose **interface** when defining object shapes, class contracts, or public APIs that may need declaration merging. It is especially useful for extensible object-oriented designs.

Choose **type** when working with union types, tuples, primitive aliases, mapped types, conditional types, or complex type compositions.

## Conclusion

Both are powerful tools, and neither is universally better. Use `interface` for extensible object structures and `type` for flexible type composition. Consistency within a project is also important for maintainability.