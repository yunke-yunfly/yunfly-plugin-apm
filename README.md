# @yunflyjs/yunfly-plugin-apm

yunfly apm plugin.

## Usage

1. install

```bash
yarn add @yunflyjs/yunfly-plugin-apm
```

2. declare plugins in **config/config.plugin.ts**

```ts
/**
 * yunfly plugin
 */
const plugins: {[key:string]: string}[] = [
  {
    name: 'jwt',
    package: '@yunflyjs/yunfly-plugin-apm'
  }
];
// 
export default plugins;
```

3. enable plugins in **config/config.default.ts**


```js
config.apm = {
  active: true,
}
```

- complete parameters：https://www.elastic.co/guide/en/apm/agent/nodejs/current/configuration.html

## api

- getApm

get apm object.

## Contribution

Contributions are extremely welcomed by our team, you can contribute to this repository by several ways below.

- Submit [GitHub Issue](https://github.com/yunke-yunfly/yunflyjs/issues) to report errors or ask questions
- Create [Pull Request](https://github.com/yunke-yunfly/yunflyjs/pulls) to improve our code
- [Contribution guide](./CONTRIBUTING.md)
