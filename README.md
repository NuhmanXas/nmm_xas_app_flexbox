# AppFlexBox Component

AppFlexBox is a versatile, styled React component designed for flexible and responsive layout design. It integrates seamlessly with styled-components and provides a wide range of customization options to fit various layout needs.

## Features

- **Flexible Display Types**: Supports various display types like `d-flex`, `d-inline-flex`, and their responsive variants.
- **Direction Control**: Allows setting the flex direction including row, column, and their reverse forms across different screen sizes.
- **Justify Content**: Offers extensive options to justify content like `justify-content-start`, `justify-content-end`, and more.
- **Align Items**: Provides settings for aligning items such as `align-items-start`, `align-items-end`, etc.
- **Align Self**: Includes options like `align-self-start`, `align-self-end` to control the alignment of the component itself.
- **Flex Fill**: Enables the component to occupy all available space.
- **Auto Margins**: Supports automatic margin adjustment with `ms-auto`.
- **Flex Wrap**: Allows setting the wrap behavior of flex items.
- **Order Control**: Facilitates reordering of flex items with options like `order-1`, `order-2`, etc.
- **Align Content**: Aligns content with options such as `align-content-start`, `align-content-center`, and more.
- **Custom Styling**: Accepts inline styles for additional customization.

## Installation

To use AppFlexBox in your project, you need to have `styled-components` installed. If you haven't installed `styled-components` yet, you can add it to your project using npm:

```bash
npm install styled-components
```

Then, you can import and use `AppFlexBox` in your React application:

```javascript
import AppFlexBox from './path-to-AppFlexBox'; // Adjust the path as needed
```

## Usage

```jsx
<AppFlexBox
  className="your-custom-class"
  flexType="d-flex"
  direction="flex-row"
  justifyContent="justify-content-start"
  alignItems="align-items-center"
  alignSelf="align-self-auto"
  fill="flex-fill"
  autoMargins="ms-auto"
  wrap="flex-wrap"
  order="order-1"
  alignContent="align-content-start"
  style={{ yourCustomStyleObject }}
>
  {/* Your content here */}
</AppFlexBox>
```

Customize the component using the available props to fit the layout needs of your project. The `className` and `style` props allow for further customization with external CSS or inline styles.
