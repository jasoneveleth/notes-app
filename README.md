# notes-app

TODO:
- maybe put the "back to render" button where plus button is so its easy to switch back and forth (if you need to reference something when you're writing)
- the search bar should be what you left off typing. I think maybe it should be a drop down
- git add, commit, push (node exec Sync -- different from spawn sync)
- append button needs to float w keyboard
- filenames should change color when its matched (match should be red) -- matches should also reutrn the indexes of the matches of the characters on success, and matches should be reduce()-ed into 3 lists (full tag matches, the whole search matches in a row, and it fuzzy matches) then concatted in that priority
- the date should appear rather than favorite? or both? or one above? -- `today` and `yesterday` should be their own things, otherwise, but the date like: `2/19`, or `3d ago`
- markdown needs to be reigned in (and look better)
- should list of filenames have the times on it? (that can be used for keys)
- in Things 5, when you scroll down on the area, it triggers search (and there's a nice animation with it). I want that
- look at capacitor for ios app (potential issue is for routing): https://www.youtube.com/watch?v=x2jRs7Qqai8&ab_channel=Fireship, https://capacitorjs.com/
- ios style guide https://www.learnui.design/blog/ios-font-size-guidelines.html
- tags should appear as symbols (replacing the symbol that's there), https://www.npmjs.com/package/yaml-front-matter, also convert all tags to front-matter

INSTRUCTIONS:
```bash
cd view
npm i
cd ../backend
npm i
npm run start
```
