// import { useState } from "react";
import Header from "../Components/Header";
import Hero from "../Components/HeroSection";
import Labrador from "../Assets/Images/labrador-retriever.jpg";
import { Link } from "react-router-dom";
import SpiningText from "../Components/SpiningText";

function Home() {
    return (
        <section className='w-4/5 mx-auto'>
            <Header />
            <Hero />
            <section>
                <section className='home__card home__card-main'>
                    <figure className='home__figure'>
                        <img src={Labrador} alt='Puppy' />
                        <figcaption>
                            <h2>Learn how to care puppy's</h2>
                            <Link to='/Adiestramiento'>Read Article</Link>
                        </figcaption>
                    </figure>
                    <SpiningText text='Educaion - Adiestramiento - Alimentacion - ' />
                </section>
                <section></section>
            </section>
        </section>
    );
}

export default Home;
