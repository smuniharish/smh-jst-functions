# smh-jst-functions

smh-jst-functions

## Installation
NPM
```sh
npm install smh-jst-functions
```
React Native
```sh
npm install --save smh-jst-functions
```
Expo
```sh
npx expo install smh-jst-functions
```

## Usage
### Locale-Helper
Locale-Helper is used to find the native language codes and its related information
#### getLocaleByCode(string)
```js
import {getLocaleByCode} from 'smh-jst-functions
console.log(getLocaleByCode("aa"))

// output
{ id: 4096, language: 'Afar', location: null, tag: 'aa' }
```
#### getLocaleList()
```js
import {getLocaleList} from 'smh-jst-functions
console.log(getLocaleByLanguage())

// output : List of avalable Languages with details
[aa: { id: 4096, language: 'Afar', location: null, tag: 'aa' },
  'aa-dj': { id: 4096, language: 'Afar', location: 'Djibouti', tag: 'aa-DJ' },
  'aa-er': { id: 4096, language: 'Afar', location: 'Eritrea', tag: 'aa-ER' },
  'aa-et': { id: 4096, language: 'Afar', location: 'Ethiopia', tag: 'aa-ET' },....]
```
#### getLocaleByLanguage(string)
```js
import {getLocaleByLanguage} from 'smh-jst-functions
console.log(getLocaleByLanguage("en"))

// output : Returns the list of all the tags ending with english
['en-001': { id: 4096, language: 'English', location: 'World', tag: 'en-001' },
  'en-029': { id: 9225, language: 'English', location: 'Caribbean', tag: 'en-029' },
  'en-150': { id: 4096, language: 'English', location: 'Europe', tag: 'en-150' },
  'en-ae': { id: 19465, language: 'English', location: 'United Arab Emirates', tag: 'en-AE' }....]
```
And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](samamuniharish@gmail.com)

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT](./LICENSE)

---

Made with ❤️
