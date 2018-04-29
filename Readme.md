# Css Architecture

An opinionated css architecture based on ITCSS and SASS

You are free to add or remove folder structures depending upon the projects need.

<pre>
styles/
|
|– 01-settings/
|   |– _colors.scss       # Sass Color Variables
|   |– _fonts.scss        # Sass Font Variables
|   |– _variables.scss    # Sass Variables
|   …                     # Etc.
|
|– 02-tools/
|   |– _functions.scss    # Sass Functions
|   |– _mixins/           # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|   …                     # Etc.
|
|– 03-base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– 04-elements/
|   |– _html.scss         # Html
|   |– _link.scss         # Link
|   …                     # Etc.
|
|– 05-components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– 06-layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– 07-pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– 08-utilities/
|   |– _colors.scss       # Colors Class Mapper
|   |– fonts.scss         # Fonts helper
|   …                     # Etc.
|
|– 09-vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
</pre>

One of the key principles is that it separates the CSS codebase to several sections (called layers), which take form of the inverted triangle:


![Layers](./docs/layers.svg "Layers")

Those layers are as follows:

* Settings – used with preprocessors and contain font, colors definitions, etc.
* Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
* Base – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
* Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
* Components – specific UI components. This is where majority of our work takes place.
* layout - This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.
* pages - styles specific to certain pages eg. Home page, contact page
* Utilities – utilities and helper classes with ability to override anything which goes before and can contain !important, eg. hide helper class
* vendor - contains all the CSS files from external libraries and frameworks like bootstrap, select2



The triangle also shows how styles are ordered in CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed).

![Metrics](./docs/metrics.svg "Metrics")


Such CSS organization should help us avoid Specificity Wars and is represented by a healthy [specificity graph](https://jonassebastianohlsson.com/specificity-graph/).

[Breakpoints Guide](./docs/breakpoint.md)
