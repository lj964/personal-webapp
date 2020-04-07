import React from "react"
import Typist from 'react-typist';
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (

  < Layout >
    <SEO title="Startseite" />
    <h1>Loay Al-Suraj</h1>
    <p>Full Stack Web Developer.</p>
    <Typist delay={500}>
      <span>Codierung ist meine <strong>Leidenschaft</strong> 😎</span>
      <Typist.Backspace count={35} delay={2000} />
      <span>Ich lerne ziemlich schnell und bin immer daran interessiert, neue <strong>Technologien</strong> zu lernen 👌</span>
      <Typist.Backspace count={91} delay={2000} />
      <span>Ich teile <strong>gerne</strong>, was ich weiß 🙂</span>
      <Typist.Backspace count={32} delay={2000} />
      <span>Ich denke, eines meiner <strong>Talente</strong> ist das Lösen von Problemen 😉</span>
      <Typist.Backspace count={62} delay={2000} />
      <span>Diese Seite befindet sich im Aufbau. 🙄</span>
    </Typist>
  </Layout >
)

export default IndexPage
