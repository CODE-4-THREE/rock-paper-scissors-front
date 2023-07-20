import './Header.scss';
import { useState } from "react";


export default function Footer() {
  return (
    <header className='header-container'>
      <article className=''>
      <p>ROCK</p>
      <p>PAPER</p>
      <p>SCISSORS</p>
      </article>
      <aside className='header-container__score'>
        <p className='header-container__score-text'>SCORE</p>
        <p className='header-container__score'>12</p>
      </aside>
    </header>  )
}

