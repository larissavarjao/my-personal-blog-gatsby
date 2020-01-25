import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../seo.js';
import RecommendedPosts from '../RecommendedPosts';

import * as s from '../Post/style';

const BlogPost = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const date = data.markdownRemark.frontmatter.date;
  const timeToRead = data.markdownRemark.timeToRead;
  const description = data.markdownRemark.frontmatter.description;

  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    // Integrando o post com o layout através das tags Layout e SEO
    <Layout>
      <SEO title={title} />
      <s.PostHeader>
        <s.PostDate>
          {date} • {timeToRead} min de leitura
        </s.PostDate>
        <s.PostTitle>{title}</s.PostTitle>
        <s.PostDescription>{description}</s.PostDescription>
      </s.PostHeader>
      <s.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </s.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;