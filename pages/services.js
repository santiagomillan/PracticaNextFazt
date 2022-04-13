import React from 'react'
//import Navigation from '../components/navigation'
import Container from '../components/Container';
import Head from 'next/dist/shared/lib/head';

const About = () => {
  return (
    <div>
        <Container>
            <Head>
                <title>Next.js Project-Services</title> 
            </Head>
            <h1>Srvices</h1>
            <p>Welcome to the Next.js documentation! If you're new to Next.js, we recommend starting with the learn course.
The interactive course with quizzes will guide you through everything you need to know to use Next.js. 
If you have questions about anything related to Next.js, you're always welcome to ask our community on GitHub Discussions.</p>
        </Container>
        
    </div>
  )
}

export default About