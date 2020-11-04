import React from 'react';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head'

import { Container, SearchBox } from '../src/styles/pages/Index/styles';

function Home() {

  const [pokemonInput, setPokemonInput] = useState("");

  return (
    <Container>
      <Head>
        <title>Pokémon Search</title>
      </Head>
      <SearchBox>
        <h1>Pokémon<span>Search</span></h1>
        <input type="text" placeholder="Search by ID" onChange={event => setPokemonInput(event.target.value)} />
        <Link href={`/${pokemonInput}`}>Search</Link>
      </SearchBox>
    </Container>
  )
}


export default Home;

