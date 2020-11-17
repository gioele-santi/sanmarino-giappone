import React from "react"
import { Link, graphql } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from "../components/Layout"


export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const endpoint = "/notizie"
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="over-image-title has-text-weight-bold is-size-1"
          >
            Notizie
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-multiline">
                  {posts &&
                    posts.map(({ node: post }) => (
                      <div className="is-parent column is-6" key={post.id}>
                        <article
                          className={`blog-list-item tile is-child box notification ${
                            post.frontmatter.featuredpost ? 'is-featured' : ''
                          }`}
                        >
                          <header>
                            {post.frontmatter.featuredimage ? (
                              <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                            ) : null}
                            <p className="post-meta">
                              <Link
                                className="title has-text-primary is-size-4"
                                to={post.fields.slug}
                              >
                                {post.frontmatter.title}
                              </Link>
                              <span> &bull; </span>
                              <span className="subtitle is-size-5 is-block">
                                {post.frontmatter.date}
                              </span>
                            </p>
                          </header>
                          <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <Link className="button" to={post.fields.slug}>
                              Leggi tutto →
                            </Link>
                          </p>
                        </article>
                      </div>
                    ))}
                </div>
                {/* replace with /blog when done */}

                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    listStyle: 'none',
                    padding: 0,
                  }}
                >
                  {!isFirst && (
                    <Link to={prevPage} rel="prev">
                      ← Previous Page
                    </Link>
                  )}
                  {Array.from({ length: numPages }, (_, i) => (
                    <li
                      key={`pagination-number${i + 1}`}
                      style={{
                        margin: 0,
                      }}
                    >
                      <Link
                        to={`/${i === 0 ? '' : i + 1}`}
                        style={{
                          textDecoration: 'none',
                          color: i + 1 === currentPage ? '#ffffff' : '',
                          background: i + 1 === currentPage ? '#007acc' : '',
                        }}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  {!isLast && (
                    <Link to={nextPage} rel="next">
                      Next Page →
                    </Link>
                  )}
                </ul>

                {/* <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/notizie/2"> 
                    Recenti
                  </Link>
                  <Link className="btn" to="/notizie/2"> 
                    Precedenti
                  </Link>
                </div> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD/MM/YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`