import React from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import Header from "../components/header";
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ location, children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                title
                }
            }
        }
  `)
    return (
        <TransitionProvider
            location={location}
            mode="successive"
            enter={{
                opacity: 0,
                transform: "translate3d(0,0,0) scale3d(1, 1, 1) rotate(0deg)",
                config: {
                    mass: 1,
                    tension: 210,
                    friction: 20,
                    clamp: true
                },
                onRest: () => {
                    console.log("Hello, World!");
                }
            }}
            usual={{
                opacity: 1,
                transform: "translate3d(0,0,0) scale3d(1, 1, 1) rotate(0deg)"
            }}
            leave={{
                opacity: 0,
                transform: "translate3d(0,0,0) scale3d(1, 1, 1) rotate(0deg)",
                config: {
                    duration: 150
                }
            }}
        >
            <Header siteTitle={data.site.siteMetadata.title} />
            <TransitionViews>
                {children}
            </TransitionViews>
        </TransitionProvider>
    );
};

export default Layout;