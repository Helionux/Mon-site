import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title">À Propos de Moi</h2>
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3>Qui suis-je ?</h3>
                            <p>
                                Bonjour, je suis <strong>Deoule-Allah Madjitoloum Heliodore</strong>, 
                                Développeur Web Fullstack & UI/UX Designer en formation. 
                                Basé à N'Djamena, Tchad. Je suis passionné par la création de sites Web 
                                et d'applications qui offrent une expérience utilisateur exceptionnelle.
                            </p>
                        </div>

                        <div className="about-experience">
                            <h3>Mon Parcours</h3>
                            <p>
                                Je suis actuellement en formation pour devenir un développeur web fullstack 
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
                                Je veux devenir un développeur Fullstack reconnu, capable de créer, vendre et
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
                            <a href="#contact" className="cta-button">Me Contacter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
// Compare this snippet from src/components/Footer/Footer.js: