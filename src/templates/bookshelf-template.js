// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const BookshelfTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Bookshelf - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Bookshelf">
      <h3>in development ;-)</h3>
      <p>but i'm currently reading: Kafka on the Shore - Haruki Murakami</p>  
      </Page>
    </Layout>
  );
};

export default BookshelfTemplate;
