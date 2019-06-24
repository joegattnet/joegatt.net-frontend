/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'Except as otherwise stated, all content on <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">joegatt.net</span> is <span class="byline author vcard">by <a xmlns:cc="http://creativecommons.org/ns#" href="http://joegatt.net" property="cc:attributionName" rel="cc:attributionURL" class="fn">Joe Gatt</a></span> and licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence">CC BY-NC-SA 4.0</a>.',
  },
  authorMessage: {
    id: 'boilerplate.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
