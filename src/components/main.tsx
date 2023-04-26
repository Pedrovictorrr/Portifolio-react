import React from "react";

const main = () => {
    return (
        <section className="">
            <section>
                <div className="mt-24 text-center grid justify-center  items-center justify-items-center   container mx-auto">
                    <div className="w-56 h-56 ">
                        <img src="/images/pedro2.jpg" alt="" className="rounded-full border " />
                    </div>
                    <h1 className="text-color-pj text-2xl mt-5">Pedro Victor Fernandes de Abreu</h1>
                    <h1 className="text-color-pj text-2xl">Full Stack Developer</h1>
                </div>
                <div className="mt-10 container p-5 mx-auto  rounded-xl shadow bg-color-div text-color-pj">
                    <h1 className="mt-3 text-center text-2xl">Sobre</h1><br></br>
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
                    <h1 className="mt-10 text-color-pj text-center text-2xl">Projetos</h1><br></br>
                    <div className=" flex-row gap-5  justify-center flex">
                        <div className="p-5 basis-1/2 justify-center text-center">
                            <h1 className="text-2xl text-color-pj">DETRO - www.detro.gov.br</h1>
                            <p className="text-color-pj mt-3">Neste projeto, utilizei PHP, Bootstrap e CSS para renovar completamente o visual do site do governo do Rio de Janeiro. Implementei um design moderno e atraente, utilizando as melhores práticas de desenvolvimento web e garantindo uma experiência do usuário otimizada. Além disso, integrei recursos avançados de usabilidade e acessibilidade, visando proporcionar uma experiência positiva para os usuários do site. O resultado final foi um site renovado e aprimorado, com uma interface amigável, responsiva e funcional, que atendeu aos requisitos e expectativas do governo do Rio de Janeiro e de seus usuários.</p>

                            <div className=" mt-3 flex justify-center">
                                <div className="bg-color-div shadow px-6 py-2 gap-4 rounded-2xl flex border border-stone-600">
                                    <img src="/images/Laravel.png" alt="" className="w-10" />
                                    <img src="/images/mysql.png" alt="" className="w-16 v" />
                                    <img src="/images/php.png" alt="" className="w-16 h-auto" />
                                    <img src="/images/bootstrap.png" alt="" className="h-10 w-auto" />
                                </div>
                            </div>
                        </div>
                        <div className=" basis-1/3 p-5">
                            <img src="/images/detro.png" alt="" className="w-11/12 h-64  rounded-2xl border-4 border-stone-600" />
                        </div>
                    </div>
                    <hr />
                    <div className=" flex-row gap-5  justify-center flex">
                        <div className=" basis-1/3 p-5">
                            <img src="/images/Lanche.png" alt="" className="w-auto  rounded-2xl border-4 border-stone-600" />
                        </div>
                        <div className="p-5 basis-1/2 justify-center text-center">
                            <h1 className="text-2xl text-color-pj">Lanche na Praia - www.lanchenapraia.com.br</h1>
                            <p className="text-color-pj mt-3">Eu lidero um emocionante projeto de desenvolvimento de um aplicativo web e mobile para delivery na praia, utilizando React para o front-end web, React Native para o aplicativo mobile, Laravel para a API e MySQL para o banco de dados, todos hospedados na AWS. Como CEO da empresa, tive o prazer de liderar uma equipe talentosa de desenvolvedores, muitos dos quais eram meus amigos pessoais. Juntos, criamos uma solução tecnológica inovadora que permite aos usuários fazerem pedidos de delivery de alimentos na praia com facilidade e conveniência. Foi gratificante ver o projeto ganhar vida e se tornar um sucesso, oferecendo uma experiência única aos nossos clientes.</p>
                            <div className=" mt-3 flex justify-center">
                                <div className="bg-color-div shadow px-6 py-2 gap-4 rounded-2xl flex border border-stone-600">
                                    <img src="/images/react.png" alt="" className="w-auto h-10" />
                                    <img src="/images/Laravel.png" alt="" className="w-10" />
                                    <img src="/images/mysql.png" alt="" className="w-16 v" />
                                    <img src="/images/php.png" alt="" className="w-16 h-auto" />
                                    <img src="/images/tailwind.png" alt="" className="h-10 w-auto" />
                                    <img src="/images/typescript.png" alt="" className="w-10 h-auto" />
                                    <img src="/images/aws.png" alt="" className="p-1 w-16 h-auto" />
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