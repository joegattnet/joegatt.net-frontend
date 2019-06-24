import { injectGlobal } from 'styled-components';
import {
  BLACK,
  LINE_HEIGHT,
  RED,
  SANS_FONT_SIZE,
  TITLE_FONT_SIZE,
  TITLE_LINE_HEIGHT,
  WHITE,
} from 'variables';

// import { fontFace } from 'polished';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Fontello';
    src: url(http://d2zyjwzv9avbqu.cloudfront.net/assets/Fontello/regular-703da7314bd59322b45e54480f3b9f75.ttf) format("truetype");
    font-weight normal;
    font-style: normal;
  }

  html,
  body {
    height: 100.1%;
    width: 100%;
  }

  body {
    background-color: ${WHITE};
    color: ${BLACK};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${SANS_FONT_SIZE};
    line-height: ${LINE_HEIGHT};
  }

  body.openSansFontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.robotoSlabFontLoaded {
    #body, #annotations {
      p, li, li a {
      font-family: 'Roboto Slab', Georgia, serif;
      }
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  h2 {
    color: ${RED};
    font-size: ${TITLE_FONT_SIZE};
    line-height: ${TITLE_LINE_HEIGHT};
  }

  h3 {
    display: none;
  }

  a {
    color: ${BLACK};
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;
