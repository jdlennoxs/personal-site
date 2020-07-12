import React from "react"

export default () => {
    return (
        <p>
            © { new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
    )
}