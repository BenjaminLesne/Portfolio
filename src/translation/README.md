# How does the translation work?

To understand this you need to know which library the project uses and the way we make namespace.

## i18n

This project use i18n, here is its [documentation](https://www.i18next.com/)

### How to make a new namespace?

- go to the targeted folder (e.g. translation/locales/en)
- create the namespace json file (e.g. navigation.json)
- in translation/locales/en/namespaces.ts, add the import and export like so:
```
import * as common from "../../common/namespaces"
import otherNamespace from "./otherNamespace.json"
import navigation from "./navigation.json"

export { common, otherNamespace , navigation }
```

The content of the navigation.json file:
```
{
    "skills": {
        "url": "http://blabla.com"
    }
}
```

The name you gave to the import, here navigation, will be the name of your namespace. (So far, in this project, we used the same name of the json file and the namespace)
- now, in your app do:
```
t("skills.url", { ns: "navigation"})
```
For your information, currently your ressources variable from the i18n config look like this:
```
en: {
 navigation: {
    skills: {
        url: "http://blabla.com"
    }
 },
 common: {...},
 otherNamespace: {...}
},

fr: {...}
```

The navigation namespace was given to the "en" key but not the "fr" key.
Because we only added the navigation import in :
- `translation/locales/en/namespaces.ts`<br/>
not in:
- `translation/locales/fr/namespaces.ts`         

`/!\` **CAREFUL** `/!\`<br/>
i18n error message on the t function are misleading sometimes.
It throws `Type instantiation is excessively deep and possibly infinite` error for an namespace import that did not resolve for example.