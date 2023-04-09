import React from 'react';
import neasher from "../../Images/neasher.png";
import anwarul from "../../Images/anwarul.jpeg";

const About = () => {
    return (
        <div>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                    <div className='w-full'>
                        <img src={neasher} className="rounded-lg shadow-xl" alt='neasher' />
                        <p className='text-center font-teko mt-2'>Neasher Ahmed</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold font-teko text-primary">The Future-Focused Proprietor of NR International.</h1>
                        <p className="py-6 font-barlow leading-loose">
                            NR International is a leading export-import company based in Bangladesh, founded in 2018 by our proprietor Neasher Ahmed.
                            <br />
                            <br />Our company specializes in the import of high-quality coal, stone, and onion products from reputable suppliers around the world. With our commitment to excellence and sustainability, we ensure that all our products meet the highest standards of quality, reliability, and ethical sourcing.
                            <br />
                            <br />
                            At NR International, we take pride in our customer-centric approach, providing prompt and reliable delivery services to clients all over Bangladesh. With years of experience and expertise in the industry, we have built a strong reputation for our exceptional products, competitive pricing, and outstanding customer service.
                            <br /> <br />
                            Our proprietor Neasher Ahmed is a dedicated business professional who manages NR International full-time while also pursuing a degree in Computer Science and Engineering at Rajshahi University. With a strong focus on innovation and technology, we strive to continuously improve and enhance our services to better serve our clients and contribute to the growth and development of Bangladesh's import-export industry.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                    <div className='w-full'>
                        <img src={anwarul} className="rounded-lg shadow-xl" alt='neasher' />
                        <p className='text-center font-teko mt-2'>Anwarul Islam</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold font-teko text-primary">The Visionary Founder and Manager of NR International.</h1>
                        <p className="py-6 font-barlow leading-loose">
                            At NR International, our success wouldn't be possible without the guidance and leadership of our founder and managing director, Anwarul Islam. With decades of experience in the import-export industry and a deep passion for excellence and sustainability, Anwarul Islam has been the driving force behind our company's growth and success.                            <br />
                            <br />
                            As a family business, Anwarul Islam has managed everything from import LC (letter of credit) to supplier and buyer relationships, with a commitment to reliability, ethical sourcing, and customer satisfaction. His technical ideas and business acumen have been invaluable in building and expanding NR International's operations, and his dedication and hard work are an inspiration to all of us.
                            <br />
                            <br />
                            Anwarul Islam is a true superstar in our company, and we are proud to showcase his image on our website. As Neasher Ahmed's father and mentor, Anwarul Islam has imparted invaluable knowledge and skills that have enabled Neasher Ahmed to pursue his studies in computer science and engineering while also managing the business full-time.
                            <br /> <br />
                            At NR International, we are proud to be a family business built on a foundation of excellence, sustainability, and innovation, and Anwarul Islam is at the heart of everything we do. Choose NR International for a reliable and sustainable solution to your coal, stone, and onion needs, and experience the difference that our family's passion and expertise can make.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;