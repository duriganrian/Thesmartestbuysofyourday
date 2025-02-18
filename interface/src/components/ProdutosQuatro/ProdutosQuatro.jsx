import Navegacao from "../Navegacao/Navegacao";
import styles from './ProdutosQuatro.module.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";


import OkinawaFlat from '../../assets/OkinawaFlat.jpg'
import VidaCalm from '../../assets/VidaCalm.jpg'
import Helix4 from '../../assets/Helix4.jpg'
import FastBrain from '../../assets/FastBrain.jpg'
import SynaBoost from '../../assets/SynaBoost.jpg'
import Quietum from '../../assets/Quietum.jpg';
import NeuroPure from '../../assets/NeuroPure.jpg';
import NeuroThrive from '../../assets/NeuroThrive.jpg';
import Neurodrine from '../../assets/Neurodrine.jpg';
import NeuroPrime from '../../assets/NeuroPrime.jpg';
import NeuroQuiet from '../../assets/NeuroQuiet.jpg';
import NeuroZoom from '../../assets/NeuroZoom.jpg';
import MindQuell from '../../assets/MindQuell.jpg';
import CerebroZen from '../../assets/CerebroZen.jpg';
import Sync from '../../assets/Sync.jpg';
import ZenCortex from '../../assets/ZenCortex.jpg';
import NeuroTest from '../../assets/NeuroTest.jpg';
import Moringa from '../../assets/Moringa.jpg';
import Gluconite from '../../assets/Gluconite.jpg';
import FoliPrime from '../../assets/FoliPrime.jpg';


function ProdutosQuatro() {
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
        { id: 61, nome: "NeuroPure", imagem: NeuroPure, descricao: "Fórmula para suporte cognitivo e foco.", preco: "US$ 49", link: 'https://8f010boexds9m-qelryl1jy04h.hop.clickbank.net' },
        { id: 63, nome: "Neurodrine", imagem: Neurodrine, descricao: "Suporte neurológico e saúde cerebral", preco: "US$ 49", link: 'https://d8b7fncgwhw7icmyh9pes3-ips.hop.clickbank.net' },
        { id: 64, nome: "NeuroPrime", imagem: NeuroPrime, descricao: "Melhora do desempenho cognitivo", preco: "US$ 49", link: 'https://f82f6fml2j2anbgflmvfrjogt1.hop.clickbank.net' },
        { id: 65, nome: "NeuroQuiet", imagem: NeuroQuiet, descricao: "Ajuda a reduzir a ansiedade e estresse", preco: "US$ 49", link: 'https://94096jom5mtcj2k8rpxa07g9hg.hop.clickbank.net' },
        { id: 66, nome: "Neuro Zoom", imagem: NeuroZoom, descricao: "Aprimoramento do foco e cognição", preco: "US$ 49", link: 'https://8c63cnlnzc11m1ocjmyidl1gau.hop.clickbank.net' },
        { id: 67, nome: "MindQuell", imagem: MindQuell, descricao: "Redução do estresse e equilíbrio mental", preco: "US$ 49", link: 'https://701f0ijd6muzebelxmjd43pi89.hop.clickbank.net' },
        { id: 68, nome: "CerebroZen", imagem: CerebroZen, descricao: "Promove relaxamento e bem-estar", preco: "US$ 49", link: 'https://f40c59ldyhsat2j-pcp149b50n.hop.clickbank.net' },
        { id: 69, nome: "Fast Brain", imagem: FastBrain, descricao: "Aprimoramento da velocidade de raciocínio", preco: "US$ 49", link: 'https://20546krf7929ezk-hne5260w5y.hop.clickbank.net' },
        { id: 70, nome: "Sync", imagem: Sync, descricao: "Melhora a coordenação cognitiva", preco: "US$ 49", link: 'https://7d2839kj6dpbm-hrcgqizxcm8s.hop.clickbank.net' },
        { id: 71, nome: "ZenCortex", imagem: ZenCortex, descricao: "Redução do estresse e ansiedade", preco: "US$ 49", link: 'https://81d979llvlrzt-nopmdmznov9o.hop.clickbank.net' },
        { id: 72, nome: "SynaBoost", imagem: SynaBoost, descricao: "Aprimoramento da saúde neural", preco: "US$ 49", link: 'https://9a8e4ngo18p9fzglbfd2rgwoac.hop.clickbank.net' },
        { id: 73, nome: "Neuro Test", imagem: NeuroTest, descricao: "Estímulo cerebral e energia mental", preco: "US$ 49", link: 'https://d9799leg4czaqckmlnzgw6-p3z.hop.clickbank.net' },
        { id: 75, nome: "VidaCalm", imagem: VidaCalm, descricao: "Ajuda no sono e no relaxamento profundo", preco: "US$ 59", link: 'https://29ff0ijd1lp1h1jtybo0o71n8v.hop.clickbank.net' },
        { id: 76, nome: "Helix", imagem: Helix4, descricao: "Melhoria do processamento cerebral", preco: "US$ 29 ", link: 'https://344b3gql2h08szcbubxugvcub6.hop.clickbank.net' },
        { id: 77, nome: "Moringa", imagem: Moringa, descricao: "Fonte natural de antioxidantes e energia", preco: "US$ 49", link: 'https://bc63aegq6d0-qzmh1nydu4q9os.hop.clickbank.net' },
        { id: 78, nome: "Okinawa Flat", imagem: OkinawaFlat, descricao: "Equilíbrio mental e saúde digestiva", preco: "US$ 39", link: 'https://07b95hge9jxbqaeckp38m8frcg.hop.clickbank.net' },
        { id: 79, nome: "Gluconite", imagem: Gluconite, descricao: "Regulação do sono e suporte metabólico", preco: "US$ 49", link: 'https://1bd47gdj3ercm4p7vtqg-b-9ba.hop.clickbank.net' },
        { id: 80, nome: "FoliPrime", imagem: FoliPrime, descricao: "Fortalecimento mental e saúde capilar", preco: "US$ 49", link: 'https://05deb8pewa14sdr6yald04110i.hop.clickbank.net' },
        { id: 81, nome: "Quietum Plus", imagem: Quietum, descricao: "Suplemento natural que apoia a saúde auditiva, melhorando a circulação no ouvido interno e reduzindo zumbidos.", preco: "US$ 49", link: 'https://3cbd18fozhw-r8hh-7ii251k6g.hop.clickbank.net' },

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

            {/* 📌 Container de produtos */}
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

export default ProdutosQuatro;
