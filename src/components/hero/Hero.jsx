import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Hero.css';
import transition from '../FramerMotion/transition';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data';

const Hero = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            <div className="hero">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={{
                            fpsLimit: 240,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: 'push',
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: 'repulse',
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 2,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: '#ffffff',
                                },
                                links: {
                                    color: '#ffffff',
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: {
                                    direction: 'none',
                                    enable: true,
                                    outModes: {
                                        default: 'bounce',
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: 'circle',
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                )}
                <div className="hero-text">
                    <h1>Soy <span style={{color:'orange'}}>Cesar Palma</span></h1>
                    <h2>FrontEnd <span style={{ color: 'orange' }}>Developer</span></h2>
                    <p style={{marginTop:'1rem'}}>Front-End Developer con 3 años de experiencia en el desarrollo web utilizando React. Soy detallista y comprometido con mi trabajo. </p>
                    <div className='btns-hero'>
                        <Link to='/contact' className='btn-hero left-btn'>Contactame!</Link>
                        <a href='/documents/CesarPalma CV.pdf' download className='btn-hero right-btn' without rel='noreferrer'>Descargar&nbsp;<span>CV</span></a>

                    </div>
                    <div className="social-links">
                        {socialLinks.map((link) => (
                            <a key={link.id} href={link.src} target="_blank" rel="noopener noreferrer">
                                {link.logo}
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default transition(Hero);