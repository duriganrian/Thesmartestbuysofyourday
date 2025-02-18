import Navegacao from "../Navegacao/Navegacao";
import styles from './ProdutosTres.module.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


import Resurge from '../../assets/Resurge.jpg'
import Biodynamix from '../../assets/Biodynamix.jpg'
import JointGlide from '../../assets/JointGlide.jpg'
import JointRestore from '../../assets/JointRestore.jpg'
import Quietum from '../../assets/Quietum.jpg';
import ProstaBiome from '../../assets/ProstaBiome.jpg';
import GORILLAFLOW from '../../assets/GORILLAFLOW.jpg';
import CardioShield from '../../assets/CardioShield.jpg';
import TitanFlow from '../../assets/TitanFlow.jpg';
import ReviveDaily from '../../assets/ReviveDaily.jpg';
import MitoLyn from '../../assets/MitoLyn.jpg';
import ProvaDent from '../../assets/ProvaDent.jpg';
import NerveFresh from '../../assets/NerveFresh.jpg';
import HairFortin from '../../assets/HairFortin.jpg';
import NeuroThrive from '../../assets/NeuroThrive.jpg';
import MindQuell from '../../assets/MindQuell.jpg';
import MetaboFlex from '../../assets/MetaboFlex.jpg';
import GlucoTrust from '../../assets/GlucoTrust.jpg';
import SugarDefender from '../../assets/SugarDefender.jpg';
import GlucoBerry from '../../assets/GlucoBerry.jpg';

function ProdutosTres() {
    const { t } = useTranslation();
    const [filtroNome, setFiltroNome] = useState("");
    const [termoBusca, setTermoBusca] = useState("");
    const navigate = useNavigate();

    const handleClick = (rota) => {
        navigate(rota);
    };


    const handleSearch = () => {
        setFiltroNome(termoBusca);
        console.log("Buscando por:", termoBusca);
    };

    const produtos = [
        { id: 41, nome: "ProstaBiome", imagem: ProstaBiome, descricao: "Suporte para saúde da próstata", preco: "US$ 59", link: 'https://03a11cfl2833h9gi5c-ni4re2b.hop.clickbank.net' },
        { id: 42, nome: "GORILLA FLOW", imagem: GORILLAFLOW, descricao: "Apoio natural para o sistema urinário masculino", preco: "US$ 44", link: 'https://12418npb0fq6g5h3whsju-nisr.hop.clickbank.net' },
        { id: 43, nome: "Cardio Shield", imagem: CardioShield, descricao: "Saúde cardiovascular e pressão equilibrada", preco: "US$ 39", link: 'https://712b2choygq9e-f4ocib1kwhrq.hop.clickbank.net' },
        { id: 44, nome: "TitanFlow", imagem: TitanFlow, descricao: "Vitalidade e suporte para circulação sanguínea", preco: "US$ 39", link: 'https://eda80frn2i21l4qikhbepjyn79.hop.clickbank.net' },
        { id: 45, nome: "Revive Daily", imagem: ReviveDaily, descricao: "Regeneração celular e energia diária", preco: "US$ 39", link: 'https://a0484chl57tzj9pgpskosn4sb8.hop.clickbank.net' },
        { id: 46, nome: "MitoLyn", imagem: MitoLyn, descricao: "Fortalecimento das células mitocondriais", preco: "US$ 39", link: 'https://92b5dmrmzdy2f8hbvrx68fam1k.hop.clickbank.net' },
        { id: 47, nome: "ProvaDent", imagem: ProvaDent, descricao: "Saúde bucal e gengivas mais fortes", preco: "US$ 49", link: 'https://9d843hlby8ybn6ljw9w0o0yd9a.hop.clickbank.net' },
        { id: 48, nome: "Nerve Fresh", imagem: NerveFresh, descricao: "Saúde dos nervos e alívio de dores", preco: "US$ 39", link: 'https://d21aderqyf--i7ibnp-6jjlqsj.hop.clickbank.net' },
        { id: 50, nome: "HairFortin", imagem: HairFortin, descricao: "Fortalecimento capilar e redução da queda", preco: "US$ 49", link: 'https://f6e03arp7bt0r0f5-6y9j3ht16.hop.clickbank.net' },
        { id: 51, nome: "Resurge", imagem: Resurge, descricao: "Apoio para sono profundo e recuperação", preco: "US$ 29", link: 'https://3f137blkz9zaibmird7qp-7m5g.hop.clickbank.net' },
        { id: 54, nome: "MindQuell", imagem: MindQuell, descricao: "Tranquilidade mental e redução do estresse", preco: "US$ 49", link: 'https://701f0ijd6muzebelxmjd43pi89.hop.clickbank.net' },
        { id: 55, nome: "MetaboFlex", imagem: MetaboFlex, descricao: "Regulação metabólica e energia extra", preco: "US$ 49", link: 'https://63c07ccnxmpbecmapfo003p0-g.hop.clickbank.net' },
        { id: 56, nome: "Joint Glide Provides", imagem: JointGlide, descricao: "Saúde das articulações e mobilidade", preco: "US$ 49", link: 'https://e7deffpj0mz5s5d9v3qqw7y0iv.hop.clickbank.net' },
        { id: 57, nome: "Joint Genesis", imagem: Biodynamix, descricao: "Proteção das articulações e flexibilidade", preco: "US$ 39", link: 'https://e3ef8fpf2k3-h8f9yfxdibpvd5.hop.clickbank.net' },
        { id: 58, nome: "GlucoTrust", imagem: GlucoTrust, descricao: "Controle glicêmico e saúde do pâncreas", preco: "US$ 49", link: 'https://b5e03mcm9dp-oaeesssk-f1e4p.hop.clickbank.net' },
        { id: 59, nome: "Sugar Defender", imagem: SugarDefender, descricao: "Apoio para equilíbrio do açúcar no sangue", preco: "US$ 49", link: 'https://2020dkel6kt-h7oo6eqpe4lt0o.hop.clickbank.net' },
        { id: 60, nome: "GlucoBerry", imagem: GlucoBerry, descricao: "Fórmula para metabolismo da glicose", preco: "US$ 39", link: 'https://a0f03krk3kq2m5gdphllk9udal.hop.clickbank.net' },
        { id: 61, nome: "Quietum Plus", imagem: Quietum, descricao: "Suplemento natural que apoia a saúde auditiva, melhorando a circulação no ouvido interno e reduzindo zumbidos.", preco: "US$ 49", link: 'https://3cbd18fozhw-r8hh-7ii251k6g.hop.clickbank.net' },
        { id: 62, nome: "Joint Restore Gummies", imagem: JointRestore, descricao: "Fórmula para bem-estar e equilíbrio", preco: "US$ 39,98", link: 'https://37709elpycw4gzqcze2rvc1v83.hop.clickbank.net' },

    ];

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

            {/* 📌 Container dos produtos */}
            <div className={styles.cardsContainer}>
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

export default ProdutosTres;