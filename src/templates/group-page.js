import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const GroupPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  content,
  contentComponent,
}) => {

  const PageContent = contentComponent || Content
  return(
  <div className="content">
    <div
      className="full-width-image-container margin-top-0 header-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="over-image-title has-text-weight-bold is-size-1"
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PageContent className="content" content={content} /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

GroupPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const GroupPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data


  return (
    <Layout>
      <GroupPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

GroupPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GroupPage

export const groupPageQuery = graphql`
  query GroupPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }

      }
    }
  }
`
