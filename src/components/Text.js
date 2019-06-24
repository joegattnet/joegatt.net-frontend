import styled from 'styled-components';

import {
  ANNOTATIONS_FONT_SIZE,
  ANNOTATIONS_LINE_HEIGHT,
  FONT_SIZE,
  HALF_TAB,
  RED,
  TAB
} from '../variables';

const Text = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: ${TAB};
  .body {
    ${'' /* font-family: 'Vollkorn', serif; */}
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    position: relative;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  p {
    display: block;
    font-size: ${FONT_SIZE};
    hyphens: auto;
    margin: 0;
    overflow: hidden;
    ${'' /* position: relative; */}
    text-align: justify;
    text-indent: ${TAB};
    &:first-of-type {
      text-indent: 0;
    }
    a[id*=annotation-mark] {
      font-size: 11px;
      line-height: 0;
      vertical-align: super;
    }
  }
  #annotations {
    ${'' /* font-family: 'Vollkorn', serif; */}
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    font-weight: 300;
    grid-row: 2 / span 1;
    &.side-annotations {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
      position: relative;
      ol {
        background-color: purple;
        padding: 0;
      }
      li {
        color: ${RED};
        line-height: ${ANNOTATIONS_LINE_HEIGHT};
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: absolute;
        text-align: left;
        font-size: ${ANNOTATIONS_FONT_SIZE};
        a:first-of-type {
          color: ${RED};
          display: inline-block;
          min-width: ${HALF_TAB};
          &:after {
            content: '. ';
          }
        }
      }
    }
  }
  #versions {
    ol {
      padding: 0;
    }
    li {
      color: ${RED};
      line-height: ${ANNOTATIONS_LINE_HEIGHT};
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: absolute;
      text-align: left;
      font-size: ${ANNOTATIONS_FONT_SIZE};
      a:first-of-type {
        color: ${RED};
        display: inline-block;
        min-width: ${HALF_TAB};
        &:before {
          content: 'v';
        }
      }
    }
  }
`;

export default Text;
