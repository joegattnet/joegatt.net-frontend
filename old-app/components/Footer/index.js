import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {
  CONTENT_COLUMNS_SPAN,
  DESKTOP_BREAKPOINT,
  FOOTER_LISTS_COLUMNS_SPAN,
  LINE_HEIGHT,
  QR_CODE_WIDTH,
} from 'variables';
import A from 'components/A';
import ArrowA from 'components/ArrowA';
import Wrapper from './Wrapper';
import messages from './messages';

const Nav = styled.nav`
  margin: 0 0 ${LINE_HEIGHT} 0;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    display: grid;
    grid-column-gap: ${LINE_HEIGHT};
    grid-template-columns: repeat(${CONTENT_COLUMNS_SPAN}, 1fr);
    margin: 0;
    width: 100%;
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

function Footer() {
  return (
    <Wrapper>
      <Nav>
        <Promos>
          <li><ArrowA href="/texts/378">The Reading Machine Revisited</ArrowA></li>
          <li><ArrowA href="/texts/379">The Amanuensis</ArrowA></li>
          <li><ArrowA href="/texts/164">The Reading Machine</ArrowA></li>
          <li><ArrowA href="/texts/112">Packing My Library</ArrowA></li>
          <li><ArrowA href="/pantography">Pantography</ArrowA></li>
          <li><ArrowA href="/wutz">Jean Paul: Schulmeisterlein Wutz</ArrowA></li>
        </Promos>
        <SectionLinks>
          <li><ArrowA href="/">Home</ArrowA></li>
          <li><ArrowA href="/texts">Texts</ArrowA></li>
          <li><ArrowA href="/citations">Citations</ArrowA></li>
          <li><ArrowA href="/links">Links</ArrowA></li>
          <li><ArrowA href="/bibliography">Bibliography</ArrowA></li>
          <li><ArrowA href="/tags">Tags</ArrowA></li>
          <li><ArrowA href="/remix">Remix</ArrowA></li>
          <li><ArrowA href="/privacy">Privacy</ArrowA></li>
          <li><ArrowA href="/api">API</ArrowA></li>
          <li><ArrowA href="/code">Code</ArrowA></li>
          <li><ArrowA href="/colophon">Colophon</ArrowA></li>
          <li><ArrowA href="mailto:joe@joegatt.net">joe@joegatt.net</ArrowA></li>
        </SectionLinks>
        <ExternalLinks>
          <li><ArrowA href="https://twitter.com/joegattnet">Twitter</ArrowA></li>
          <li><ArrowA href="https://www.instagram.com/joegattnet/">Instagram</ArrowA></li>
          <li><ArrowA href="https://facebook.com/joegattnet">Facebook</ArrowA></li>
          <li><ArrowA href="https://youtube.com/joegatt0net">Youtube</ArrowA></li>
          <li><ArrowA href="https://vimeo.com/joegattnet">Vimeo</ArrowA></li>
          <li><ArrowA href="https://soundcloud.com/joegattnet">Soundcloud</ArrowA></li>
          <li><ArrowA href="https://github.com/joegattnet">Github</ArrowA></li>
          <li><ArrowA href="https://trello.com/joegattnet">Trello</ArrowA></li>
          <li><ArrowA href="https://www.instapaper.com/p/joegattnet">Instapaper</ArrowA></li>
          <li><ArrowA href="https://medium.com/@joegattnet">Medium</ArrowA></li>
          <li><ArrowA href="https://www.evernote.com/pub/joegatt/joegatt.net">Evernote</ArrowA></li>
          <li><ArrowA href="http://joegatt.net/texts.atom">Atom feed</ArrowA></li>
        </ExternalLinks>
      </Nav>
      <small><FormattedMessage {...messages.licenseMessage} /></small>
      <small className="copyright">Except as otherwise stated, all content on <span>joegatt.net</span> is <span className="byline author vcard">by <A href="http://joegatt.net" className="fn">Joe Gatt</A></span> and licensed under <A rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</A>.</small>
      <QrCodeImg className="qr_code" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;rnd=0.987998181888011&amp;chl=http://joegatt.net/" alt="QR code" />
    </Wrapper>
  );
}

export default Footer;
