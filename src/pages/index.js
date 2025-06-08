import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const carouselItems = [
  {
    style: { background: 'rgba(12, 8, 15, 0.938)' },
    alt: 'Carousel Image 1', 
    headline: 'Basics To Brilliance',
    title: 'Empower your career with our Training Programs',
    description: 'Unlock your potential with our Mentorship & Comprehensive Training Programs.',
    link: '/about',
  },
  {
    style: { background: 'rgba(12, 8, 15, 0.938)' },
    alt: 'Carousel Image 2',
    headline: 'Transform your learning journey with us',
    title: 'Interactive Learning Experience',
    description:
      'Learning should be engaging & dynamic. Our engaging educational programs equip you with the abilities you need to be successful.',
    link: '/about',
  },
];

const services = [
  {
    alt: 'Hands-on Projects',
    title: 'Hands-on Projects',
    description:
      'We emphasize practical learning through hands-on projects that allow you to apply your knowledge in real-world scenarios.',
    delay: '0.1s',
  },
  {
    alt: 'Mentorship & Guidance',
    title: 'Mentorship & Guidance',
    description:
      'We support and mentor you along the way, providing you with our knowledge and experience to help you succeed.',
    delay: '0.3s',
  },
  {
    alt: 'Problem Solving Skills',
    title: 'Develop Problem-Solving Skills',
    description:
      'Encounter and solve real problems, and develop your problem-solving skills in the process.',
    delay: '0.5s',
  },
  {
    alt: 'Networking Opportunities',
    title: 'Networking Opportunities',
    description:
      'Create a strong network by working together with instructors and colleagues.',
    delay: '0.7s',
  },
];

const expertise = [
  { src: '/img/Java2.png', alt: 'Java', name: 'Java' },
  { src: '/img/javascript-logo.png', alt: 'JavaScript', name: 'JavaScript' },
  { src: '/img/github-copilot-logo.png', alt: 'Github CoPilot', name: 'Github CoPilot' },
  { src: '/img/automation-logo.png', alt: 'Automation', name: 'Automation' },
  { src: '/img/ui-ux-logo.png', alt: 'UI/UX Design', name: 'UI/UX Design' },
  { src: '/img/ts.png', alt: 'TypeScript', name: 'TypeScript' },
  { src: '/img/node.png', alt: 'NodeJS', name: 'NodeJS' },
  { src: '/img/Microsoft-Azure.png', alt: 'Microsoft Azure', name: 'Microsoft Azure' },
];

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('wowjs')?.WOW && new (require('wowjs').WOW)().init();
    }
  }, []);

  return (
    <>
      <Head>
        <title>TechRoots Club | Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
      </Head>

      <Navbar />

      {/* Swiper Carousel */}
      <section className="container-fluid p-0 mb-4">
        <Swiper
          modules={[Autoplay, EffectFade]}
          loop
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          effect="fade"
          slidesPerView={1}
        >
          {carouselItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="position-relative d-flex align-items-center"
                style={{
                  height: '600px',
                  ...item.style,
                  color: 'white',
                  paddingLeft: '3rem',
                  paddingRight: '3rem',
                }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h5 className="text-uppercase mb-3" style={{ color: '#d4af37' }}>
                        {item.headline}
                      </h5>
                      <h1 className="display-3">{item.title}</h1>
                      <p className="mb-4 pb-2">{item.description}</p>
                      <Link href={item.link} legacyBehavior>
                        <a className="btn btn-primary py-md-3 px-md-5 me-3">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container">
          <header className="row g-2 text-center mb-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
              <h1 style={{ color: '#d4af37' }}>Invest in your career aspirations with TechRoots Club</h1>
              <p>Seek guidance from professionals in the field</p>
            </div>
          </header>
          <div className="row g-4">
            {services.map(({ alt, title, description, delay }) => (
              <article key={title} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={delay} aria-label={alt}>
                <div className="service-item text-center pt-3 shadow">
                  <div className="p-4">
                    <div className="mb-4" style={{ fontSize: '3rem', color: '#d4af37' }}>
                      <i className="fa fa-cogs" aria-hidden="true"></i>
                    </div>
                    <h5 className="mb-3">{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 400 }}>
                <Image src="/img/home.jpg" alt="TechRoots Club" layout="fill" objectFit="cover" priority />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start pe-3">About Us</h6>
              <h1 className="mb-4" style={{ color: '#d4af37' }}>Welcome to TechRoots Club</h1>
              <p>
                Welcome to TechRoots Club, where we empower individuals with the technical skills and knowledge needed to thrive in the evolving technical landscape.
              </p>
              <p>
                As our slogan says, "Basics to Brilliance," our mission is to equip students & IT professionals from core to advanced technical guidance that helps them grow in their career.
              </p>
              <ul className="row gy-2 gx-4 mb-4 list-unstyled">
                {['Expert Mentors', 'Live Interactive Sessions', 'Personalized Learning Paths', 'Mock Interviews'].map((item) => (
                  <li key={item} className="col-sm-6 d-flex align-items-center">
                    <i className="fa fa-arrow-right me-2 text-warning" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" legacyBehavior>
                <a className="btn text-light py-3 px-5 mt-2">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner / CTA */}
      <section className="container-xxl py-5 pt-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 p-5 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4" style={{ color: '#d4af37' }}>Explore Courses</h1>
              <p className="mb-4">
                Acquire new technical skills and boost your career by starting your learning journey with TechRoots Club.
              </p>
              <Link href="/courses" legacyBehavior>
                <a className="btn text-light py-3 px-5 mt-2">Explore More</a>
              </Link>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 300 }}>
                <Image src="/img/concated image - resized.jpg" alt="Explore Courses" layout="fill" objectFit="cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5" style={{ color: '#d4af37' }}>Our Expertise</h1>
          </div>
          <div className="row g-2 m-2">
            {expertise.map(({ src, alt, name }) => (
              <div key={name} className="col-lg-3 col-md-6 text-center">
                <div className="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                  <Image src={src} alt={alt} width={100} height={100} />
                  <h5 className="my-2">{name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
