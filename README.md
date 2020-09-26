### Installation

```bash
    $ npm i @aryan02420/usernamegen
```

### Usage

```js
    const ung = require('@aryan02420/usernamegen')

    // random usernames
    console.log(ung.generateUsername())             // slightingvoltaic4
    console.log(ung.generateUsername())             // amazedspirogyra43566
    console.log(ung.generateUsername())             // casuisticaljam203
    console.log(ung.generateUsername(undefined))    // sevenfoldfast6
    console.log(ung.generateUsername(undefined))    // sunnyanoxia68
    console.log(ung.generateUsername(undefined))    // ribbedgraphite9184
```

```js
    // from seed
    console.log(ung.generateUsername('hello'))      // mortalidolization749
    console.log(ung.generateUsername('hello'))      // mortalidolization749
    console.log(ung.generateUsername('wOrld!'))     // sunburnedpasigraphy4
```

```js
    // formatting

    console.log(ung.generateUsername('wOrld!', (fn, ln, n) => {
        return `${fn}${ln}_${n}`.toUpperCase()
    }))                                                         // SUNBURNEDPASIGRAPHY_4

    uppercase = (fn, ln, n) => {
      return `${fn}${ln}_${n}`.toUpperCase()
    }
    console.log(ung.generateUsername('wOrld!', hackertype))     // SUNBURNEDPASIGRAPHY_4

    //global formatter
    ung.formatter = (fn, ln, n) => {
      return fn
    }
    console.log(ung.generateUsername('wOrld!'))                 // sunburned
    // override
    console.log(ung.generateUsername('wOrld!', uppercase))      // SUNBURNED


```

### Global Installation

```bash
    $ npm i -g @aryan02420/usernamegen


    $ ung
      hornedenlarger77
    $ ung
      joltingbacklog39
    $ ung hello
      mortalidolization749
    $ ung hello
      mortalidolization749
```
