# <img src="/static/logo.svg" alt="usernameGen" width="24px"> usernameGen

![npm](https://img.shields.io/npm/v/@aryan02420/usernamegen?label=version&logo=npm&logoColor=white)
![tests](https://img.shields.io/github/workflow/status/aryan02420/usernamegen/tests?label=tests&logo=github)


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
