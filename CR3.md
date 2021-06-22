Congratulations, the project is accepted! Good luck on the next stage!

# Project review summary:
### Performance Criteria
- [ ] <!--14.429--> The project is adapted for different screen resolutions and matches the designs for these resolutions. There is no horizontal scrolling on resolutions of 320px and up. The scrollbar can't be hidden using the overflow: hidden declaration.

* On "saved-articles" the cards list should contain 3 cards in a row max: http://joxi.ru/KAx1040uvM3NQr.
* On all desktop resolutions there should be 3 cards in a row: http://joxi.ru/KAgwR4RCN4ovzA
* cards are too narrow on mobile screens

- [x] <!--14.429--> All the blocks from the brief have been coded. Navigation between pages and links to external resources are working correctly: there are no broken links or links leading to an anchor on the page and external links open in a new tab.
- [x] <!--14.429--> The layout is responsive and displays correctly at all intermediate resolutions.
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
Incorrectly used elements: http://joxi.ru/823yGPGuaJZNNr Elements shouldn't be used outside of their block. Please, correct all similar issues
Incorrect usage of modifier classes: http://joxi.ru/bmoly4yU7xRaP2 http://joxi.ru/a2XwjRjCl1NN7m http://joxi.ru/E2pa747T49KKQA http://joxi.ru/1A58EPECzn9o02
- [x] <!--2.143--> Buttons, input fields, and links are implemented in all of the states specified in the design.
- [x] <!--2.143--> The design reuses components wherever possible.
- [x] <!--2.143--> Fonts are connected using @font-face.
- [x] <!--2.143--> The use of reset.css is prohibited.
- [x] <!--2.143--> Form elements should be highlighted when focused.
- [x] <!--2.143--> The form must have placeholders, and required fields should be validated.

### Recommendations
- [x] <!--1.67--> Images have an alt attribute containing appropriate values.
- [x] <!--1.67--> System fonts are connected as alternatives to each of your fonts.
- [x] <!--1.67--> Raster and vector images have been optimized.

## Number of points: 84