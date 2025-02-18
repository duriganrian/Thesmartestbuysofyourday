import Navegacao from "../Navegacao/Navegacao";
import styles from "./ProdutosGeral.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

import NaganoTonic from '../../assets/NaganoTonic.jpg'
import Synergex7 from '../../assets/Synergex7.jpg'
import RenewDental from '../../assets/RenewDental.jpg'
import Guardian from '../../assets/Guardian.jpg'
import Dentavim from '../../assets/Dentavim.jpg'
import GlucoExtend from '../../assets/GlucoExtend.jpg';
import LivPure from '../../assets/LivPure.jpg';
import Dentim from '../../assets/Dentim.jpg';
import TC24 from '../../assets/TC24.jpg';
import Renew from '../../assets/Renew.jpg';
import JavaBurn from '../../assets/JavaBurn.jpg';
import TeaBurn from '../../assets/TeaBurn.jpg';
import Energeia from '../../assets/Energeia.jpg';
import Metanail from '../../assets/Metanail.jpg';
import Igenics from '../../assets/Igenics.jpg';
import Carbofire from '../../assets/Carbofire.jpg';
import SugarDefender from '../../assets/SugarDefender.jpg';
import GlucoBerry from '../../assets/GlucoBerry.jpg';
import IkariaJuice from '../../assets/IkariaJuice.jpg';
import BalmorexPro from '../../assets/BalmorexPro.jpg';
import ClearCrystalVision from '../../assets/ClearCrystalVision.jpg';
import TitanFlow from '../../assets/TitanFlow.jpg';
import PitchBlack from '../../assets/PitchBlack.jpg';
import CardioShield from '../../assets/CardioShield.jpg';
import KeySlim from '../../assets/KeySlim.jpg';
import AppaNail from '../../assets/AppaNail.jpg';
import PinealPure from '../../assets/PinealPure.jpg';
import FoliPrime from '../../assets/FoliPrime.jpg';
import Sumatra from '../../assets/Sumatra.jpg'

function ProdutosGeral() {
    const { t } = useTranslation();
    const [filtroNome, setFiltroNome] = useState("");
    const [termoBusca, setTermoBusca] = useState("");
    const navigate = useNavigate();




    const handleSearch = () => {
        setFiltroNome(termoBusca);
        console.log("Buscando por:", termoBusca);
    };

    // Atualiza os produtos filtrados ao mudar filtroNome
    useEffect(() => {
        console.log("Filtro atualizado:", filtroNome);
    }, [filtroNome]);



    const produtos = [
        { id: 81, nome: "TC24", imagem: TC24, descricao: "Alta qualidade e eficiência", preco: "US$ 49", link: 'https://8da8dfqlylsam5jpqnwh5ayqew.hop.clickbank.net' },
        { id: 82, nome: "Renew", imagem: Renew, descricao: "Fórmula avançada para rejuvenescimento", preco: "US$ 39", link: 'https://7ecd4fopwf-9s5cmfghl4kbs3x.hop.clickbank.net' },
        { id: 83, nome: "Nagano Tonic", imagem: NaganoTonic, descricao: "Tonificante natural para energia e bem-estar", preco: "US$ 59", link: 'https://f7084gph9ivaj8f8kswcv89m6i.hop.clickbank.net' },
        { id: 84, nome: "The Pineal Guardian", imagem: Guardian, descricao: "Regulação natural do ciclo do sono", preco: "US$ 39", link: 'https://eec16aig7j-5hargpgm953sl2u.hop.clickbank.net' },
        { id: 85, nome: "Java Burn", imagem: JavaBurn, descricao: "Suporte para metabolismo acelerado", preco: "US$ 49", link: 'https://7a54bapdxez-hcc4jjia7m-k4h.hop.clickbank.net' },
        { id: 86, nome: "Tea Burn", imagem: TeaBurn, descricao: "Termogênico natural com chá verde", preco: "US$ 49", link: 'https://74469kpn-ju0k9iqt0hlt94ner.hop.clickbank.net' },
        { id: 87, nome: "Energeia", imagem: Energeia, descricao: "Suplemento energético de longa duração", preco: "US$ 39", link: 'https://eb23dlqk8hu4s1f6sb64br3qep.hop.clickbank.net' },
        { id: 88, nome: "Metanail", imagem: Metanail, descricao: "Fortalecimento para unhas e cabelo", preco: "US$ 59", link: 'https://a9f21lkcxezag1hkllj0zfts83.hop.clickbank.net' },
        { id: 89, nome: "Igenics", imagem: Igenics, descricao: "Saúde ocular e proteção antioxidante", preco: "US$ 39", link: 'https://3834dfpowhp5r-qdk2hbmdjdz3.hop.clickbank.net' },
        { id: 90, nome: "Gluco Extend", imagem: GlucoExtend, descricao: "Auxílio no controle glicêmico", preco: "US$ 49", link: 'https://81e4akdj8bv8f8e8mkhirh0u5f.hop.clickbank.net' },
        { id: 91, nome: "Carbofire", imagem: Carbofire, descricao: "Queimador de gordura potente", preco: "US$ 39", link: 'https://49ad2gqn7709q5h9s8p9x8soqh.hop.clickbank.net' },
        { id: 92, nome: "Sugar Defender", imagem: SugarDefender, descricao: "Regulação do açúcar no sangue", preco: "US$ 49", link: 'https://2020dkel6kt-h7oo6eqpe4lt0o.hop.clickbank.net' },
        { id: 93, nome: "GlucoBerry", imagem: GlucoBerry, descricao: "Controle glicêmico e equilíbrio metabólico", preco: "US$ 39", link: 'https://a0f03krk3kq2m5gdphllk9udal.hop.clickbank.net' },
        { id: 94, nome: "Ikaria Juice", imagem: IkariaJuice, descricao: "Suplemento antioxidante para saúde", preco: "US$ 39", link: 'https://d2b91lmbzkr1m1qjch6dha5zek.hop.clickbank.net' },
        { id: 95, nome: "BalmorexPro", imagem: BalmorexPro, descricao: "Regeneração celular e longevidade", preco: "US$ 49", link: 'https://5735amcq8ap0pbe5idtcxa4vdp.hop.clickbank.net' },
        { id: 96, nome: "Clear Crystal Vision", imagem: ClearCrystalVision, descricao: "Proteção ocular e visão nítida", preco: "US$ 49", link: 'https://55565cfbxkx3scc101mdop2q2l.hop.clickbank.net' },
        { id: 97, nome: "TitanFlow", imagem: TitanFlow, descricao: "Saúde cardiovascular otimizada", preco: "US$ 39", link: 'https://eda80frn2i21l4qikhbepjyn79.hop.clickbank.net' },
        { id: 98, nome: "Pitch Black", imagem: PitchBlack, descricao: "Regulador natural do sono profundo", preco: "US$ 49", link: 'https://08e87mdjxf38saok0hxasi6p6k.hop.clickbank.net' },
        { id: 99, nome: "Cardio Shield", imagem: CardioShield, descricao: "Proteção para pressão arterial", preco: "US$ 39", link: 'https://712b2choygq9e-f4ocib1kwhrq.hop.clickbank.net' },
        { id: 100, nome: "KeySlim", imagem: KeySlim, descricao: "Controle de peso saudável", preco: "US$ 49", link: 'https://eb66ffph6azdr1e6fs36nh7x71.hop.clickbank.net' },
        { id: 101, nome: "AppaNail", imagem: AppaNail, descricao: "Fortalecedor de unhas e pele", preco: "US$ 49", link: 'https://d4ef8gcn2hp7edr1v9g8e9ts6b.hop.clickbank.net' },
        { id: 102, nome: "Renew Dental", imagem: RenewDental, descricao: "Saúde bucal e gengival aprimorada", preco: "US$ 49", link: 'https://43c8aaii9fzbecddhathjzwedd.hop.clickbank.net' },
        { id: 103, nome: "Pineal Pure", imagem: PinealPure, descricao: "Desintoxicação e sono profundo", preco: "US$ 49", link: 'https://df532ghq8a06o4gizbof5gwa13.hop.clickbank.net' },
        { id: 105, nome: "FoliPrime", imagem: FoliPrime, descricao: "Regeneração capilar e fortalecimento", preco: "US$ 49", link: 'https://05deb8pewa14sdr6yald04110i.hop.clickbank.net' },
        { id: 106, nome: "Synergex 7", imagem: Synergex7, descricao: "Suplemento de longevidade e vitalidade", preco: "US$ 49", link: 'https://f02abmpc6grbr5khdlkmnb446o.hop.clickbank.net' },
        { id: 107, nome: "ProDentim", imagem: Dentim, descricao: "ProDentim é um probiótico que fortalece dentes e gengivas, equilibrando a microbiota oral.", preco: "US$ 49", link: 'https://36fa2bil1bw9h2ll-hr0vnldbi.hop.clickbank.net' },
        { id: 108, nome: "LivPure", imagem: LivPure, descricao: "apoia a desintoxicação do fígado e perda de peso.", preco: "US$ 49", link: 'https://ae633kogwgs6o0nioo4t619ud6.hop.clickbank.net' },
        { id: 109, nome: "Dentavim", imagem: Dentavim, descricao: "Suplemento de longevidade e vitalidade", preco: "US$ 39", link: 'https://0a2a3aql2i29l2q8qi254gyk1x.hop.clickbank.net' },
        { id: 110, nome: "Sumatra Slim Belly Tonic", imagem: Sumatra, descricao: "Suplemento de longevidade e vitalidade", preco: "US$ 39", link: 'https://1b801mkj-ks6fajc7cmi3in541.hop.clickbank.net' },

    ];

    // Adicione os outros 25 produtos para fechar os 64!




    // Evita erro caso produtos não esteja carregado corretamente
    const produtosFiltrados = produtos.length > 0 ?
        produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(filtroNome.toLowerCase())
        ) : [];



    return (
        <>
            <Navegacao />

            {/* 📌 Seção fixa da barra de pesquisa */}
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

            {/* 📌 Container de produtos */}
            <div className={styles.produtosContainer}>
                {produtosFiltrados.length > 0 ? (
                    <div className={styles.cardsGrid}>
                        {produtosFiltrados.map((produto) => (
                            <div key={produto.id} className={styles.cardWrapper}>
                                <img src={produto.imagem} alt={produto.nome} className={styles.cardImage} />
                                <h3 className={styles.produtoNome}>{produto.nome}</h3>
                                <p className={styles.produtoDescricao}>{produto.descricao}</p>
                                <p className={styles.produtoPreco}>{produto.preco}</p>
                                <a href={produto.link} target="_blank" rel="noopener noreferrer" className={styles.produtoBotao}>
                                    {t('buy_now', { defaultValue: 'Comprar agora' })}
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.noResults}>{t("no_results", { defaultValue: "Nenhum produto encontrado." })}</p>
                )}
            </div>


        </>
    );
}

export default ProdutosGeral;
