import styled from 'styled-components';
import { TAB } from 'variables';

const ArrowA = styled.a`
  text-transform: lowercase;
  &:before {
    display: inline-block;
    font-family: 'Fontello';
    font-style: normal;
    font-weight: normal;
    content: '\\e9ca';
    font-size: 0.85em;
    text-align: center;
    width: ${TAB};
  }
  &[href*=wikipedia]:before {
    content: '\\2c';
  }
  &[href*=digg]:before {
    content: '\\ea22';
  }
  &[href*=reddit]:before {
    content: '\\3e';
  }
  &[href*=evernote]:before {
    content: '\\ea29';
  }
  &[href*=flickr]:before {
    content: '\\ea2a';
  }
  &[href*=instapaper]:before {
    content: '\\ea2d';
  }
  &[href*=youtube]:before {
    content: '\\ea38';
  }
  &[href*=vimeo]:before {
    content: '\\f30f';
  }
  &[href*=soundcloud]:before {
    content: '\\e801';
  }
  &[href*=youtube]:before {
    content: '\\ea38';
  }
  &[href*=twitter]:before {
    content: '\\f099';
  }
  &[href*=facebook]:before {
    content: '\\f09a';
  }
  &[href*=github]:before {
    content: '\\f09b';
  }
  &[href*=plus\\.google]:before {
    content: '\\002b';
  }
  &[href*=lastfm]:before {
    content: '\\f321';
  }
  &[href*=spotify]:before {
    content: '\\f327';
  }
  &[href*=mail]:before {
    content: '\\2709';
  }
  &[href*=atom]:before {
    content: '\\f09e';
  }
  &[href*=tumblr]:before {
    content: '\\e824';
  }
  &[href*=medium]:before {
    content: '\\e826';
  }
  &[href*=trello]:before {
    content: '\\e827';
  }
  &[href*=evernote]:before {
    content: '\\ea29';
  }
  &[href*=instagram]:before {
    content: '\\e82d';
  }
`;

export default ArrowA;
