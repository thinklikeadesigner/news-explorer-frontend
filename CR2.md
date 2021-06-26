Great job with corrections! Some more issues still require your attention. Please, note that the dev version of the project fails to start on Windows: http://joxi.ru/KAx1040uKWKe3r Please, check your package.json file. See https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project for more details. This is **necessary to correct** before the next submission.

# Project review summary:
### Performance Criteria    
- [x] <!--14.429--> The project is adapted for different screen resolutions and matches the designs for these resolutions. There is no horizontal scrolling on resolutions of 320px and up. The scrollbar can't be hidden using the overflow: hidden declaration.

* Incorrect font-family for text elements inside popups(please check all popups): http://joxi.ru/Drldx4xUGv3a0r and inside the "search" input: http://joxi.ru/V2Vw0Z0C8xv6gA Please, check the design.
COMPLETE
* On "saved-articles" page, the card should contain a trash can, not a bookmark: http://joxi.ru/Dr8qz5zcJ4yVJm

- [x] <!--14.429--> All the blocks from the brief have been coded. Navigation between pages and links to external resources are working correctly: there are no broken links or links leading to an anchor on the page and external links open in a new tab.
COMPLETE
* Links to external resources should open in new tabs (links in the footer)
COMPLETE
- [x] <!--14.429--> The layout is responsive and displays correctly at all intermediate resolutions.

* The content has fixed width, the layout isn't responsive: http://joxi.ru/BA0xqPqHvJ4LlA

- [x] <!--3.38--> There are no validation errors.
- [x] <!--3.38--> Semantic HTML is used, meaning that semantic tags are used. All elements are used correctly (e.g. a paragraph must be a paragraph, a list must be a list). The DOM tree structure doesn't consist only of <div> containers.
- [x] <!--3.38--> The correct approach is chosen for positioning elements, and is described using the correct syntax. For example, when positioning an element absolutely, its parent block is relatively positioned.
- [x] <!--3.38--> flex or grid layout are used to arrange elements.
- [x] <!--3.38--> Infrastructural project files are created using CRA.
- [x] <!--3.38--> The popup windows have opening and closing functionality implemented.
- The markup has been converted into JSX:
	- [x] <!--3.38--> The markup is included within parentheses ( ).
	- [x] <!--3.38--> The markup has been moved into the corresponding components.
- Your project contains:
	- [x] <!--3.38--> An images folder
	- [x] <!--3.38--> A components folder with JS and CSS files for the components.
	- [x] <!--3.38--> A fonts folder.
	
### Best Practices
- [ ] <!--2.143--> Classes are named according to BEM specifications.

* Incorrectly used modifiers: http://joxi.ru/52awW7WCg4BG0r http://joxi.ru/EA4l0P0UvwjpyA http://joxi.ru/KAx1040uvMYKzr Please, correct all similar cases, BEM entity can't consist of a single modifier, it should always have a modified element or block. In this particular case, these should be elements, not modifiers.
* Element used outside of its block: http://joxi.ru/l2ZwzOzCRwOzQA http://joxi.ru/gmvxM4MHdL8vNA. The element should always be inside its block.
* These and all similar modifiers should be key-value, not boolean http://joxi.ru/52awW7WCg4Bb1r
COMPLETE
- [x] <!--2.143--> Buttons, input fields, and links are implemented in all of the states specified in the design.

* Trash can icon on hover: http://joxi.ru/YmEwlxlCMnZ8jA

- [x] <!--2.143--> The design reuses components wherever possible.
- [x] <!--2.143--> Fonts are connected using @font-face.
- [x] <!--2.143--> The use of reset.css is prohibited.
- [x] <!--2.143--> Form elements should be highlighted when focused.
- [x] <!--2.143--> The form must have placeholders, and required fields should be validated.
The required fields aren't validated.

### Recommendations
- [x] <!--1.67--> Images have an alt attribute containing appropriate values.
COMPLETE
- [x] <!--1.67--> System fonts are connected as alternatives to each of your fonts.
* Please correct all similar issues: http://joxi.ru/Dr8qz5zcJ4jKjm To find all similar cases, it's convenient to use search inside IDE.
- [x] <!--1.67--> Raster and vector images have been optimized.

## Number of points: 49
67