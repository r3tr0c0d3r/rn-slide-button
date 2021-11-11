# React Native Slide Button

A simple slide button using Reanimated 2 animation library.

## Preview

![@](https://github.com/r3tr0c0d3r/rn-slide-button/blob/master/screenshots/screenshot-rn-slide-button.gif?raw=true)


## Installation

```sh
npm install --save rn-slide-button
```

or

```sh
yarn add rn-slide-button
```

## Dependencies

```sh
yarn add react-native-gesture-handler react-native-reanimated
```

## Usage

```js
import SlideButton from 'rn-slide-button';

// ...
<SlideButton title="Slide To Unlock"/>;
// ...
```

## Component props

| prop                      | type     | default      | description                                 |
| ------------------------- | -------- | ------------ | -------------------------------------------- |
| width                     | number   | screen width | button width.       |
| height                    | number   | 60           | button height.       |
| borderRadius              | number   | 30           | button corner radius.      |
| completeThreshold         | number   | 70           | determinates whether the thumb will reach to the end or to start. (value should be 0-100)      |
| padding                   | number   | 5            | button content padding.  |
| disabled                  | boolean  | false        | changes button touchability.            |
| reverseSlideEnabled       | boolean  | true         | enable/disable thumb's back sliding feature |
| title                     | string   | Slide to save| button title. |
| titleStyle                | object   | object       | button title styling. |
| titleContainerStyle       | object   | object       | button title container styling.        |
| icon                      | Image/ Element   | null         | thumb icon. |
| thumbStyle                | object   | object       | thumb container styling. |
| containerStyle            | object   | object       | button container styling. |
| underlayStyle             | object   | object       | thumb underlay view styling. |
| autoReset                 | boolean  | false        | thumb will reset its position if it's set to true |
| autoResetDelay            | number   | 1080ms       | delay time to reset |
| animation                 | boolean  | false        | thum will animate if it's set to true |
| animationDuration         | number   | 180ms        | animation duration time |
| onSlideStart              | func     | () => {}     | it will be invoked when sliding starts|
| onSlideEnd                | func     | () => {}     | it will be invoked when sliding ends|
| onReachedToStart          | func     | () => {}     | it will be invoked when thumb reaches to start|
| onReachedToEnd            | func     | () => {}     | it will be invoked when thumb reaches to end|

## License

MIT
