import { Link } from "gatsby"
import React from "react"
import tw from 'twin.macro'

const Header = tw.header`
  flex
  flex-col
  justify-center
  h-full 
  space-y-5
  bg-red-800
`

export default () => (
  <Header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Title
        </Link>
      </h1>
    </div>
  </Header>
)
