import Header from "../Components/Header";
import Hero from "../Components/HeroSection";

function Home() {
    return (
        <section className='w-4/5 mx-auto'>
            <Header />
            <Hero />
            <section>
                <section>
                    <figure>
                        <img src='' alt='Puppy' />
                    </figure>
                </section>
                <section></section>
            </section>
        </section>
    );
}

export default Home;
