# notes-app

## TODO

search:
- filenames should change color when its matched (match should be red) -- matches should also reutrn the indexes of the matches of the characters on success, and matches should be reduce()-ed into 3 lists (full tag matches, the whole search matches in a row, and it fuzzy matches) then concatted in that priority
- tags should appear as symbols (replacing the symbol that's there), https://www.npmjs.com/package/yaml-front-matter, also convert all tags to front-matter

render:
- links shouldn't go off screen
- code blocks should scroll

Border width (px) - Relative border width is ugly.
Icon size (em) - When inline with text.
Margin for typography (rem) - Case for margin between heading and paragraph.
Padding for typography (em) - Case for different button size.
Font size (em or %) - Case for heading font size and secondary font size.
Root font size (px) - It is the root! Why bother with relative units? Relative to what??
Line height (em or rem) - Because it needs to be relative to the font size. Unless you want to set a vertical rhythm and such.

https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/

## INSTRUCTIONS:

```bash
cd view
npm i
cd ../backend
npm i
npm run start
```
