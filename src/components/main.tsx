'use client'
import React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


   

    const main = () => { 
        const [showButton, setShowButton] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
        return (
            <section className="">
                  {showButton && (
                            <button className="fixed botton-10 animate-bounce  hover:text-white right-16" onClick={handleClick}>
                               <FontAwesomeIcon className="text-color-pj hover:text-white fa-2x" icon={faCircleArrowUp} />
                            </button>
                        )}
                <section className="mx-auto items-center ">
                    <div className="mt-24 text-center grid justify-center  items-center justify-items-center w-full   sm:container mx-auto">
                        <div className="w-96 h-96 ">
                            <Image src="/images/pedro3.png" alt="" className=" animate-bounce" />
                        </div>
                        <h1 className="text-color-pj text-2xl mt-5">Pedro Victor Fernandes de Abreu</h1>
                        <h1 className="text-color-pj text-2xl">Full Stack Developer</h1>
                    </div>
                    <div className="mt-10 container p-5 mx-auto  rounded-xl shadow bg-color-div text-color-pj">
                        <h1 className="mt-3 text-center font-bold text-3xl">Sobre</h1><br></br>
                        <p className="p-3">Meu nome é Pedro Victor Fernandes de Abreu e sou um desenvolvedor fullstack pleno com ampla experiência em diversas tecnologias. Tenho 2 anos de conhecimento em Laravel e PHP, o que me permite criar aplicações web robustas e eficientes. Além disso, tenho 1 ano de experiência em tecnologias frontend, como Angular, React e React Native, o que me permite criar interfaces de usuário modernas e intuitivas.
                            <br></br><br></br>
                            Tenho também 9 anos de experiência em suporte técnico, o que me proporcionou habilidades sólidas de resolução de problemas e uma excelente capacidade de comunicação. Acredito que uma comunicação clara e eficaz é fundamental para trabalhar em equipe e entregar projetos de sucesso.
                            <br></br><br></br>
                            Além das habilidades em desenvolvimento e suporte técnico, tenho conhecimentos em diversas tecnologias, como MySQL, PostgreSQL, TypeScript, JavaScript, Bootstrap, Tailwind CSS, CSS, HTML, Docker, Git e GitHub, bem como em desenvolvimento de APIs REST. Essas habilidades me permitem criar aplicações web e mobile completas, desde o backend até o frontend, e também gerenciar o ciclo de vida do desenvolvimento de software com eficiência, utilizando boas práticas de versionamento e controle de código.
                            <br></br><br></br>
                            Como desenvolvedor fullstack pleno, sou capaz de lidar com tarefas em diferentes áreas do desenvolvimento de software, desde a arquitetura e design de banco de dados até a criação de interfaces de usuário responsivas e funcionais. Tenho paixão por tecnologia e estou sempre buscando me atualizar nas últimas tendências do setor.
                            <br></br><br></br>
                            Estou comprometido em entregar soluções de alta qualidade, trabalhando em equipe e utilizando meu conhecimento em Laravel, PHP, Angular, React, React Native, suporte técnico e outras tecnologias para criar aplicações web e mobile de alto desempenho e atender às necessidades dos projetos e clientes com excelência.</p>
                    </div>
                </section>
                <section>
            
                    <div className="container  mx-auto">
                        <h1 className="mt-10 text-color-pj text-center font-bold text-3xl">Projetos</h1><br></br>
                        <div className=" sm:flex-row gap-5 mx-auto grid  justify-center sm:flex">
                            <div className="p-5 md:basis-1/2 justify-center text-center">
                                <h1 className="text-2xl text-color-pj"><a href="http://www.detro.rj.gov.br" className="hover:text-white font-bold" target="_blank">DETRO - www.detro.rj.gov.br</a></h1>
                                <p className="text-color-pj mt-3">Neste projeto, utilizei PHP, Bootstrap e CSS para renovar completamente o visual do site do governo do Rio de Janeiro. Implementei um design moderno e atraente, utilizando as melhores práticas de desenvolvimento web e garantindo uma experiência do usuário otimizada. Além disso, integrei recursos avançados de usabilidade e acessibilidade, visando proporcionar uma experiência positiva para os usuários do site. O resultado final foi um site renovado e aprimorado, com uma interface amigável, responsiva e funcional, que atendeu aos requisitos e expectativas do governo do Rio de Janeiro e de seus usuários.</p>

                                <div className=" mt-3 flex justify-center">
                                    <div className="bg-color-div shadow px-6 h-12 py-2 gap-4 rounded-2xl flex border border-stone-600">
                                        <Image src="/images/Laravel.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                        <Image src="/images/mysql.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                        <Image src="/images/php.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                        <Image src="/images/bootstrap.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className=" md:basis-1/3 p-5">
                                <a href="http://www.detro.rj.gov.br"  target="_blank">
                                    <Image src="/images/detro.png" alt="" className="sm:w-11/12 w-full transition shadow-lg hover:shadow-blue-500/50 duration-500 hover:-translate-y-1 hover:scale-105 h-64 grayscale hover:grayscale-0  rounded-2xl border-4 border-stone-600" />
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className=" flex-row gap-5 grid justify-center sm:flex">
                            <div className=" sm:basis-1/3 p-5">
                                <a href="https://www.lanchenapraia.com.br" target="_blank">
                                    <Image src="/images/Lanche.png" alt="" className="w-auto shadow-lg hover:shadow-cyan-500/50 grayscale transition duration-500 hover:-translate-y-1 hover:scale-105 hover:grayscale-0 rounded-2xl border-4 border-stone-600" />
                                </a>
                            </div>
                            <div className="p-5 sm:basis-1/2 justify-center text-center">
                                <h1 className="text-2xl text-color-pj"><a href="https://www.lanchenapraia.com.br" className="hover:text-white font-bold" target="_blank">Lanche na Praia - www.lanchenapraia.com.br</a> </h1>
                                <p className="text-color-pj mt-3">Eu lidero um emocionante projeto de desenvolvimento de um aplicativo web e mobile para delivery na praia, utilizando React para o front-end web, React Native para o aplicativo mobile, Laravel para a API e MySQL para o banco de dados, todos hospedados na AWS. Como CEO da empresa, tive o prazer de liderar uma equipe talentosa de desenvolvedores, muitos dos quais eram meus amigos pessoais. Juntos, criamos uma solução tecnológica inovadora que permite aos usuários fazerem pedidos de delivery de alimentos na praia com facilidade e conveniência. Foi gratificante ver o projeto ganhar vida e se tornar um sucesso, oferecendo uma experiência única aos nossos clientes.</p>
                                <div className=" mt-3 flex justify-center">
                                    <div className="bg-color-div shadow px-6 py-2 h-12 gap-4 rounded-2xl flex border border-stone-600">
                                        <Image src="/images/react.png" alt="React" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/Laravel.png" alt="Laravel" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/mysql.png" alt="Mysql" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/php.png" alt="PHP" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/tailwind.png" alt="Tailwind" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/typescript.png" alt="Typescript" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                        <Image src="/images/aws.png" alt="AWS" className="transition hover:-translate-y-1 hover:scale-110 p-1 h-auto w-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div>
                        <h1 className="mt-24 text-color-pj text-center font-bold text-3xl">Experiencias profissionais</h1><br></br>
                    </div>
                    <div className="flex flex-col justify-center py-6 lg:py-12">
                        <div className="w-full mx-auto lg:max-w-7xl">
                            <div className="relative">
                                <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-color-div lg:block left-1/2"></div>
                                <div className="space-y-12 lg:space-y-8">

                                    <div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-start w-full mx-auto">
                                                <div className="w-full lg:w-1/2 lg:pr-7">
                                                    <div className="p-4 bg-color-div  transition duration-500 hover:-translate-y-1 hover:scale-105   text-color-pj rounded-xl shadow-lg ">
                                                        <div className="p-1 flex justify-center">
                                                            <a href="https://www.novakio.com.br" target="_blank"><Image src="images/novakio.png" alt="" className="w-24 h-auto" /></a>

                                                        </div>
                                                        <div className="text-center">
                                                            <h1 className=" text-base font-bold text-color-pj">Analista de Desenvolvimento PHP Full Stack Pleno - 2023 / Momento</h1>
                                                            <p className="text-sm mt-1">Na empresa Novakio, atuo como desenvolvedor com foco na manutenção de código, utilizando AngularJS para o
                                                                front-end e Laravel para o desenvolvimento de APIs. Também tenho experiência em trabalhar com MySQL para gerenciar bancos de dados.
                                                                Além disso, sou responsável pela criação de novas funcionalidades e aprimoramento dos sistemas existentes. Tenho habilidades em
                                                                React e React Native para o desenvolvimento de interfaces de usuário modernas e funcionais para web e mobile. Além disso, estou
                                                                sempre em busca de soluções inovadoras para melhorar a experiência do usuário e contribuir para o sucesso dos projetos da empresa Novakio. </p>
                                                        </div>
                                                        <div className=" mt-3 flex justify-center">
                                                            <div className=" px-6 py-2 h-12 gap-4 w-full  rounded-2xl flex ">
                                                                <Image src="/images/angular.png" alt="Angular" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/react.png" alt="React" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/Laravel.png" alt="Laravel" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/mysql.png" alt="Mysql" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/php.png" alt="PHP" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/tailwind.png" alt="Tailwind" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/typescript.png" alt="Typescript" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/docker.png" alt="docker" className="transition hover:-translate-y-1 hover:scale-110 h-auto w-auto" />
                                                                <Image src="/images/aws.png" alt="AWS" className="transition hover:-translate-y-1 hover:scale-110 p-1 h-auto w-auto" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-color-div border-2 border-stone-600 rounded-full left-1/2 sm:translate-y-0">
                                                <span className="text-white">1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-end w-full mx-auto">
                                                <div className="w-full lg:w-1/2 lg:pl-7">
                                                    <div className="p-4 bg-color-div transition duration-500 hover:-translate-y-1 hover:scale-105 text-color-pj rounded-xl shadow-lg ">
                                                        <div className="p-1 flex justify-center">
                                                            <Image src="images/detro2.png" alt="" className="w-32 h-auto" />
                                                        </div>
                                                        <div className="text-center">
                                                            <h1 className=" text-base font-bold text-color-pj">Estagiário de Desenvolvimento Full-Stack - 2022 / 2023</h1>
                                                            <p className="text-sm mt-1">Trabalhei por 5 meses, fui responsável pelo desenvolvimento de um novo painel administrativo e site para o governo.
                                                                Utilizei PHP, Laravel, Bootstrap, HTML, CSS e MySQL para implementar as funcionalidades necessárias. O novo painel administrativo
                                                                oferecia recursos avançados de gerenciamento e controle, enquanto o novo site governamental
                                                                apresentava um design moderno e responsivo, visando proporcionar uma experiência de usuário otimizada. Durante meu tempo na empresa, entreguei com sucesso esses projetos,
                                                                contribuindo para a melhoria da presença online do governo e para o aprimoramento dos processos internos. </p>
                                                        </div>
                                                        <div className=" mt-3 flex justify-center">
                                                            <div className=" px-6 h-12 py-2 gap-4 rounded-2xl flex ">
                                                                <Image src="/images/Laravel.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                                                <Image src="/images/mysql.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                                                <Image src="/images/php.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                                                <Image src="/images/bootstrap.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-color-div border-2 border-stone-600 rounded-full left-1/2 sm:translate-y-0">
                                                <span className="text-white">2</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-start w-full mx-auto">
                                                <div className="w-full lg:w-1/2 lg:pr-8">
                                                    <div className="p-4 bg-color-div transition duration-500 hover:-translate-y-1 hover:scale-105 text-color-pj rounded-xl shadow-lg ">
                                                        <div className="p-1 flex justify-center">
                                                            <Image src="images/lasalle.png" alt="" className="w-24 h-auto" />
                                                        </div>
                                                        <div className="text-center">
                                                            <h1 className=" text-base font-bold text-color-pj">Administrativo Informática - 2017 / 2022</h1>
                                                            <p className="text-sm mt-1">Trabalhei por 5 anos, adquiri ampla experiência em suporte de informática, infraestrutura e redes. Durante esse período, ganhei
                                                                habilidades técnicas em gerenciamento de servidores, configuração de redes, manutenção de hardware e software, e solução de problemas técnicos em ambientes de TI. Além disso,
                                                                também iniciei minha jornada no desenvolvimento com PHP, adquirindo conhecimentos em programação e desenvolvimento web usando esse framework popular. Aprendi a lidar com diferentes desafios e a
                                                                trabalhar em equipe para oferecer soluções eficazes para os problemas técnicos enfrentados pela empresa. Essa experiência me permitiu desenvolver uma base sólida em tecnologia da informação,
                                                                proporcionando-me uma base sólida para minha carreira profissional. </p>
                                                        </div>
                                                        <div className=" mt-3 flex justify-center">
                                                            <div className=" px-6 h-12 py-2 gap-4 rounded-2xl flex ">
                                                                <Image src="/images/php.png" alt="" className="transition hover:-translate-y-1 hover:scale-110   h-auto w-auto" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-color-div border-2 border-stone-600 rounded-full left-1/2 sm:translate-y-0">
                                                <span className="text-white">3</span>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
               
                </section>
            </section>





        );
    };

    export default main;