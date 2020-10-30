import React from 'react';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Container, SearchBox } from '../src/styles/pages/Index/styles';

function Home() {

  const [pokemonInput, setPokemonInput] = useState("");

  return (
    <Container>
      <SearchBox>
        <h1>Pokemon<span>Search</span></h1>
        <input type="text" placeholder="Search by ID" onChange={event => setPokemonInput(event.target.value)} />
        <Link href={`/${pokemonInput}`}>Search</Link>
      </SearchBox>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  
    return {
      props: { 

       },
    }   
}

export default Home;

