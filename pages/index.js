import React from 'react';
//import Navigation from '../components/navigation'
import Container from '../components/Container';
import Head from 'next/dist/shared/lib/head';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users';

const Index = (props) => {
    ///console.log(props)
  return (
      <div>
        <Container>
            <Head>
                <title>Next.js Project-Home</title> 
            </Head>
            <h1>Next</h1>
            <Users users={props.users}/>
        </Container>
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    //console.log(data)
    return {users: resJSON.data}
}

export default Index