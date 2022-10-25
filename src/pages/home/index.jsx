import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../../components/userProfile';
import Experience from '../../components/experience';
import casimper from '../../assets/images/Casimper.png';
import unicap from '../../assets/images/unicap.jpg';

export default function Home() {
    return (
        <Row>
            <Col m="4" s="12">
                <UserProfile />
            </Col>

            <Col m="8" s="12">
                <h5 className="subtitle">Sobre mim</h5>

                <Card>
                    <div>
                        <p><b>Bem-vindo ao meu perfil 😉</b></p>
                        <p>
                        <dl>Estou sempre em busca de aprender, adoro descobrir todas as coisas novas e muito apaixonado por tecnologia.</dl>
                                <dd>🙋🏽‍♂️ Brasileiro, Solteiro, 23 anos e Nascido em Recife-PE;</dd>
                                <dd>🦻🏽 Deficiente Auditivo Bilateral e/ou Surdo;</dd>
                                <dd>👷🏽‍♂️ Engenheiro Civil, possuo um registro profissional no CREA-PE;</dd>
                                <dd>🎓 Me formei no Curso Superior de GRADUAÇÃO - Bacharelado em Engenharia Civil por Universidade Católica de Pernambuco (UNICAP), concluído em 2020.2;</dd>
                                <dd>💼 Atualmente trabalho meio período em home office em uma empresa de impermeabilização, no cargo de Analista de projetos;</dd>
                                <dd>💖 Estou interessado em Desenvolvimento Web Front-end 💻, Investimentos 📈 e Fotografia 📸;</dd>
                                <dd>📚 Atualmente estou aprendendo em programação, estudando HTML, CSS, JavaScript e React.</dd>
                        </p>
                        <br />
                        <p><b>OBJETIVO</b></p>
                        <p>
                        <dl>Busco mais experiências desafiadoras na área em que obtenho conhecimento, 
                        fazer parte desta empresa e poder ter oportunidades para desenvolver minhas habilidades 
                        e aprimorar minhas capacidades dentro da área de tecnologia e da engenharia e contribuir 
                        para o crescimento da organização e sucesso da mesma.</dl>
                        </p>
                    </div>
                </Card>
                
                <h5 className="subtitle">Experiência</h5>
                <Experience
                    title="Analista de projetos"
                    company="CASIMPER"
                    description="O levantamento de medidas adequadas das áreas internas e 
                    externas a ser impermeabilizadas nos projetos de obras com a utilização do AutoCAD (DWGs e PDFs), 
                    de acordo com às solicitações dos clientes para organizar a elaboração dos projetos de impermeabilizações 
                    e também de laudos técnicos necessários. Em home office."
                    avatar={casimper}
                />  

                <Experience
                    title="Estagiário de engenharia civil"
                    company="UNICAP"
                    description="Auxiliador de planilhas orçamentárias e de cronogramas de obras, 
                    interpretei a leitura de projetos arquitetônicos, elaborei a medição de serviços executados 
                    e os relatórios diários de obras (RDO's), e acompanhamento a execução de obras em reforma dos blocos."
                    avatar={unicap}
                />            
            </Col>
        </Row>
    );
}