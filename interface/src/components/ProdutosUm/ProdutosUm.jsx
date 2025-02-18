import Navegacao from "../Navegacao/Navegacao";
import styles from './ProdutosUm.module.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";


import Resurge from '../../assets/Resurge.jpg'
import Synergex7 from '../../assets/Synergex7.jpg'
import ReviveDaily from '../../assets/ReviveDaily.jpg'
import Fluxactive from '../../assets/Fluxactive.jpg'
import TC24 from '../../assets/TC24.jpg';
import TitanFlow from '../../assets/TitanFlow.jpg';
import MaxBoost from '../../assets/MaxBoost.jpg';
import ProstaBiome from '../../assets/ProstaBiome.jpg';
import GorillaFlow from '../../assets/GorillaFlow.jpg';
import Protoflow from '../../assets/Protoflow.jpg';
import UltraProstaCare from '../../assets/UltraProstaCare.jpg';
import SteelFlowPro from '../../assets/SteelFlowPro.jpg';
import CriticalT from '../../assets/CriticalT.jpg';
import Carbofire from '../../assets/Carbofire.jpg';
import Energeia from '../../assets/Energeia.jpg';
import MetaboFlex from '../../assets/MetaboFlex.jpg';
import MitoThrive from '../../assets/MitoThrive.jpg';
import MitoLyn from '../../assets/MitoLyn.jpg';
import ReliverPro from '../../assets/ReliverPro.jpg';

function ProdutosUm() {
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



    // 🔥 Lista de produtos atualizada e formatada corretamente
    const produtos = [
        { id: 1, nome: "TC24", imagem: TC24, descricao: "Suplemento para otimização da testosterona e aumento de energia.", preco: "US$ 49", link: 'https://8da8dfqlylsam5jpqnwh5ayqew.hop.clickbank.net' },
        { id: 2, nome: "TitanFlow", imagem: TitanFlow, descricao: "Fórmula natural para a saúde da próstata e fluxo urinário.", preco: "US$ 39", link: 'https://eda80frn2i21l4qikhbepjyn79.hop.clickbank.net' },
        { id: 3, nome: "Max Boost", imagem: MaxBoost, descricao: "Suplemento energético para vitalidade e desempenho físico.", preco: "US$ 39", link: 'https://9f5ccjdp7aq6l4ccpupdxf4s3t.hop.clickbank.net' },
        { id: 4, nome: "ProstaBiome", imagem: ProstaBiome, descricao: "Probiótico para suporte à saúde da próstata e microbiota.", preco: "US$ 40", link: 'https://03a11cfl2833h9gi5c-ni4re2b.hop.clickbank.net' },
        { id: 5, nome: "Gorilla Flow", imagem: GorillaFlow, descricao: "Fórmula herbal para suporte à testosterona e vitalidade.", preco: "US$ 44", link: 'https://12418npb0fq6g5h3whsju-nisr.hop.clickbank.net' },
        { id: 6, nome: "Synergex 7", imagem: Synergex7, descricao: "Suplemento para melhora da libido e desempenho masculino.", preco: "US$ 49", link: 'https://f02abmpc6grbr5khdlkmnb446o.hop.clickbank.net' },
        { id: 7, nome: "Protoflow", imagem: Protoflow, descricao: "Fórmula para saúde urinária e suporte à bexiga.", preco: "US$ 49", link: 'https://372e0akgwj39p8ed4i6do9qgbh.hop.clickbank.net' },
        { id: 8, nome: "Ultra Prosta Care", imagem: UltraProstaCare, descricao: "Suplemento avançado para manutenção da saúde da próstata.", preco: "US$ 49", link: 'https://9a69aimm0ev5j-hits00341l1z.hop.clickbank.net' },
        { id: 9, nome: "Steel Flow Pro", imagem: SteelFlowPro, descricao: "Fórmula para circulação e suporte ao desempenho físico.", preco: "US$ 49", link: 'https://646f2fkl4kz6k6dr5csij6yovn.hop.clickbank.net' },
        { id: 10, nome: "Critical T", imagem: CriticalT, descricao: "Suplemento para elevação da testosterona e energia.", preco: "US$ 67", link: 'https://05944mjp3kqdi9l1s2vfjx0r5s.hop.clickbank.net' },
        { id: 11, nome: "Carbofire", imagem: Carbofire, descricao: "Fórmula para suporte ao metabolismo e controle de peso.", preco: "US$ 39", link: 'https://49ad2gqn7709q5h9s8p9x8soqh.hop.clickbank.net' },
        { id: 12, nome: "Energeia", imagem: Energeia, descricao: "Aumento de energia e resistência para o dia a dia.", preco: "US$ 39", link: 'https://eb23dlqk8hu4s1f6sb64br3qep.hop.clickbank.net' },
        { id: 13, nome: "Resurge", imagem: Resurge, descricao: "Fórmula para regeneração corporal e melhora do sono.", preco: "US$ 29", link: 'https://3f137blkz9zaibmird7qp-7m5g.hop.clickbank.net' },
        { id: 14, nome: "Metabo Flex", imagem: MetaboFlex, descricao: "Suplemento para suporte ao metabolismo e emagrecimento.", preco: "US$ 49", link: 'https://63c07ccnxmpbecmapfo003p0-g.hop.clickbank.net' },
        { id: 15, nome: "Revive Daily", imagem: ReviveDaily, descricao: "Suporte à recuperação muscular e vitalidade.", preco: "US$ 39", link: 'https://a0484chl57tzj9pgpskosn4sb8.hop.clickbank.net' },
        { id: 16, nome: "Fluxactive", imagem: Fluxactive, descricao: "Fórmula para suporte à saúde urinária masculina.", preco: "US$ 49", link: 'https://c28158ch2gv8hbn3-pbxsepnm1.hop.clickbank.net' },
        { id: 17, nome: "MitoThrive", imagem: MitoThrive, descricao: "Apoio à saúde celular e energia mitocondrial.", preco: "US$ 39", link: 'https://0db268mi37y6n3hhshsllowlho.hop.clickbank.net' },
        { id: 18, nome: "MitoLyn", imagem: MitoLyn, descricao: "Aprimoramento físico e mental para alta performance.", preco: "US$ 39", link: 'https://92b5dmrmzdy2f8hbvrx68fam1k.hop.clickbank.net' },
        { id: 20, nome: "RELIVER", imagem: ReliverPro, descricao: "Fórmula avançada para suporte hepático e resistência.", preco: "US$ 49", link: 'https://fe1e0ldi-cp4p1jdr9jtshqm1b.hop.clickbank.net' },
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
                                {produto.imagem ? (
                                    <img src={produto.imagem} alt={produto.nome} className={styles.cardImage} />
                                ) : (
                                    <div className={styles.produtoPlaceholder}>Sem imagem</div>
                                )}
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

export default ProdutosUm;
