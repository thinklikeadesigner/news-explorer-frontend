

Good job! Some corrections need to be made, but on the whole, the project is very impressive!

Please, note that the dev version of the project fails to start on Windows: http://joxi.ru/KAx1040uKWKe3r Please, check your package.json file

# Project review summary:
### Performance Criteria
TEST 
- [ ] <!--14.429--> The project is adapted for different screen resolutions and matches the designs for these resolutions. There is no horizontal scrolling on resolutions of 320px and up. The scrollbar can't be hidden using the overflow: hidden declaration.


TEST 
* The content of the page should have limited width. Currenlty, on large screen resolutions, it's stretched to the whole width (e.g. on 2800px the content in header, author, footer will occupy the whole screen width). The backround in the header however can be stretched to occupy the whole screen (or it can be limited, too, it's up to you)
COMPLETE 
* Horizontal scroll on desktop resolutions: 1141px - 1252px
COMPLETE
 * Please, add a space on "Sign In" button
COMPLETE The button closing the popup doesn't correspond to the design.
FIXME
 * "Registration successfull" popup doesn't correspond to the design.
COMPLETE
 * On mobile screens, the footer should have the same width and margins as other sections.
COMPLETE
 * Background image in header should be different on mobile screens.
 * Incorrect layout of nav menu on mobile screens: http://joxi.ru/a2XwjRjC4x4Oam. No margin between the link and the button, and     
 FIXME 
 also, the menu should provide `Saved articles` link when the user is logged in.
COMPLETE
 the title and the text shouldn't be shifted down when the burger menu opens.
FIXME 
* The popup layout on mobile screens doesn't correspond to the design: http://joxi.ru/nAyyl4luwOwnVA Please check all popups.
- [ ] <!--14.429--> All the blocks from the brief have been coded. Navigation between pages and links to external resources are working correctly: there are no broken links or links leading to an anchor on the page and external links open in a new tab.
MAKEME
 * Navigation menu in the footer should contain working links.
COMPLETE
 * Should be a working link http://joxi.ru/1A58EPECbob892 http://joxi.ru/vAWBEaEUOYO4j2
FIXME
 * On saved-articles page, the card should have a trash can icon instead of a bookmark.
- [x] <!--14.429--> The layout is responsive and displays correctly at all intermediate resolutions.
COMPLETE 
* The content is too narrow: http://joxi.ru/brRwqWqCOwObLm, please check other resolutions too, the content should adapt to the screen width.
 - [X] <!--3.38--> There are no validation errors.
COMPLETE http://joxi.ru/V2Vw0Z0Ck1kn5A invalid css value: http://joxi.ru/xAe4ZqZcXWXy92 Incorrect class name: http://joxi.ru/Q2KwkNkCvzvea2, pseudo-classes should be assigned only in css
COMPLETE `<div>` can't be a direct descendant of `ul`: http://joxi.ru/823yGPGu8E8dlr Please, correct all similar issues
- [x] <!--3.38--> Semantic HTML is used, meaning that semantic tags are used. All elements are used correctly (e.g. a paragraph must be a paragraph, a list must be a list). 
COMPLETE The DOM tree structure doesn't consist only of <div> containers.
 The links in the footer should be inside a list. Optional, but highly recommended: the list inside nav.
COMPLETE The "search" form should be a `<form>`
- [x] <!--3.38--> The correct approach is chosen for positioning elements, and is described using the correct syntax. For example, when positioning an element absolutely, its parent block is relatively positioned.
- [x] <!--3.38--> flex or grid layout are used to arrange elements.
- [x] <!--3.38--> Infrastructural project files are created using CRA.
- [ ] <!--3.38--> The popup windows have opening and closing functionality implemented.
COMPLETE * Button "Sign In" opens "Sign Up" popup.
- The markup has been converted into JSX:
	- [x] <!--3.38--> The markup is included within parentheses ( ).
	- [x] <!--3.38--> The markup has been moved into the corresponding components.
- Your project contains:
	- [x] <!--3.38--> An images folder
COMPLETE
	- [ ] <!--3.38--> A components folder with JS and CSS files for the components.
	http://joxi.ru/gmvxM4MH1p1WyA
	- [x] <!--3.38--> A fonts folder.
	
### Best Practices
REFACTOR
 - [ ] <!--2.143--> Classes are named according to BEM specifications.
Incorrectly used elements and a modifier: http://joxi.ru/1A58EPECbobP92 http://joxi.ru/GrqR848TG1GWPm Elements shouldn't be used outside of their block, the modifier can't be used on its own without the block or element it modifies. Please, correct all similar issues (check footer and modals for BEM naming thoroughly, there are multiple similar BEM issues there)
All these modifiers should be key-value, not boolean: http://joxi.ru/nAyyl4luwOwLVA. The same for `search-form__input_text`
MAKEME
 - [ ] <!--2.143--> Buttons, input fields, and links are implemented in all of the states specified in the design.
MAKEME
 * When not logged in, the bookmark on the card on hover: http://joxi.ru/Dr8qz5zcMVkezm
MAKEME
 * Trash can icon on hover: http://joxi.ru/YmEwlxlCMnZ8jA
- [x] <!--2.143--> The design reuses components wherever possible.
- [x] <!--2.143--> Fonts are connected using @font-face.
- [x] <!--2.143--> The use of reset.css is prohibited.
COMPLETE
- [x] <!--2.143--> Form elements should be highlighted when focused.
* Search input isn't highlighted
- [ ] <!--2.143--> The form must have placeholders, and required fields should be validated.

### Recommendations
COMPLETE
 - [x] <!--1.67--> Images have an alt attribute containing appropriate values.
http://joxi.ru/VrwkG4Gh4B4EOr
COMPLETE 
- [x] <!--1.67--> System fonts are connected as alternatives to each of your fonts.
COMPLETE
 * Please correct all similar issues: http://joxi.ru/EA4l0P0Updp1OA
- [x] <!--1.67--> Raster and vector images have been optimized.

## Number of points: 32

## Additional comments:

COMPLETE
 No need to render several modals on the page: http://joxi.ru/82QwJ6JC9P9odr. Render just one of them, and change its type with key-value modifiers: `modal_type_sign-in`