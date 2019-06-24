import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {
  CONTENT_COLUMNS_SPAN,
  CONTENT_COLUMNS_START,
  DESKTOP_BREAKPOINT,
  FOOTER_LISTS_COLUMNS_SPAN,
  LINE_HEIGHT,
  QR_CODE_WIDTH,
} from '../variables';

// https://styled-icons.js.org/

import ArrowA from './ArrowA';

import { ArrowRight } from 'styled-icons/typicons/ArrowRight';

import {
  CreativeCommons,
  CreativeCommonsBy,
  CreativeCommonsNc,
  CreativeCommonsSa,
  Evernote,
  FacebookF,
  Github,
  Instagram,
  MediumM,
  Soundcloud,
  Trello,
  Twitter,
  VimeoV,
  Youtube,
} from 'styled-icons/fa-brands';

import { Envelope } from 'styled-icons/fa-regular/Envelope';
import { Rss } from 'styled-icons/fa-solid/Rss';

const Arrow = styled(ArrowRight).attrs({ size: '24px' })`
  vertical-align: text-top;
`;

const CreativeCommonsIcon = styled(CreativeCommons).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const CreativeCommonsByIcon = styled(CreativeCommonsBy).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const CreativeCommonsNcIcon = styled(CreativeCommonsNc).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const CreativeCommonsSaIcon = styled(CreativeCommonsSa).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const EnvelopeIcon = styled(Envelope).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const EvernoteLogo = styled(Evernote).attrs({ size: '16px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const GithubLogo = styled(Github).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const FacebookLogo = styled(FacebookF).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const InstagramLogo = styled(Instagram).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const InstapaperLogo = styled.span`
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 700;
  margin-right: 6px;
  padding: 0 4px;
  text-transform: uppercase;
`;

const MediumLogo = styled(MediumM).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const RssIcon = styled(Rss).attrs({ size: '14px' })`
  vertical-align: -1;
  margin-right: 6px;
`;

const SoundcloudLogo = styled(Soundcloud).attrs({ size: '18px' })`
  vertical-align: top;
  margin-right: 6px;
`;

const TrelloLogo = styled(Trello).attrs({ size: '16px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const TwitterLogo = styled(Twitter).attrs({ size: '14px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const VimeoLogo = styled(VimeoV).attrs({ size: '16px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const YoutubeLogo = styled(Youtube).attrs({ size: '16px' })`
  vertical-align: -1px;
  margin-right: 6px;
`;

const Wrapper = styled.footer`
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;

const Nav = styled.nav`
  margin: 0 0 ${LINE_HEIGHT} 0;
  text-transform: lowercase;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    display: grid;
    grid-column-gap: ${LINE_HEIGHT};
    grid-template-columns: repeat(${CONTENT_COLUMNS_SPAN}, 1fr);
    margin: 0;
    width: 100%;
  }
  a {
    position: relative;
  }
`;

const Promos = styled.ul`
  margin: 0 0 ${LINE_HEIGHT} 0;
  padding: 0;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    grid-column-start: 1;
    grid-column-end: span ${FOOTER_LISTS_COLUMNS_SPAN};
    margin: 0;
  }
`;

const SectionLinks = styled.ul`
  columns: 2;
  margin: 0 0 ${LINE_HEIGHT} 0;
  padding: 0;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    grid-column-start: ${FOOTER_LISTS_COLUMNS_SPAN + 1};
    grid-column-end: span ${FOOTER_LISTS_COLUMNS_SPAN};
    margin: 0;
  }
`;

const ExternalLinks = styled.ul`
  columns: 2;
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    grid-column-start: ${(FOOTER_LISTS_COLUMNS_SPAN * 2) + 1};
    grid-column-end: span ${FOOTER_LISTS_COLUMNS_SPAN};
  }
`;

const QrCodeImg = styled.img`
  clear: both;
  display: block;
  margin-top: ${LINE_HEIGHT};
  width: ${QR_CODE_WIDTH};
  @media screen {
    display: none;
  }
`;

export default () => (
  <Wrapper>
    <Nav>
      <Promos>
        <li><a href="/texts/378"><Arrow />The Reading Machine Revisited</a></li>
        <li><a href="/texts/379"><Arrow />The Amanuensis</a></li>
        <li><a href="/texts/164"><Arrow />The Reading Machine</a></li>
        <li><a href="/texts/112"><Arrow />Packing My Library</a></li>
        <li><a href="/pantography"><Arrow />Pantography</a></li>
        <li><a href="/wutz"><Arrow />Jean Paul: Schulmeisterlein Wutz</a></li>
      </Promos>
      <SectionLinks>
        <li><a href="/"><Arrow />Home</a></li>
        <li><a href="/texts"><Arrow />Texts</a></li>
        <li><a href="/citations"><Arrow />Citations</a></li>
        <li><a href="/links"><Arrow />Links</a></li>
        <li><a href="/bibliography"><Arrow />Bibliography</a></li>
        <li><a href="/tags"><Arrow />Tags</a></li>
        <li><a href="/remix"><Arrow />Remix</a></li>
        <li><a href="/privacy"><Arrow />Privacy</a></li>
        <li><a href="/api"><Arrow />API</a></li>
        <li><a href="/code"><Arrow />Code</a></li>
        <li><a href="/colophon"><Arrow />Colophon</a></li>
        <li><a href="mailto:joe@joegatt.net"><EnvelopeIcon />joe@joegatt.net</a></li>
      </SectionLinks>
      <ExternalLinks>
        <li><a href="https://twitter.com/joegattnet"><TwitterLogo />Twitter</a></li>
        <li><a href="https://www.instagram.com/joegattnet/"><InstagramLogo />Instagram</a></li>
        <li><a href="https://facebook.com/joegattnet"><FacebookLogo />Facebook</a></li>
        <li><a href="https://youtube.com/joegatt0net"><YoutubeLogo />Youtube</a></li>
        <li><a href="https://vimeo.com/joegattnet"><VimeoLogo />Vimeo</a></li>
        <li><a href="https://soundcloud.com/joegattnet"><SoundcloudLogo />Soundcloud</a></li>
        <li><a href="https://github.com/joegattnet"><GithubLogo />Github</a></li>
        <li><a href="https://trello.com/joegattnet"><TrelloLogo />Trello</a></li>
        <li><a href="https://www.instapaper.com/p/joegattnet"><InstapaperLogo>I</InstapaperLogo>Instapaper</a></li>
        <li><a href="https://medium.com/@joegattnet"><MediumLogo />Medium</a></li>
        <li><a href="https://www.evernote.com/pub/joegatt/joegatt.net"><EvernoteLogo />Evernote</a></li>
        <li><a href="http://joegatt.net/texts.atom"><RssIcon />Atom feed</a></li>
      </ExternalLinks>
    </Nav>
    <small className="copyright">
      <CreativeCommonsIcon />
      <CreativeCommonsByIcon />
      <CreativeCommonsNcIcon />
      <CreativeCommonsSaIcon />
      Except as otherwise stated, all content on <span>joegatt.net</span> is <span className="byline author vcard">by <a href="http://joegatt.net" className="fn">Joe Gatt</a></span> and licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</a>.</small>
    <QrCodeImg className="qr_code" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;rnd=0.987998181888011&amp;chl=http://joegatt.net/" alt="QR code" />
  </Wrapper>
);
