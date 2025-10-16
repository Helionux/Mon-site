import React from 'react';
import './About.css';

function About() {
    return (
        <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl">

            {/* <section className="about-section">
            <div className="container">
                <h2 className="section-title">À Propos de Moi</h2>
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3>Qui suis-je ?</h3>
                            <p>
                                Bonjour, je suis <strong>Deoule-Allah Madjitoloum Heliodore</strong>, 
                                Développeur Web Frontend & UI/UX Designer en formation. 
                                Basé à N'Djamena, Tchad. Je suis passionné par la création de sites Web 
                                et d'applications qui offrent une expérience utilisateur exceptionnelle.
                            </p>
                        </div>

                        <div className="about-experience">
                            <h3>Mon Parcours</h3>
                            <p>
                                Je suis actuellement en formation pour devenir un développeur web Frontend 
                                et un designer UI/UX. J'ai acquis des compétences solides dans le développement 
                                front-end et back-end, ainsi que dans la conception d'interfaces utilisateur 
                                attrayantes et fonctionnelles.
                            </p>
                        </div>

                        <div className="about-passion">
                            <h3>Ma Passion</h3>
                            <p>
                                Je suis passionné par la création de solutions innovantes qui répondent aux 
                                besoins des utilisateurs et améliorent leur expérience en ligne. En dehors du 
                                développement web, j'aime explorer de nouvelles technologies, lire des livres 
                                sur le design et la programmation, et participer à des projets open source.
                            </p>
                        </div>

                        <div className="about-mission">
                            <h3>Ma Mission</h3>
                            <p>
                                Je conçois des solutions web simples, efficaces et modernes pour aider les
                                entreprises, institutions et particuliers à digitaliser leurs services,
                                gagner en visibilité et améliorer leur productivité.
                            </p>
                        </div>

                        <div className='about-vision'>
                            <h3>Ma Vision</h3>
                            <p>
                                Je veux devenir un développeur Frontend reconnu, capable de créer, vendre et
                                maintenir des solutions digitales à forte valeur ajoutée pour transformer
                                l’écosystème tech local.
                            </p>
                        </div>

                        <div className="about-philosophy">
                            <h3>Ma Philosophie</h3>
                            <p>
                                Je crois fermement que l'apprentissage continu est essentiel pour rester à jour 
                                dans ce domaine en constante évolution. Je suis toujours à la recherche de 
                                nouvelles opportunités pour collaborer avec d'autres professionnels et partager 
                                mes connaissances.
            </p>
        </div>
                        <p><strong>“Le code est mon outil, la résolution de problèmes est ma mission.”</strong></p>
                        <div className="about-cta">
                            <p>
                                N'hésitez pas à me contacter si vous souhaitez discuter de projets, 
                                d'opportunités de collaboration ou simplement échanger des idées.
                            </p>
                            <a href="/contact" className="cta-button">Me Contacter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/promotional/image.png"

                alt="promotional" className="hidden md:block w-full max-w-lg rounded-l-xl" />

            <div className="relative flex items-center justify-center">

                <button className="absolute top-6 right-6 bg-gray-200 rounded-full p-2.5" aria-label="Close">

                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M13 2 2 13M2 2l11 11" stroke="#1F2937" strokeOpacity=".7" strokeWidth="3"

                            strokeLinecap="round" strokeLinejoin="round" />

                    </svg>

                </button>

                <div className="max-md:py-20 px-6 md:px-10 text-center">

                    <h1 className="text-3xl font-bold">

                        <span className="text-blue-600">Don’t miss out</span> on our discounted products.

                    </h1>

                    <p className="mt-4 text-gray-500">

                        Don't miss out on amazing discounts—shop now before they're gone!

                    </p>

                    <button className="rounded-lg bg-blue-600 text-sm px-14 py-3 mt-4 text-white">

                        Check out the products

                    </button>

                    <button className="px-8 py-3 mt-4 text-sm text-gray-800">

                        No thanks, I don’t want the discounts.

                    </button>

                </div>

            </div>

        </div>
    );
}

export default About;
// Compare this snippet from src/components/Footer/Footer.js: