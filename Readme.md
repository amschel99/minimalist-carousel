# Minimalist Carousel 

A simple  React carousel component.

## Installation

Install the package using npm:

```bash
npm install minimalist-carousel
```
## Usage

Import the Carousel component into your React application:

```javascript

import React from 'react';
import Carousel from 'minimalist-carousel';

const App = () => {
  // Your data for the carousel
  const carouselData = [
    { key: '1', image: 'path-to-image-1.jpg', name: 'Image 1' },
    { key: '2', image: 'path-to-image-2.jpg', name: 'Image 2' },
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Your React App</h1>
      <Carousel data={carouselData} />
    </div>
  );
};

export default App;


```
# Props
data (array):

 An array of objects representing each item in the carousel. Each object should have a unique key and an image property pointing to the image source.
