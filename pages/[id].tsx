import React from 'react';
import { GetStaticProps, GetServerSideProps, GetStaticPaths } from 'next';
import axios from 'axios';
import Head from 'next/head'

import { Container, PokemonBox, PokemonStats, PokemonTypes, PokemonColors } from '../src/styles/pages/PokemonPage/styles';

import types from '../src/data/types';

function PokemonPage({ result }) {

    if (!result) {
        return (<Container><PokemonBox></PokemonBox></Container>);
    }   

  return (
    <Container>
      <Head>
        <title>Pokémon Search - {result.name.charAt(0).toUpperCase() + result.name.slice(1)}</title>
        <meta name="description" content={result.name} />       
      </Head>
      <PokemonBox>
        <span>#{result.id}</span>
        <h1>{result.name.charAt(0).toUpperCase() + result.name.slice(1)}</h1>
        <img src={result.sprites.front_default}  alt="a"/>
        <PokemonStats>
            {result.stats.map(stat => (
                <div key={stat.stat_name}>
                    <h3>{stat.stat.name}</h3>
                    <p>{stat.base_stat}</p>
                </div>
            ))}
        </PokemonStats>
        <PokemonTypes>
            {result.types.map(type => (
                <PokemonColors color={types[type.type.name]} key={type.type.name}>
                    <h2>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</h2>
                </PokemonColors>
            ))}
        </PokemonTypes>
      </PokemonBox>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    
    const { id } = context.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const result = await response.data;

    return {
      props: { 
        result
       },
       revalidate: 10,
    }   
}

export const getStaticPaths: GetStaticPaths = async () => {
  

    return {
      paths: [
          {params: { id: '1' }},
      ],
      fallback: false,
    }   
}



export default PokemonPage;

