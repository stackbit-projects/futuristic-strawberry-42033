import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image', null) && (
                  <div className="cell block-preview">
                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title underline">{_.get(section, 'title', null)}</h2>
                    )}
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content', null))}
                    </div>
                    {_.get(section, 'actions', null) && (
                    <div className="block-buttons">
                      <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                      <script type="text/javascript" src="https://makios.formstack.com/forms/js.php/offer_code_test"></script><noscript><a href="https://makios.formstack.com/forms/offer_code_test" title="Online Form">Online Form - Offer Code Test</a></noscript>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
