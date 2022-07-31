@flexcodelabs/input

[![npm](https://img.shields.io/npm/v/@flexcodelabs/input)](https://www.npmjs.com/package/@flexcodelabs/input) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/input)](https://www.npmjs.com/package/@flexcodelabs/input)

[Package Name](#@flexcodelabs/input)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)

## Features

- List of features

## Installation

`npm install @flexcodelabs/input`

or

`yarn add @flexcodelabs/input`

## Usage

```js
...
import Input from '@flexcodelabs/input';

// Normal input
<Input
  label="Label"
  value={email}
  name="email"
  onChange={onChange}
  placeholder="Label"
/>

// password input
<Input
  label="Password"
  value={password}
  type="password"
  name="password"
  onChange={onChange}
  placeholder="********"
/>

// textarea
<Input
  label="Your Message"
  textarea
  value={message}
  handleChange={onChange}
  name="message"
/>

// Input with error message
<Input
  label="Label"
  value={email}
  name="email"
  onChange={onChange}
  placeholder="Label"
  error="Error message"
/>

// Input with success message
<Input
  label="Label"
  value={email}
  name="email"
  onChange={onChange}
  placeholder="Label"
  success="Success message"
/>
```

## Examples

[Source code](https://github.com/flexcodelabs/flecodelabs-input)

## Props

| Name         | Type                                                                 | Default | Required | Description                                 |
| ------------ | -------------------------------------------------------------------- | ------- | -------- | ------------------------------------------- |
| label        | `string`                                                             | -       | `false`  | input label                                 |
| disabled     | `boolean`                                                            | -       | `false`  | input disabled status                       |
| autoComplete | `string`                                                             | -       | `false`  |                                             |
| inputClass   | `string`                                                             | -       | `false`  | input custom class name                     |
| inputStyle   | `CSSProperties`                                                      | -       | `false`  | input custom styles                         |
| error        | `string`                                                             | -       | `false`  | error message                               |
| onChange     | `func()`                                                             | -       | `false`  |                                             |
| type         | `string`                                                             | -       | `false`  | input type                                  |
| success      | `string`                                                             | -       | `false`  | success message                             |
| value        | `string or number`                                                   | -       | `true`   | input value                                 |
| name         | `string`                                                             | -       | `false`  | input name                                  |
| required     | `boolean`                                                            | -       | `false`  | whether input field is required             |
| showLabel    | `boolean`                                                            | `true`  | `false`  | show or hide input label                    |
| textarea     | `boolean`                                                            | -       | `false`  | whether to display textarea or normal input |
| placeholder  | `string`                                                             | -       | `false`  |                                             |
| showIcon     | `ReactNode`                                                          | -       | `false`  | show icon for password input field          |
| hideIcon     | `ReactNode`                                                          | -       | `false`  | hide icon for password input field          |
| className    | `string`                                                             | -       | `false`  | custom class name                           |
| style        | `CSSProperties`                                                      | -       | `false`  | custom styles                               |
| inputMode    | `search, text, tel, none, url, email, numeric, decimal or undefined` | -       | `false`  |                                             |
