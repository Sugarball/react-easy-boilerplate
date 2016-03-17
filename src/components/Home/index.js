import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */

const metaData = {
  title: 'Home',
  description: 'Jayden',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <h1>Hello,React</h1>
      </section>
    );
  }
}
