import Head from 'next/head';
import { useState } from 'react';

import { initiateCheckout } from '../lib/payments.js'

import { FaShoppingCart } from 'react-icons/fa';

import useCart from '../hooks/use-cart.solution.js';


import Image from 'next/image';
import styles from '../styles/Home.module.css';
import products from '../products.json';

export default function Home() {

  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Your locally sourced supplier of all psychotropic herbs and flora!
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <image src={image} alt={title} />
                    <h3>{ title }</h3>
                    <p>${ price }</p>
                    <p>{ description }</p>
                  </a>
                </Link>
                <p>
                  <button className={styles.button} onClick={() => addToCart({ id })}>
                    Buy
                  </button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <image src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
  
  
  