import Puppy from "../Assets/Images/front-view-beautiful-dog-with-copy-space.jpg";
import Paws from "../Assets/Images/Paws-icon.png";
import PuppyIcon from "../Assets/Images/Puppy-icon.png";
import Bulldog from "../Assets/Images/adorable-white-bulldog-puppy-portrait.jpg";
import Bone from "../Assets/Images/Bone-icon.png";
import HealthIcon from "../Assets/Images/Paws-icon-2.png";
import Wistle from "../Assets/Images/Whistle-icon.png";
import "./HeroSection.css";

function Hero() {
    return (
        <section className='flex justify-between items-center py-12 px-8'>
            <section>
                <h1 className='hero__title'>
                    <span className='flex items-center'>
                        Your
                        <figure className='hero__figure hero__figure-main'>
                            <img src={Puppy} alt='Puppy' />
                        </figure>
                    </span>
                    pupp's best
                    <br />
                    <span className='flex items-center'>
                        friend
                        <figure className='hero__figure hero__figure-second'>
                            <img src={Paws} alt='Paws Icon' />
                        </figure>
                    </span>
                </h1>
                <p className='w-1/2 pt-5 font-medium'>
                    Training, grooming to nutrition & exercoses, there's caring
                    worth often become the family.
                </p>
                <div className='mt-4'>
                    <button className='hero__button font-medium text-sm'>
                        <span className='absolute flex h-3 w-3 -top-1 right-1'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-3 w-3 bg-orange-500'></span>
                        </span>
                        Book a Schedule |
                        <img src={PuppyIcon} alt='Puppy icon' />
                    </button>
                </div>
            </section>
            <section className='flex items-center justify-center w-1/2 relative'>
                <figure className='hero__bulldog'>
                    <img src={Bulldog} alt='Bulldog' />
                </figure>
                <figure className='hero__bone'>
                    <img
                        className='hero__bone-icon'
                        src={Bone}
                        alt='Bone icon'
                    />
                </figure>
                <figure className='hero__health-icon'>
                    <img src={HealthIcon} alt='Health care' />
                </figure>
                <figure className='hero__wistle-icon'>
                    <img src={Wistle} alt='Wistle' />
                </figure>
            </section>
        </section>
    );
}

export default Hero;
