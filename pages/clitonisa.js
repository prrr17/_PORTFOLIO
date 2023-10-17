import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Clito1 from '../public/Clitonisa/clito1.png';
import Armario from '../public/Clitonisa/armario.png';
import CajeroAmor from '../public/Clitonisa/cajero_amor.png';
import CajeroAutocobro from '../public/Clitonisa/cajero_autocobro.png';
import CajeroFila from '../public/Clitonisa/cajero_flla.png';
import GymJagger from '../public/Clitonisa/gym_jagger.png';
import GymRosa from '../public/Clitonisa/gym_rosa.png';
import Pizza from '../public/Clitonisa/pizza_guy.png';
import Profecia from '../public/Clitonisa/profecia.png';
import Satys from '../public/Clitonisa/satys.png';
import Vacaciones from '../public/Clitonisa/vacaciones.png';
import CieloBg from '../public/Clitonisa/cielo.png';
// import DropsBg from '../public/Clitonisa/drops.png';
import FadingBg from '../public/Clitonisa/fadding.png';
import PizzaBg from '../public/Clitonisa/pizza.png';
// import NeonBg from '../public/Clitonisa/neon.png';

const clitonisa = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} — La Clitonisa</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <section
        className={`min-vh-100 w-100 ps-2 mx-auto`}
        id='clitonisa_project'
        alt='Explanation of the project'
      >
        <div className={`container ${utilStyles.textCenter}`}>
          <h1 className={`${utilStyles.clitoTitle1}`}>La Clitonisa</h1>

          <Nav.Link href='#clitonisa_illustrations'>
            <h4 className={`${utilStyles.clitoText} ${utilStyles.underlined}`}>
              Scroll to Pictures{' '}
            </h4>{' '}
            <p className={`${utilStyles.arrowDown}`}></p>
            <br></br>
          </Nav.Link>
        </div>

        <div className='container'>
          {/* First Row */}
          <div className='row'>
            <div className='col-md-12 col-lg-6 ps-4'>
              <h2 className={`${utilStyles.clitoTitle2}`}> Project Overview</h2>
              <p className={`${utilStyles.clitoText}`}>
                I collaborated with Sandra, the author of the project, to bring
                her comedic Instagram page idea, 'La Clitonisa,' to life.
              </p>
              <br></br>
              <h2 className={`${utilStyles.clitoTitle2}`}>
                Branding and Visual Identity
              </h2>
              <p className={`${utilStyles.clitoText}`}>
                I played a pivotal role in establishing the visual identity of
                'La Clitonisa.' This included creating a distinct color palette
                and selecting suitable fonts to ensure brand consistency.
              </p>
              <br></br>
              <h2 className={`${utilStyles.clitoTitle2}`}>
                Character Refinement and Coloring
              </h2>
              <p className={`${utilStyles.clitoText}`}>
                I was responsible for designing the main character, 'La
                Clitonisa', after Sandra's sketches, ensuring her appearance
                matched the comedic and relatable tone of the content.
                Additionally, I created the faces, bodies, and distinctive
                features for other characters featured in the posts.
              </p>
              <br></br>
            </div>
            <div className='col-md-12 col-lg-6'>
              <Image
                src={CieloBg}
                alt='Cielo Background'
                width={800}
                height={600}
              />
            </div>
          </div>
          {/* Second Row */}
          <div className='row'>
            <div className='col-md-12 col-lg-6'>
              <h2 className={`${utilStyles.clitoTitle2}`}>
                Illustration and Artwork
              </h2>
              <p className={`${utilStyles.clitoText}`}>
                Using Procreate, I transformed Sandra's sketches and concepts
                into polished, professional illustrations. This involved
                meticulous attention to detail and a keen understanding of the
                desired humorous aesthetic.
              </p>
              <br></br>
              <h2 className={`${utilStyles.clitoTitle2}`}>Content Creation</h2>
              <p className={`${utilStyles.clitoText}`}>
                I translated Sandra's ideas and explanations into visually
                engaging vignettes, effectively bridging the gap between
                real-world experiences and her dating life, all while infusing
                humor into each post.
              </p>
              <h2 className={`${utilStyles.clitoTitle2}`}>
                Adaptation and Creativity
              </h2>
              <p className={`${utilStyles.clitoText}`}>
                Throughout the project, I demonstrated flexibility by making
                adjustments, fine-tuning details, and occasionally suggesting
                changes to enhance the overall quality of the content.
              </p>
            </div>
            <div className='col-md-12 col-lg-6'>
              <Image
                src={PizzaBg}
                alt='Pizza Background'
                width={800}
                height={600}
              />
            </div>
          </div>
          Te
        </div>
      </section>

      <section id='clitonisa_illustrations'>
        <div className='container text-center'>
          <h2 className={`${utilStyles.clitoTitle2}`}>Illustrations</h2>
        </div>

        <div className='container'>
          <div className='row'>
            {/* First Row */}
            <div className='col-md-12 col-lg-4'>
              <Image
                src={Clito1}
                alt='Clito1'
                width={800}
                height={600}
                className={`${utilStyles.designsPic}`}
              />
            </div>
            {/* Second Row */}
            <div className='col-md-12 col-lg-8'>
              <div className='row'>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={Armario}
                    alt='Armario'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={Profecia}
                    alt='Profecia'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
              </div>
              {/* Add similar rows for other images */}
            </div>
            {/* Third Row */}

            <div className='container'>
              <div className='row'>
                {/* Next Row - Three Images */}
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={CajeroAmor}
                    alt='Cajero Amor'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={CajeroFila}
                    alt='Cajero Fila'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={CajeroAutocobro}
                    alt='Cajero Autocobro'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                {/* Next Row - Three Images */}
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={Pizza}
                    alt='Pizza'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={Satys}
                    alt='Satys'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-4'>
                  <Image
                    src={Vacaciones}
                    alt='Vacaciones'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                {/* Next Row - Two Images */}
                <div className='col-md-12 col-lg-6'>
                  <Image
                    src={GymRosa}
                    alt='Gym Rosa'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
                <div className='col-md-12 col-lg-6'>
                  <Image
                    src={GymJagger}
                    alt='Gym Jagger'
                    width={800}
                    height={600}
                    className={`${utilStyles.designsPic}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* Add more image sections for the rest of the pictures */}
    </div>
  );
};

export default clitonisa;
