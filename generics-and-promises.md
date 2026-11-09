# TypeScript Generics and Asynchronous Promise Responses

Generics are a powerful TypeScript feature that allows developers to create reusable, type-safe functions, interfaces, and classes without sacrificing type information. Instead of specifying a fixed data type, generics use type parameters such as `T`, which are determined when the code is used.

## 1. How Generics Work

A generic function accepts a type parameter and uses it to preserve the relationship between its input and output types.

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("TypeScript");
```

Here, `T` represents the type of the input. TypeScript can also infer the type automatically, so explicitly writing `<string>` is optional.

Generics are useful for creating reusable API response structures:

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

The same interface can represent different response data types without duplicating its structure.

## 2. Generics with Asynchronous Promises

In TypeScript, `Promise<T>` represents a promise that eventually fulfills with a value of type `T`. It helps maintain type safety when handling asynchronous operations.

```ts
async function getUser(): Promise<{ id: number; name: string }> {
  return { id: 1, name: "Probir" };
}
```

The return type guarantees that the fulfilled value follows the specified object structure. When using `.then()`, TypeScript also knows the resolved value's type.

An important detail is that `Promise<T>` describes the fulfilled value, not the rejection reason. JavaScript promises can reject with different values.

## Conclusion

Generics improve code reusability, flexibility, and type safety. Combined with `Promise<T>`, they make asynchronous API responses predictable and easier to maintain in TypeScript applications.