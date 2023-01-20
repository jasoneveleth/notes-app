# notes-app

## TODO

- fix warning!!

append:
- back button where plus button is
- append/submit button at top: big blue rounded rectangle, greyed out when no text

search:
- the search bar should be what you left off typing. I think maybe it should be a drop down
- filenames should change color when its matched (match should be red) -- matches should also reutrn the indexes of the matches of the characters on success, and matches should be reduce()-ed into 3 lists (full tag matches, the whole search matches in a row, and it fuzzy matches) then concatted in that priority
- the date should be above favorite `today` and `yesterday` should be their own things, otherwise, but the date like: `2/19`, or `3d ago`
- tags should appear as symbols (replacing the symbol that's there), https://www.npmjs.com/package/yaml-front-matter, also convert all tags to front-matter

render:
- links shouldn't go off screen
- code blocks should scroll
- in Things 5, when you scroll down on the main area, it triggers search (and there's a nice animation with it). I want that

app:
- capacitor: https://www.youtube.com/watch?v=x2jRs7Qqai8&ab_channel=Fireship, https://capacitorjs.com/
- expo: https://www.digitalocean.com/community/tutorials/how-to-set-up-build-and-deploy-native-apps-with-vue


## INSTRUCTIONS:

```bash
cd view
npm i
cd ../backend
npm i
npm run start
```
