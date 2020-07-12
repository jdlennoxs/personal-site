import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import { tomorrowNightEighties as theme } from "react-syntax-highlighter/dist/esm/styles/hljs"

SyntaxHighlighter.registerLanguage('javascript', js);

const CodeBlock = (props) => (
    <SyntaxHighlighter
        style={theme}
        wrapLines
        customStyle={{
            padding: 20,
            paddingTop: 15,
            paddingBottom: 0,
            borderRadius: 5,
            margin: 0,
        }}
        showLineNumbers
        lineNumberContainerProps={{
            style: { opacity: 0.5, float: "left", paddingRight: "10px" },
        }}
        {...props}
    />
)


export default ({ data: { mdx } }) => {
    const { title } = mdx.frontmatter
    const shortcodes = { Link, code: CodeBlock }

    return (
        <div>
            <SEO
                title={title}
            />
            <h1>{mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    )
}

export const ArticlePreview = ({ post }) => {
    const { title } = post.frontmatter
    const { slug } = post.fields
    // const shortcodes = { Link, code: CodeBlock }

    return (
        <Link to={slug} className="link" id="path">
            {title}
        </Link>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`