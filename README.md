# notes-app

TODO:
- need to actually filter the filenames as i search:
    - search string is stored as data, and we have filter() take in search string and the list of filenames and return that. we just need to write a fuzzy matching predicate
- maybe put the "back to render" button where plus button is so its easy to switch back and forth (if you need to reference something when you're writing)
- git add, commit, push (node exec Sync -- different from spawn sync)
- append button needs to float w keyboard
- append button needs to resset the cookie
- toggle button needs to actually toggle
- should list of filenames have the times on it? (that can be used for keys)
- in Things 5, when you scroll down on the area, it triggers search (and there's a nice animation with it). I want that

INSTRUCTIONS:
```bash
cd view
npm i
cd ../backend
npm i
npm run start
```