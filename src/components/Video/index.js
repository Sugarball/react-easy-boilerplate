import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */

const metaData = {
  title: 'Video',
  description: 'Jayden',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Video extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <iframe height='498' width='510' src="http://player.youku.com/embed/XMTQ3NjYwOTg2NA==" frameBorder='0' allowFullScreen></iframe>
      </section>
    );
  }
}
