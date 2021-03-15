![usernameGen](https://github.com/aryan02420/usernamegen/static/logo.svg)
![Node.js Package](https://github.com/aryan02420/usernamegen/workflows/Node.js%20Package/badge.svg)
![Node.js Package](https://img.shields.io/github/workflow/status/aryan02420/usernamegen/Node.js%20Package)


### Installation

```bash
    > npm i @aryan02420/usernamegen
```

### Usage

```js
    const ung = require('@aryan02420/usernamegen')

    // random usernames
    console.log(ung.generateUsername().toString())                              // slightingvoltaic4
    console.log(ung.generateUsername().toString())                              // amazedspirogyra43566
    console.log(ung.generateUsername().toString())                              // casuisticaljam203
    console.log(ung.generateUsername(undefined).toString())                     // sevenfoldfast6
    console.log(ung.generateUsername(undefined).toString())                     // sunnyanoxia68
    console.log(ung.generateUsername(undefined).toString())                     // ribbedgraphite9184
```

```js
    // from seed
    console.log(ung.generateUsername('hello').toString())                       // mortalidolization749
    console.log(ung.generateUsername('hello').toString())                       // mortalidolization749
    console.log(ung.generateUsername('wOrld!').toString())                      // sunburnedpasigraphy4
```

```js
    // formatting
    uppercase = (fn, ln, n) => {
      return `${fn}${ln}_${n}`.toUpperCase()
    }
    console.log(ung.generateUsername('wOrld!').toString(uppercase))             // SUNBURNEDPASIGRAPHY_4

    //global formatter
    ung.UserName.formatter = (fn, ln, n) => {
      return fn
    }
    console.log(ung.generateUsername('wOrld!'))                                 // sunburned

    // override
    console.log(ung.generateUsername('wOrld!', uppercase))                      // SUNBURNEDPASIGRAPHY_4


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
