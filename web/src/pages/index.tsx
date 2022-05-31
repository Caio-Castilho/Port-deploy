import React from "react";
import { useEffect, useState } from "react";

export default function HomePages(){
    const [toggle, setToggle] = useState('home')
    const [theme, setTheme] = useState('dark-mode')
    function handleSection(e:string){
        setToggle(e)
    }
    function handleTheme(){
        let element = document.body;
        const currentTheme = theme === 'dark-mode' ? 'light-mode':'dark-mode'
        element.classList.remove('dark-mode')
        element.classList.remove('light-mode')
        element.classList.add(currentTheme)
        localStorage.setItem("theme", currentTheme)
        setTheme(currentTheme)
    }
    useEffect(()=>{
        const currentTheme = localStorage.getItem("theme")
        let element = document.body;
        element.classList.remove('dark-mode')
        element.classList.remove('light-mode')
        element.classList.add(currentTheme)
        setTheme(currentTheme)
    },[])
    
    return (
    <div>
    <div id="root"></div>
    <header className={`section sec1 header ${toggle === "home" ? "active":""}`} id="home">
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src="imagem/caio.png" alt=""/>
                </div>
            </div>
            <div className="right-header">
                    <h1 className="name">
                        Olá, sou<span> Caio Fernandes Castilho</span><br/>
                        Um desenvolvedor.
                    </h1>
                <p>
                    Eu adoro progredir com projetos de diversas linguagens.<br/> 
                    Nesta aplicação será notável vários recursos estilísticos
                    e responsíveis.<br/>
                    Também será um palco para meus projetos e referências ao 
                    longo da minha linha do tempo como programador.
                </p>
                <div className="btn-con">
                    <a href="https://drive.google.com/drive/folders/1lo9Wzz8nSBUjlvL98thgrkWffwfBkj3F?usp=sharing" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section className={`section sec2 header ${toggle === "about" ? "active":""}`} id="about">
            <div className="main-title">
                <h2>Sobre <span>mim</span><span className="bg-text">Meus Atributos</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Informações sobre mim</h4>
                    <p>
                        Sou uma pessoa agitada, gosto de colocar a mão na massa,
                        e prezo pela boa comunicação e proatividade.<br/>
                        Outros traços qualitativos seriam minha afinidade com
                        matemática e ciências em geral.<br/>
                        Sempre estou disposto a aprender e costumo considerar
                        críticas com intenção de evoluir de maneira cognitiva. <br/>
                    </p>
                    <div className="btn-con">
                        <a href="https://drive.google.com/drive/folders/1lo9Wzz8nSBUjlvL98thgrkWffwfBkj3F?usp=sharing" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">560+</p>
                            <p className="small-text">Projetos <br/>Completados</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">2+</p>
                            <p className="small-text">Anos <br/>de Experiência</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">300+</p>
                            <p className="small-text">Fregueses <br/>Satisfeitos</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">200+</p>
                            <p className="small-text">Revisões <br/>de Clientes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">Minhas habilidades</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="progress-title">html5</p>
                        <div className="progress-con">
                            <p className="prog text">90%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="progress-title">C, C++</p>
                        <div className="progress-con">
                            <p className="prog text">60%</p>
                            <div className="progress">
                                <span className="c"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="progress-title">Java</p>
                        <div className="progress-con">
                            <p className="prog text">50%</p>
                            <div className="progress">
                                <span className="java"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="progress-title">Javascript + CSS + Node</p>
                        <div className="progress-con">
                            <p className="prog text">60%</p>
                            <div className="progress">
                                <span className="javascript-node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="progress-title">Conhecimento de hardware</p>
                        <div className="progress-con">
                            <p className="prog text">75%</p>
                            <div className="progress">
                                <span className="hardware"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="progress-title">Curiosidade</p>
                        <div className="progress-con">
                            <p className="prog text">100%</p>
                            <div className="progress">
                                <span className="curiosidade"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-title">Minha linha do tempo</div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">Início de 2020</p>
                    <h5>Início do aprendizado em C++<span></span></h5>
                    <p>Tive meu primeiro contato com linguagem de programação a
                        partir de um vídeo chamado "C++ Tutorial From Basic to Advance".<br/>
                       A primeira IDE que eu use foi o Code::Blocks, mas eu não cheguei
                       a terminar o vídeo, devido à outras prioridades como o início
                       das aulas da faculdade da época (UNOESTE - BCC).
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">Primeiro semestre de 2020</p>
                    <h5>IDE Dev-C++ e início do aprendizado em C<span></span></h5>
                    <p>Depois de me familiarizar com uma nova IDE, a Dev-C++. Desenvolvi
                        um entendimento dos conceitos de importação de bibliotecas assim
                        como uso de suas ferramentas, variáveis, funções e seus retornos 
                        de tipo de dados.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">Segundo semestre de 2020</p>
                    <h5>Algoritmos e início de desenvolvimento web<span></span></h5>
                    <p>Neste período aprendi sobre modularização, parametrização, vetores,
                        início de estrutura de dados em C.<br/>
                       Além disso, iniciou-se os aprendizados em HTML, CSS e python.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">Primeiro semestre de 2021</p>
                    <h5>Estrutura de dados + Início de JAVA e JS<span></span></h5>
                    <p>Coloquei meu conhecimento de fluxogramas na prática
                        em "Gestão de Processos".<br/>
                       Iniciou o desenvolvimento de duas novas linguagens, JAVA e Javascript.<br/>
                       Em C, começou a implementação de TAD (Tipo abstrato de dados), manipulação 
                       de arquivos de texto e binário, Pilha, Fila, Recursividade e, por fim Alocação Dinâmica.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">Segundo semestre de 2021</p>
                    <h5>Desenvolvedor full stack<span></span></h5>
                    <p>Sem dúvidas, o semestre que eu mais estudei e produzi arquivos.<br/>
                       Infelizmente acabei por me desvincular da faculdade UNOESTE por uma série de motivos.<br/>
                       Em JAVA ultilizamos jdk8 e principalmente a plataforma JavaFX.<br/>
                       Em C, foi apresentado o conceito de árvores binária e huffman.<br/>
                       Em desenvolvimento web, foi usado o React NodeJS<br/>
                       Por fim, foi cobrado conhecimentos de Sistemas Operacionais como: 
                       Utilizar uma máquina virtual, usar bibliotecas em C que funcionam apenas 
                       no Linux devido às threads.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2022</p>
                    <h5>Um novo começo<span></span></h5>
                    <p>Devivo ao vínculo com uma nova instituição de ensino, me deparo com 
                        disciplínas que eu ja tinha conhecimento. Portanto, para me manter
                        atualizado eu estudo regularmente por conta própria atravéz de conteúdos
                        online. Algo que já tinha costume, mas dessa vez é mais intensificado.<br/>
                       Enfim, os conteúdos aperfeiçoados foram:<br/>
                       -HTML + CSS + JS + SCSS(novo)<br/>
                       -JAVA<br/>
                    </p>
                </div>
            </div>
        </section>
        <section className={`section sec3 header ${toggle === "portfolio" ? "active":""}`} id="portifolio">
            <div className="main-title">
                <h2>Meu <span>Portfólio</span><span className="bg-text">Meus trabalhos</span></h2>
            </div>
            <p className="port-text">
                Aqui tem alguns trabalhos desenvolvidos por mim.
            </p>
            <div className="portfolios">
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/c.png" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projectos de C e C++</h3>
                        <div className="icons">
                            <a href="https://drive.google.com/drive/folders/1Hy3os29jLzk5ShCL7pLgTLd5Kzomj7Qk?usp=sharing" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/java-simples.webp" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projetos simples de Java</h3>
                        <div className="icons">
                            <a href="https://drive.google.com/drive/folders/1P-M1rT0-7qBrUp8NdJMM5_YQ7cZuJQUi?usp=sharing" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/java-fx.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projetos em JavaFX</h3>
                        <div className="icons">
                            <a href="https://drive.google.com/drive/folders/1ZFoph47G3aLySONyZ-K7SwBkllu8Nmob?usp=sharing" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/python.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projetos em Python</h3>
                        <div className="icons">
                            <a href="https://drive.google.com/drive/folders/1kdAxTkkeWUls2yHmsiLTbA6wHN6s-WtQ?usp=sharing" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/node.png" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projetos em React + NodeJS</h3>
                        <div className="icons">
                            <a href="https://drive.google.com/drive/folders/1Hvxxl2cZTixxihQ92M7MGt4sF0IRvvyU?usp=sharing" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="imagem/HTML5.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Projetos WEB</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-google-drive"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`section sec4 header ${toggle === "blogs" ? "active":""}`} id="blogs">
            <div className="blogs-content">
                <div className="main-title">
                    <h2>Links <span>Externos</span><span className="bg-text">Referências da web</span></h2>
                </div>
                <div className="blogs">
                    <a href="https://www.youtube.com/watch?v=xV7S8BhIeBo">
                        <div className="blog">
                            <img src="imagem/thumbWEB.jpg" alt=""/>
                            <div className="blog-text">
                                <h4>
                                    Como criar seu website
                                </h4>
                                <p>
                                    Vídeo de demonstração da criação de um modelo de 
                                    website com passo a passo e disponibilização do 
                                    código fonte.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=xk4_1vDrzzo&t=26836s&pp=ugMICgJwdBABGAE%3D">
                        <div className="blog">                        
                            <img src="imagem/javaCourse.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        Crie sua base de conhecimento em Java
                                    </h4>
                                    <p>
                                        Vídeo que apresenta projetos desde o nível iniciante 
                                        até contruir um programa executável (.jar).
                                    </p>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=mUQZ1qmKlLY">
                        <div className="blog">
                            <img src="imagem/Ctutorial.jpg" alt=""/>
                            <div className="blog-text">
                                <h4>
                                    Aprenda C++ com tutoriais em 9 horas
                                </h4>
                                <p>
                                    O conteúdo do vídeo tem como propósito ensinar C++ para 
                                    pessoas que nunca tiveram contato com linguagens do tipo C. 
                                    Portanto não há um aprofundamento de nível profissional, porém é 
                                    muito bom para quem quer desenvolver uma base forte de conhecimento. 
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section className={`section sec5 header ${toggle === "contact" ? "active":""}`} id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Entre em <span>Contato</span><span className="bg-text">Redes Sociais</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Me encontre aqui</h4>
                        <br/>                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Localização</span>
                                </div>
                                <p>
                                    : Dracena - SP, Brasil
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: caio.aspira2000@gmail.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span>Educação</span>
                                </div>
                                <p>
                                    <span>: Atualmente cursando TADS, Unifadra</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-mobile-alt"></i>
                                    <span>Número telefone</span>
                                </div>
                                <p>
                                    <span>: (18)99731-1066</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Línguas</span>
                                </div>
                                <p>
                                    <span>: Portugues, Inglês, Russo (básico)</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="https://api.whatsapp.com/send?phone=5518997311066&text=Ol%C3%A1%20seja%20bem%20vindo%2C%20fique%20%C3%A0%20vontade%20para%20iniciar%20uma%20conversa!" target="_blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/caiogatinho00/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://github.com/Caio-Castilho" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://criarmeulink.com.br/u/1649893723" target="_blank">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form action="" className="contact-form">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="SEU NOME"/>
                                <input type="email" required placeholder="SEU EMAIL"/>
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ASSUNTO"/>
                            </div>
                            <div className="input-control">
                                <textarea name="" id="" cols={15} rows={8} placeholder="Escreva uma mensagem aqui..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <a href="https://drive.google.com/drive/folders/1lo9Wzz8nSBUjlvL98thgrkWffwfBkj3F?usp=sharing" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div className="controlls">
        <div onClick={()=>handleSection("home")} className={`control ${toggle === "home" ? "active-btn":""}`} data-id="home">
            <i className="fas fa-home"></i>
        </div>
        <div onClick={()=>handleSection("about")} className={`control ${toggle === "about" ? "active-btn":""}`} data-id="about">
            <i className="fas fa-user"></i>
        </div>
        <div onClick={()=>handleSection("portfolio")} className={`control ${toggle === "portfolio" ? "active-btn":""}`} data-id="portifolio">
            <i className="fas fa-briefcase"></i>
        </div>
        <div onClick={()=>handleSection("blogs")} className={`control ${toggle === "blogs" ? "active-btn":""}`} data-id="blogs">
            <i className="fas fa-newspaper"></i>
        </div>
        <div onClick={()=>handleSection("contact")} className={`control ${toggle === "contact" ? "active-btn":""}`} data-id="contact">
            <i className="fas fa-envelope-open"></i>
        </div>
    </div>
    <div onClick={handleTheme} className="theme-btn">
        <i className="fas fa-adjust"></i>
    </div>
    </div>)
}