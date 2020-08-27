### Installation

```bash
    $ npm i @aryan02420/usernamegen
```

### Usage

```js
    const ung = require('@aryan02420/usernamegen')

    // random usernames
    console.log(ung.generateUsername())    // slightingvoltaic4
    console.log(ung.generateUsername())    // amazedspirogyra43566
    console.log(ung.generateUsername())    // casuisticaljam203
    console.log(ung.generateUsername(undefined))    // sevenfoldfast6
    console.log(ung.generateUsername(undefined))    // sunnyanoxia68
    console.log(ung.generateUsername(undefined))    // ribbedgraphite9184
```
```js
    // from seed
    console.log(ung.generateUsername('hello'))    // mortalidolization749
    console.log(ung.generateUsername('hello'))    // mortalidolization749
    console.log(ung.generateUsername('world!'))   // sunburnedpasigraphy4
```
```js
    // formatting

    console.log(ung.generateUsername('world!', (fn, ln, n) => {
        return `${fn.replace(/^\w/, (c) => {
            return c.toUpperCase()
        })}${ln.replace(/^\w/, (c) => {
            return c.toUpperCase()
        })}-${n}`
    }))                                           // SunburnedPasigraphy-4

    hackertype = (fn, ln, n) => {
      const str = `${fn}-${ln}${n}`
      return h4ck3r7yp3(str)
    }
    console.log(ung.generateUsername('wOrld!', hackertype))    // $unburn3dP4s!9r4phy-4
```

### Global Installation

```bash
    $ npm i -g @aryan02420/usernamegen


    $ ung
    > hornedenlarger77
    $ ung
    > joltingbacklog39
    $ ung hello
    > mortalidolization749
    $ ung hello
    > mortalidolization749
```
