import Navegacao from '../Navegacao/Navegacao';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './ProdutossHome.module.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../i18n";
import { FaSearch } from "react-icons/fa";


import Endopump from '../../assets/Endopump.jpg';
import TitanFlow from '../../assets/TitanFlow.jpg'
import JackHammer from '../../assets/JackHammer.jpg';
import Gluco6 from '../../assets/Gluco6.jpg'
import logo from '../../assets/logo.jpg';
import insta from '../../assets/insta.png';
import face from '../../assets/face.png';
import selos from '../../assets/selos.jpg';
import gym1 from '../../assets/gym1.jpg';
import gym2 from '../../assets/gym2.jpg';
import gym3 from '../../assets/gym3.jpg';
import gym4 from '../../assets/gym4.jpg';

function ProdutossHome() {
    const { t } = useTranslation();
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 4;
    const [filtroNome, setFiltroNome] = useState("");
    const [termoBusca, setTermoBusca] = useState("");
    const [historicoBusca, setHistoricoBusca] = useState([]);
    const [mostrarHistorico, setMostrarHistorico] = useState(false);
    const navigate = useNavigate();



    const handleClick = (rota) => {
        navigate(rota);
    };


    const handleSearch = () => {
        if (termoBusca.trim() !== "") {
            setFiltroNome(termoBusca);
            setHistoricoBusca(prev => [...new Set([termoBusca, ...prev])]); // Adiciona ao histórico sem repetir termos
        } else {
            setFiltroNome(""); // Se o campo estiver vazio, limpa o filtro
        }
    };

    useEffect(() => {
        if (filtroNome === "") {
            setFiltroNome(""); // Restaura os produtos quando o campo estiver vazio
        }
    }, [filtroNome]);

    // 🔥 Produtos
    const produtos = [
        {
            id: "1",
            nome: t("product_1_name", { defaultValue: "Endopump" }),
            descricao: t("product_1_description", { defaultValue: "Suplemento para energia, libido e desempenho masculino." }),
            imagem: Endopump,
            link: 'https://55528jhdzht7ndc8y-tewfyn2g.hop.clickbank.net'
        },
        {
            id: "2",
            nome: t("product_2_name", { defaultValue: "Gluco6" }),
            descricao: t("product_2_description", { defaultValue: "Auxilia no controle do açúcar no sangue." }),
            imagem: Gluco6,
            link: 'https://d5db1glq49s7hbg8qmldeybk8o.hop.clickbank.net'
        },
        {
            id: "3",
            nome: t("product_3_name", { defaultValue: "Jack Hammer" }),
            descricao: t("product_3_description", { defaultValue: "Fortalece dentes e gengivas." }),
            imagem: JackHammer,
            link: 'https://467c5dmkzkw-q4i8qc5rm9nsaw.hop.clickbank.net'
        },
        {
            id: "4",
            nome: t("product_4_name", { defaultValue: "TitanFlow" }),
            descricao: t("product_4_description", { defaultValue: "Suporte para próstata e fluxo urinário saudável." }),
            imagem: TitanFlow,
            link: 'https://eda80frn2i21l4qikhbepjyn79.hop.clickbank.net'
        }
    ];

    const categorias = [
        { nome: t("categories.proteins", { defaultValue: "Proteínas" }), classe: styles.proteinas, rota: "/produtosUm" },
        { nome: t("categories.vegan", { defaultValue: "Veganos" }), classe: styles.veganos, rota: "/produtos/veganos" },
        { nome: t("categories.vegetarian", { defaultValue: "Vegetarianos" }), classe: styles.vegetarianos, rota: "/produtos/vegetarianos" },
        { nome: t("categories.thermogenics", { defaultValue: "Termogênicos" }), classe: styles.termogenicos, rota: "/produtos/termogenicos" },
        { nome: t("categories.vitamins", { defaultValue: "Vitaminas" }), classe: styles.vitaminas, rota: "/produtos/vitaminas" },
        { nome: t("categories.clinical_line", { defaultValue: "Linha Clínica" }), classe: styles.linhaClinica, rota: "/produtos/linha-clinica" },
        { nome: t("categories.amino_acids", { defaultValue: "Aminoácidos" }), classe: styles.aminoacidos, rota: "/produtos/aminoacidos" },
        { nome: t("categories.carbohydrates", { defaultValue: "Carboidratos" }), classe: styles.carboidratos, rota: "/produtos/carboidratos" }
    ];

    const selosAprovacao = [{ nome: "", imagem: selos }];


    // Evita erro caso produtos não esteja carregado corretamente
    const produtosFiltrados = produtos.length > 0 ?
        produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(filtroNome.toLowerCase())
        ) : [];

    return (
        <>
            <Navegacao />

            {/* Carousel 
            <div className={styles.carousel}>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
                    {[gym1, gym2, gym3, gym4].map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} className='carousel' />
                        </div>
                    ))}
                </Carousel>
            </div>
           */}
            <div className={styles.section} style={{ justifyContent: 'center', display: 'flex', marginTop: '5%' }}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder={t("search_placeholder", { defaultValue: "Buscar..." })}
                        value={termoBusca}
                        onChange={(e) => {
                            setTermoBusca(e.target.value);
                            if (e.target.value === "") {
                                setFiltroNome(""); // Se apagar o campo, exibe todos os produtos
                            }
                        }}
                        onFocus={() => setMostrarHistorico(true)} // Exibe o histórico ao clicar no input
                        onBlur={() => setTimeout(() => setMostrarHistorico(false), 200)} // Esconde após 200ms (evita sumir ao clicar)
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Permite buscar ao pressionar Enter
                        className={styles.inputBusca}
                    />
                    <FaSearch className={styles.searchIcon} onClick={handleSearch} />


                </div>
            </div>




            <div className={styles.cardsContainer}>
                <div className={styles.cardsGrid}>
                    {produtosFiltrados.length > 0 ? (
                        produtosFiltrados.map((produto) => (
                            <div key={produto.id} className={styles.cardWrapper}>
                                {produto.imagem ? (
                                    <img src={produto.imagem} alt={produto.nome} className={styles.cardImage} />
                                ) : (
                                    <div className={styles.produtoPlaceholder}>Sem imagem</div>
                                )}
                                <h3 className={styles.produtoNome}>{produto.nome}</h3>
                                <p className={styles.produtoDescricao}>{produto.descricao}</p>
                                <a href={produto.link} target="_blank" rel="noopener noreferrer" className={styles.produtoBotao}>
                                    {t('buy_now', { defaultValue: 'Comprar agora' })}
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>{t("no_results", { defaultValue: "Nenhum produto encontrado." })}</p>
                    )}
                </div>
            </div>


            {/* 🔥 Categorias 
            <div className={styles.categoriaSection}>
                <div className={styles.categoriaTituloContainer}>
                    <h2 className={styles.categoriaTitulo}>{t('home_title')}</h2>
                </div>
                <div className={styles.categoriaContainer}>
                    {categorias.map((categoria, index) => (
                        <div key={index} className={`${styles.categoriaItem} ${categoria.classe}`} onClick={() => handleClick(categoria.rota)}>
                            <span>{categoria.nome}</span>
                        </div>
                    ))}
                </div>
            </div>
            */}

            {/* 🔥 Selos de Aprovação */}
            <h2>{t("approval_seals")}</h2>
            <div className={styles.selosContainer}>
                <marquee className={styles.selosMarquee} behavior="scroll" direction="left" scrollamount="5">
                    {selosAprovacao.map((selo, index) => (
                        <div key={index} className={styles.seloItem}>
                            <img src={selo.imagem} alt={selo.nome} className={styles.seloImagem} />
                            <span>{selo.nome}</span>
                        </div>
                    ))}
                </marquee>
            </div>

            {/* 🔥 Rodapé */}
            <div className={styles.rodape}>
                <div className={styles.containerRodape}>
                    <h2>{t("social_media.social_networks")}</h2>
                    <h3>{t("social_media.follow_us")}</h3>
                    <div className={styles.iconesSociais}>
                        <a href="https://www.instagram.com/thesmartestbuysofyourday/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" className={styles.icone} />
                        </a>
                        <a href="https://www.facebook.com/people/The-smartest-buys-of-your-day/" target="_blank" rel="noopener noreferrer">
                            <img src={face} alt="Facebook" className={styles.icone} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdutossHome;

