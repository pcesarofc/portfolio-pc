import React from 'react';
import Button1 from '../../Button1';
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';
import MetaFace from '../../../assets/Meta-Face.png';
import $ from 'jquery';
import TitleSection from '../../TitleSection';


const Home = () => {

    const data = [
        { value: 'jQuery', count: 25 },
        { value: 'MongoDB', count: 18 },
        { value: 'JavaScript', count: 32 },
        { value: 'HTML5', count: 27 },
        { value: 'ECMAScript', count: 15 },
        { value: 'CSS3', count: 25 },
        { value: 'Jest', count: 15 },
        { value: 'React', count: 30 },
        { value: 'NPM', count: 11 },
        { value: 'Sass', count: 25 },
        { value: 'Bootstrap', count: 18 },
        { value: 'Axios', count: 11 },
        { value: 'Firebase', count: 19 },
    ]

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.value}
            style={{
                animation: 'blinker 3s linear infinite',
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${size / 2}em`,
                border: `2px solid ${color}`,
                margin: '3px',
                padding: '3px',
                display: 'inline-block',
                color: 'white',
            }}
        >
            {tag.value}
        </span>
    )

    React.useEffect(() => {
        $('h2, p, a, li, .meta-image, .button-component, .tag-container, .demo').fadeIn(2000)
        $('h2, p, a, li .meta-image, .button-component, .tag-container, .demo').css('display', 'flex')
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }, [])

    return <main className="home-container">
        <article>

            <section className="home-section">
                <div className="text">
                    <p className='presentation'>Olá, meu nome é</p>
                    <TitleSection title="Paulo Cesar" />
                    <p> Graduando em Engenharia da Computação e desenvolvedor
                        web voltado para o Front-End. Tenho experiência com a
                        linguagem Javascript e a biblioteca React.
                    </p>
                    <Link to="/projects"><Button1 text="PROJETOS" /></Link>
                </div>
                <img src={MetaFace} className="meta-image" alt="Metaverse face" />
            </section>

            <section className="technologies">
                <TitleSection title="Tecnologias" />
                <div className='tag-container'>
                    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
                </div>
            </section>

            <section className="info">
                <div className="text">
                    <TitleSection title="Open to work!" />
                    <p>
                        Estou aberto para fechar projetos e também para ocupar vagas
                        como estagiário ou desenvolvedor Front-end jr.
                    </p>
                    <p>
                        Meu foco é na criação de aplicações web responsivas e rápidas
                        como landing pages, sites institucionais ou até mesmo web apps.
                        Atualmente estou estudando testes unitários e Typescript, com o
                        objetivo de evoluir cada vez mais dentro da área de Front-end.
                    </p>
                </div>
                <Link to='/contact'><div class="demo" /></Link>
            </section>

        </article>
    </main >
}

export default Home;