import * as cases from 'https://deno.land/x/case/mod.ts';
const text = 'hello my people';
const camel = cases.camelCase(text);
const param = cases.paramCase(text);
const pascal = cases.pascalCase(text);
const snake = cases.snakeCase(text);
console.log(camel, param, pascal, snake)