/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectNotes, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import NotesList from 'components/NotesList';
import Text from 'components/Text';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Input from './Input';
import messages from './messages';
import { loadNotes } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load notes
   */
   componentWillMount() {
     this.annotations = [];
     this.annotationMarks = [];
   }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }

    let minimum = 0; //$('.body').offset().top
    // if $('#single_map:visible').length > 0 then minimum += $('#single_map').outerHeight(true)
    let newTop = minimum;
    let correctedTop = minimum;
    this.annotationMarks.forEach((annotationMark, index) => {
      newTop = annotationMark.offsetTop;
      correctedTop = (newTop <= minimum ? minimum : newTop);
      this.annotations[index].style.top = `${correctedTop}px`;
      minimum = correctedTop + this.annotations[index].offsetHeight;
    });

    const reversedAnnotations = this.annotations.reverse();
    let maximum = this.annotationsContainer.offsetHeight;
    let newBottom;

    reversedAnnotations.forEach((annotation, index) => {
      newTop = annotation.offsetTop;
      newBottom = newTop + annotation.offsetHeight;
      correctedTop = newBottom > maximum ? maximum - annotation.offsetHeight : newTop;
      this.annotations[index].style.top = `${correctedTop}px`;
      maximum = correctedTop;
    });
  }

  render() {
    const { loading, error, notes } = this.props;
    const NotesListProps = {
      loading,
      error,
      notes,
    };

    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </label>
          </Form>
          <NotesList {...NotesListProps} />
        </div>

        <section id="content">
          <Text>
            <section id="body">
              <p id="paragraph-1">At HKW’s <a href="https://www.hkw.de/en/programm/projekte/veranstaltung/p_100677.php">The Principle of the City</a> tonight, <a href="http://www.gsd.harvard.edu/#/people/eve-blau.html">Eve Blau</a> was one of the speakers offering a reaction to Richard Sennet’s (et al) discussion <a href="#annotation-1" id="annotation-mark-1" ref={(annotationMark) => { this.annotationMarks[0] = annotationMark; }}>1</a>. Sennett had referred to one of his central ideas, the <a href="http://www.richardsennett.com/site/SENN/UploadedResources/The%20Open%20City.pdf">Open City</a>, <a href="#annotation-2" id="annotation-mark-2" ref={(annotationMark) => { this.annotationMarks[1] = annotationMark; }}>2</a> and mentioned that he has become interested in open software, specifically Linux. Blau contrasted this form of open-ness with Umberto Eco’s idea of the open work. <a href="#annotation-3" id="annotation-mark-3" ref={(annotationMark) => { this.annotationMarks[2] = annotationMark; }}>3</a>.</p>
              <p id="paragraph-2">Insofar as I’d ever thought about it, I realise that I had always taken “open” to mean the same thing in both cases. For Eco, a work is open in the sense that it can be “closed off” in one of many ways by the reader; open in the software (and, perhaps, Sennett’s) sense is probably something else. There is not really the distinction of reader/producer. The readers are assumed to be future producers.</p>
              <p id="paragraph-3">Having said that, it is also a principle of open software, that the software can be put to different uses, read differently, closed off’ differently in Eco’s sense.
                <a href="#annotation-4" id="annotation-mark-4" ref={(annotationMark) => { this.annotationMarks[3] = annotationMark; }}>4</a>
              </p>
              <p id="paragraph-4">While listening to Sennett, the military term of art, open city kept coming to mind. An open city is a demilitarised city, one that is not defended and therefore—in international law—not legitimately<a href="#annotation-5" id="annotation-mark-5" ref={(annotationMark) => { this.annotationMarks[4] = annotationMark; }}>5</a> attacked.</p>
            </section>
            <section id="annotations" className="side-annotations" ref={(annotationsContainer) => { this.annotationsContainer = annotationsContainer; }}>
              <header>
                <h3>Annotations</h3>
              </header>
              <ol>
                <li id="annotation-1" ref={(annotation) => { this.annotations[0] = annotation; }}>
                  <a href="#annotation-mark-1">1</a>Blau’s statement is available
                  <a href="http://hkw.de/de/app/mediathek/video/26489">here</a>, starting at 73:30
                </li>
                <li id="annotation-2" ref={(annotation) => { this.annotations[1] = annotation; }}>
                  <a href="#annotation-mark-2">2</a>See also,
                  <a href="https://www.youtube.com/watch?v=eEx1apBAS9A">lecture</a> delivered at Harvard GSD.
                </li>
                <li id="annotation-3" ref={(annotation) => { this.annotations[2] = annotation; }}>
                  <a href="#annotation-mark-3">3</a>See, for instance, The Role of the Reader
                </li>
                <li id="annotation-4" ref={(annotation) => { this.annotations[3] = annotation; }}>
                  <a href="#annotation-mark-4">4</a>Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word.
                </li>
                <li id="annotation-5" ref={(annotation) => { this.annotations[4] = annotation; }}>
                  <a href="#annotation-mark-5">5</a>Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word. Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word. Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word.
                </li>
              </ol>
            </section>
          </Text>
          <aside>
            <nav id="tags">
              <header>
                <h3>
                  Tags
                </h3>
              </header>
              <ul className="tags">
                <li>
                  <a rel="tag" href="/tags/blog">blog</a>
                </li>
              </ul>
            </nav><nav id="versions">
              <header>
                <h3>
                  Versions
                </h3>
              </header>
              <ol>
                <li>
                  <a href="/texts/212/v/3">v3 (<time title="Sun, 08 Nov 2015 11:33:43 +0000">2 years ago</time>, 195 words, <span title="Damerau-Levenshtein edit distance between this version and the previous one">127 changes</span>)</a>
                </li>
                <li>
                  <a href="/texts/212/v/2">v2 (<time title="Mon, 21 Apr 2014 21:27:28 +0000">3 years ago</time>, 195 words, <span title="Damerau-Levenshtein edit distance between this version and the previous one">122 changes</span>)</a>
                </li>
                <li>
                  <a href="/texts/212/v/1">v1 (<time title="Thu, 03 Apr 2014 21:47:48 +0000">3 years ago</time>, 194 words, <span title="Damerau-Levenshtein edit distance between this version and the previous one">1,722 changes</span>)</a>
                </li>
              </ol>
            </nav>
          </aside>
        </section>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  notes: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadNotes());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
