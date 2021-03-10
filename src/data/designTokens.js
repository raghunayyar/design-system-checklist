export default {
  "id": "design-tokens",
  "title": "Design tokens",
  "description": "Variables that store values for the base layer of your design system, like colour and typography. They’re used in components, so changes on this level will resonate throughout the whole system.",
  "sections": [{
    "title": "Colour",
    "id": "dt1",
    "description": "Not only an efficient way to showcase your brand, but also an efficient way to communicate with your users. Colour palettes created with purpose over aesthetics in mind can help you create intuitive design patterns by adding meaning to your interface.",
    "checklist": [{
      "id": "dt2",
      "title": "Accessibility",
      "description": "Make sure to have accessible pairings between the main colours in your palette. More importantly, make sure that your background and text colours have at least an AA standard contrast ratio between them."
    }, {
      "id": "dt3",
      "title": "Functional colours",
      "description": "Besides your brand colours, make sure to have colours defined and made into variables for functions like disabled states, backgrounds, actions and high contrast text."
    }, {
      "id": "dt4",
      "title": "Dark mode",
      "description": "Preparing a dark mode version of your colour palette will allow your design system to adapt to dark mode and respect what your user wants to see."
    }, {
      "id": "dt5",
      "title": "Guidelines",
      "description": "Provide guidelines on how and when to use the colours in your palette, what to keep in mind when working with them and how not to use them."
    }],
    "resources": [{
      "title": "Lyft: Re-approaching Color",
      "url": "https://design.lyft.com/re-approaching-color-9e604ba22c88"
    }, {
      "title": "Material Design: Dark theme",
      "url": "https://material.io/design/color/dark-theme.html"
    }, { "title": "IBM Design Language: Color", "url": "https://www.ibm.com/design/language/color/" }]
  }, {
    "title": "Layout",
    "id": "dt6",
    "description": "A well thought out layout goes a long way. Consistent use of a grid and spacing makes it easier for your users to scan the user interface and grasp the content.",
    "checklist": [{
      "id": "dt7",
      "title": "Units",
      "description": "Units are the most granular building blocks for layout. Defining a set of values with consistent increments (such as 4, 8, 12 and 16 for a 4-point system) will provide you with the foundation when you’re designing your grid and spacing values."
    }, {
      "id": "dt8",
      "title": "Grid",
      "description": "Every layout should sit on a grid that brings order and hierarchy to the interface. Define a grid separately for mobile, tablet and desktop devices with columns, gutters, and margins so your interface can adapt to any platform easily."
    }, {
      "id": "dt9",
      "title": "Breakpoints",
      "description": "Predefine the screen sizes and orientations your grid will adapt to."
    }, {
      "id": "dt10",
      "title": "Spacing",
      "description": "Horizontal and vertical rhythm plays a big role in a layout. You should provide easy methods for adding space between interface elements independent of your grid."
    }],
    "resources": [{
      "title": "Material Design: Responsive Layout Grid",
      "url": "https://material.io/design/layout/responsive-layout-grid.html"
    }, { "title": "Ant Design: Layout", "url": "https://ant.design/docs/spec/layout" }]
  }, {
    "title": "Typography",
    "id": "dt11",
    "description": "Typography is one of the main ways you surface content in products. A clear hierarchy and contrasting styles in your typography scale will make things easier to read and help with the overall structure of your product. It’s also an opportunity to visualise your brand character and presence.",
    "checklist": [{
      "id": "dt12",
      "title": "Responsiveness",
      "description": "Desktop devices can usually afford to have bigger font sizes compared to mobile devices. Creating a typography scale that adapts to the viewport size will help with a more meaningful hierarchy and layout."
    }, {
      "id": "dt13",
      "title": "Grid relation",
      "description": "Font sizes and leading should match your grid to allow better pairing between text and other UI elements. A good example of this is text paired with icons with bounding boxes."
    }, {
      "id": "dt14",
      "title": "Readability",
      "description": "Optimising the letter spacing (tracking), line height (leading) and line length for your typography scale will help with the readability of text."
    }, {
      "id": "dt15",
      "title": "Performance",
      "description": "Custom fonts need to be downloaded before they can be displayed, especially on the web. Make sure that you have sensible fallbacks and fast loading time for your typography assets. Using system fonts solves this performance problem."
    }, {
      "id": "dt16",
      "title": "Guidelines",
      "description": "Provide guidelines on how and when to use the pairings in your typography scale, what to keep in mind when working with them and how not to use them."
    }],
    "resources": [{
      "title": "Material Design: Understanding Typography",
      "url": "https://material.io/design/typography/understanding-typography.html#type-properties"
    }, { "title": "Better Web Type", "url": "https://betterwebtype.com/" }]
  }, {
    "title": "Iconography",
    "id": "dt17",
    "description": "Icons are symbols that represent functionality or content. They’re especially recognisable and helpful in user interfaces since their meaning can be understood at a glance. hough they can be used just for decoration, their full potential can be realised when they’re used meaningfully and consistently.",
    "checklist": [{
      "id": "dt18",
      "title": "Accessibility",
      "description": "For icons that convey a meaning or serve a function, add the necessary support for screen readers. You can skip this for decorative icons."
    }, {
      "id": "dt19",
      "title": "Style",
      "description": "Make sure that your icon family makes visual sense as a whole. Picking an outlined or filled style and sticking with it will lead to better visual consistency and predictability."
    }, {
      "id": "dt20",
      "title": "Naming",
      "description": "Name your icons based on what they are, not what they represent. For instance, a trash icon should be named trash, not delete. You can still add related keywords to improve discoverability."
    }, {
      "id": "dt21",
      "title": "Relation with grid",
      "description": "Draw your icons in a bounding box that plays well with your grid. This makes for a better pairing with other UI elements. A good example of this would be icons with bounding boxes paired with text."
    }, {
      "id": "dt22",
      "title": "Sizes",
      "description": "Provide different sizes for icons that correlate to your grid. Provide a minimum size and remove unnecessary detail for your icons for smaller sizes."
    }, {
      "id": "dt23",
      "title": "Keywords",
      "description": "Adding keywords will improve the discoverability of each icon and provide a better user experience for anyone using your system."
    }, {
      "id": "dt24",
      "title": "Reserved icons",
      "description": "Reserving icons that represent common actions will prevent their use in any other context. System icons for navigation or adding and deleting are a good example. This leads to a more intuitive user experience."
    }, {
      "id": "dt25",
      "title": "Guidelines",
      "description": "Provide guidelines on how and when to use icons, what to keep in mind when working with them and how not to use them."
    }],
    "resources": [{
      "title": "A complete guide to iconography",
      "url": "https://www.designsystems.com/iconography-guide/"
    }, {
      "title": "Material Design: Product Icons",
      "url": "https://material.io/design/iconography/product-icons.html"
    }]
  }]
};
