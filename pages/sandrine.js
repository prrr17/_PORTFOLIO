import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Blobs from '../components/Blobs';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SandrineInicio from '/public/Sandrine/SandrineInicio.png';
import SandrineObras from '/public/Sandrine/SandrineObras.png';
import SandrineLanding from '/public/Sandrine/sandrineLanding.png'
import SandrineContact from '/public/Sandrine/contactPage.png';
import SandrineStickers from '/public/Sandrine/sandrineStickers.png';
import SandrineZoomObras from '/public/Sandrine/SandrineZoomObras.png';

const sandrine = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Sandrine Molinas' Portfolio </title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='SandrinePortfolio'
        alt='the art portfolio of Sandrine Molinas'
      >
        <div className='container-fluid'>
          <div className='row border-bottom mt-1 pt-2' id='firstrow'>
            <div className='col-sm-6 border-end' id='cel1.1'>
              <h2
                className={`text-end text-wrap py-4 ${utilStyles.heading2Xl}`}
              >
                Artist Portfolio
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingXl}>
                {' '}
                Sandrine Molinas Art Portfolio Website
              </h3>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end' id='cel2.1'>
              <div
                className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={SandrineInicio}
                  alt='home page'
                />
              </div>
              <div className='container my-5 ms-2'>
                {' '}
                <p>
                  Visit her portfolio at{' '}
                  <Link
                    href='https://www.sandrinemolinas.art/'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to sandrine portfolio'
                  >
                    sandrinemolinas.art.
                  </Link>
                </p>
              </div>
            </div>
            <div className='col' id='cel2.2'>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>Project Overview</h4>
                  <p>
                    S. Molinas is a Barcelona-based artist with a degree in Fine
                    Arts, who specializes in organic constructivism. Her new
                    website provides her with a platform to showcase her art and
                    connect with potential clients.
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='col-sm-9'>
                  <div className='container my-5'>
                    <h4 className={utilStyles.headingLg}>Roles</h4>{' '}
                    <p>
                      {' '}
                      As the <strong>designer</strong> and{' '}
                      <strong>developer</strong>, I worked closely with S.
                      Molinas to create a visually striking and easy-to-use
                      portfolio website that showcases her art. I handled the
                      photo editing, typography and palette selection, and
                      overall design, which was refined through feedback from
                      the artist. I'm happy to say that she was thrilled with
                      the results and loved the colors, fonts, and overall
                      layout.
                    </p>
                    <p>
                      I also assisted her in selecting and purchasing a suitable
                      domain name for her brand,{' '}
                      <Link
                        href='https://www.sandrinemolinas.art/'
                        className={`fw-bold ${utilStyles.underlined}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        alt='link to sandrine portfolio'
                      >
                        sandrinemolinas.art.
                      </Link>
                      , to enhance her online presence.
                    </p>
                  </div>
                </div>
                <div className='col-sm-3 d-flex align-items-center'>
                  <div className={`py-1 ${utilStyles.designsPicBox}`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={SandrineObras}
                      alt='artwork page image'
                    />
                  </div>
                </div>
              </div>
              <div className='row d-flex align-items-center'>
                <div className='col-sm-8 d-flex align-items-center'>
                  <div className='container my-4'>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={SandrineStickers}
                      alt='palette and items image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom'
            id='thirdrow'
          >
            <div className='col-sm-6 border-end' id='cel3.1'>
              <div className='text-end py-4 pe-3 float-end'>
                <h4 className={utilStyles.headingLg}>Budget and Timeline</h4>
                <p>
                  Despite a limited budget, I was able to deliver the website on
                  time with no compromise to the quality of the work. The
                  process was smooth and the timeline was relaxed, with the
                  focus being on creative decisions and refining the overall
                  look and feel.
                </p>
                <h4 className={utilStyles.headingLg}>
                  Challenges and Solutions
                </h4>
                <p>
                  One of the main challenges was finding the right balance
                  between showcasing her art while also allowing for easy
                  navigation and a clean, modern look. To achieve this, we
                  experimented with different layouts and color palettes until
                  we found the perfect combination.
                </p>{' '}
                <p>
                  We opted for Wix as the platform for Sandrine's website as it
                  allowed me to create a sleek and fast website, however, there
                  are more limitations in terms of control over the development
                  process and responsiveness. However, for a simple website like
                  this, Wix was a great choice and the final result was just
                  what the artist had in mind.
                </p>
              </div>
            </div>

            <div className='col' id='cel3.2'>
              <div className={`${utilStyles.profilePicBox} float-end`}>
                <Image
                  className={`ms-0 py-2 ${utilStyles.designsPic}`}
                  src={SandrineContact}
                  alt='contact page design'
                />
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom border-end border-start'
            id='forthrow'
          >
            <div className='col-sm-6 border-end ' id='cel4.1'>
              <div className={`${utilStyles.designsPicBox} py-4`}>
                <Image
                  className={`${utilStyles.designsPic}`}
                  src={SandrineLanding}
                  alt='landing page image'
                />
              </div>
              <div className={`${utilStyles.designsPicBox} py-4`}>
                <Image
                  className={`${utilStyles.designsPic}`}
                  src={SandrineZoomObras}
                  alt='Details artwork overlay image'
                />
              </div>
              
            </div>
            <div className='col-sm-6' id='cel4.2'>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>Style Decisions</h4>
                  <p>
                    As a designer, I understand the importance of style
                    decisions when creating a website. When working with
                    Sandrine's beautiful nature-focused paintings, I decided to
                    use an earthy color palette that evolved into a combination
                    of pastel oranges and yellows with strong, darker blues for
                    contrast. For the main titles, I chose the modern and
                    classic serif typeface Attena. This font was specifically
                    designed for luxury, elegant, and feminine projects, which
                    perfectly complemented Sandrine's feminine and evocative
                    paintings. For the main text, I used Lato, a clear Sans
                    serif font, with classical proportions that give the
                    letterforms a familiar harmony and elegance. These style
                    decisions were made with great care and attention to detail
                    to ensure that the website reflects Sandrine's artistic
                    style and vision.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>Conclusion</h4>
                  <p>
                    The final result is a visually pleasant website that
                    showcases Sandra's art in the best possible way. She was
                    thrilled with the results and I was happy to be able to
                    deliver on her vision. The project was completed efficiently
                    and with no compromise to quality, even within the
                    constraints of the budget and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Test />
      </section>
      <Footer />
    </div>
  );
};

export default sandrine;
