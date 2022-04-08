import React from 'react';
import Button1 from '../../Button1';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MetaFace from '../../../assets/Meta-Face.png';
import Telas from '../../../assets/Telas.png';
import Logo2 from '../../../assets/Logo2.png';
import $ from 'jquery';

const Home = () => {

    React.useEffect(() => {
        $('h2, p, li, .meta-image, .button-component').fadeIn(2000)
        $('h2, p, li .meta-image, .button-component').css('display', 'flex')
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }, [])

    return <main className="home-container">
        <article>
            <section className="home-section">
                <div className="text">
                    <h2>Olá, eu sou Paulo Cesar!</h2>
                    <p>Sou estudante de Engenharia da Computação,
                        atualmente no 9º período. Sou desenvolvedor Front-end
                        com foco em React, utilizando diversas tecnologias para elaboração
                        de projetos.
                    </p>
                    <Link to="/projects"><Button1 text="PROJETOS" /></Link>
                </div>
                <img src={MetaFace} className="meta-image" alt="Metaverse face" />
            </section>
            <section className="technologies">
                <h2>Tecnologias</h2>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JQuery</li>
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Sass</li>
                        <li>JSON</li>
                        <li>Git</li>
                        <li>npm</li>
                    </ul>
                </div>
            </section>
            <section className="info">
                <div className="text">
                    <h2>Open to work!</h2>
                    <p>
                        Estou aberto para fechar projetos e também para ocupar vagas
                        como dev jr. ou até mesmo como estagiário em Front-end.
                    </p>
                    <p>
                        Eu crio projetos responsivos e rápidos utilizando React e outras
                        tecnologias. Atuo em projetos Front-end de pequeno porte como páginas web,
                        landing pages, animações e recursos. Também possuo experiência na criação de sites
                        utilizando WordPress.
                    </p>
                </div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={Logo2} alt="Logo" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={Telas} alt="Screens" />
                    </Carousel.Item>
                </Carousel>
            </section>
        </article>
    </main>
}

export default Home