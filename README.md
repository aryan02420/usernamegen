# <img src="/static/logo.svg" alt="usernameGen" height="24em"> usernameGen

[![npm][npm-shield]][npm-url]
[![tests][tests-shield]][tests-url]

### Installation

```bash
    npm i @aryan02420/usernamegen
```

### Usage

##### Random everytime

```js
    const {UNG} = require('@aryan02420/usernamegen')
    let ung = new UNG()

    console.log(ung.generateUsername().toString())                   // slightingvoltaic4
    console.log(ung.generateUsername().toString())                   // amazedspirogyra43566
```

##### From Seed

```js
    console.log(ung.generateUsername('hello').toString())            // mortalidolization749
    console.log(ung.generateUsername('hello').toString())            // mortalidolization749
```

##### Formatting

```js
    // inline
    uppercase = (fn, ln, n) => {
      return `${fn}${ln}_${n}`.toUpperCase()
    }
    console.log(ung.generateUsername('wOrld!').toString(uppercase))  // SUNBURNEDPASIGRAPHY_4

    // global
    ung.formattor = (fn, ln, n) => {
      return fn
    }
    console.log(ung.generateUsername('wOrld!'))                      // sunburned

    // override
    console.log(ung.generateUsername('wOrld!').toString(uppercase))  // SUNBURNEDPASIGRAPHY_4
```

##### Custom Words

```js
    let ung = new UNG()
    ung.words = {
        "nouns": {
            "list": ["world", "universe"],
            "length": 2
        },
        "adjectives": {
            "list": ["hello", "hey"],
            "length": 2
        }
    }
    console.log(ung.generateUsername('a').toString())                // hellouniverse55
```

##### Extending

```js
    let un = ung.generateUsername('a')
    console.log(un.sequence())                                       // 0.6363726288676872
    console.log(un.sequence())                                       // 0.005222270723581011
    console.log(un.sequence())                                       // 0.33566655610801654
    console.log(un.toString())                                       // hellouniverse55
```

##### Browser

```html
    <script src="/lib/browser.js"></script>
    <script>
        let ung = new UNG();
        console.log(ung.generateUsername().toString());
    </script>
```

### Global Installation

```bash
    > npm i -g @aryan02420/usernamegen

    > ung
    covariantsnuffbox419
    > ung
    hornedenlarger77
    > ung
    joltingbacklog39
    > ung hello
    mortalidolization749
    > ung hello
    mortalidolization749
```



[tests-shield]: https://img.shields.io/github/workflow/status/aryan02420/usernamegen/tests?label=tests&logo=github
[tests-url]: https://github.com/aryan02420/usernamegen/actions/workflows/test-runner.yml
[npm-shield]: https://img.shields.io/npm/v/@aryan02420/usernamegen?label=version&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/package/@aryan02420/usernamegen