import React, { useState } from 'react';
import Project from './Project';
import $ from 'jquery';
import axios from 'axios';
import TitleSection from '../../TitleSection';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    React.useEffect(() => {
        $('h2').fadeIn(2000)
        $('h2').css('display', 'flex')
        $('html, body').animate({ scrollTop: 0 }, 'fast');

        let i;
        let newProjects = []

        axios.get('https://portfolio-paulocesar-default-rtdb.firebaseio.com/projetos.json').then(response => {
            for (i in response.data) {
                newProjects = [...newProjects, {
                    title: response.data[i].title,
                    description: response.data[i].description,
                    image: response.data[i].image,
                    url: response.data[i].url,
                }]
            }
            setProjects(newProjects)
        })
    }, [])

    return <main className="projects-container">
        <article>
            <TitleSection title="Projetos" />
            <section className="projects-page">
                {projects.map((projects) => (<Project projects={projects} />))}
            </section>
        </article>
    </main>
}

export default Projects