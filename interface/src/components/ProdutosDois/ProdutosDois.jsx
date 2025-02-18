import Navegacao from "../Navegacao/Navegacao";
import styles from './ProdutosDois.module.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";


import OkinawaFlat from '../../assets/OkinawaFlat.jpg'
import RenewDental from '../../assets/RenewDental.jpg'
import MenoRescue from '../../assets/MenoRescue.jpg'
import LeanBiome from '../../assets/LeanBiome.jpg'
import Puravive from '../../assets/Puravive.jpg'
import Renew from '../../assets/Renew.jpg';
import KeySlim from '../../assets/KeySlim.jpg';
import Whispeara from '../../assets/Whispeara.jpg';
import FoliPrime from '../../assets/FoliPrime.jpg';
import Moringa from '../../assets/Moringa.jpg';
import GlucoBerry from '../../assets/GlucoBerry.jpg';
import MetaboFlex from '../../assets/MetaboFlex.jpg';
import TeaBurn from '../../assets/TeaBurn.jpg';
import IkariaJuice from '../../assets/IkariaJuice.jpg';
import BalmorexPro from '../../assets/BalmorexPro.jpg';
import GUTVITA from '../../assets/GUTVITA.jpg';
import ClearCrystalVision from '../../assets/ClearCrystalVision.jpg';
import PinealPure from '../../assets/PinealPure.jpg';
import Neurodrine from '../../assets/Neurodrine.jpg';
import NeuroPrime from '../../assets/NeuroPrime.jpg';
import Sync from '../../assets/Sync.jpg';
import VidaCalm from '../../assets/VidaCalm.jpg'

function ProdutoDois() {
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
        { id: 21, nome: "Renew", imagem: Renew, descricao: "Fórmula rejuvenescedora feminina", preco: "US$ 39", link: 'https://7ecd4fopwf-9s5cmfghl4kbs3x.hop.clickbank.net' },
        { id: 22, nome: "LeanBiome", imagem: LeanBiome, descricao: "Suporte para equilíbrio intestinal e perda de peso", preco: "US$ 39", link: 'https://bfc71lek8as6qdd9hvt8tks87h.hop.clickbank.net' },
        { id: 23, nome: "Whispeara", imagem: Whispeara, descricao: "Suporte para saúde hormonal feminina", preco: "US$ 49", link: 'https://b13fegrmw9xbfbivn46loz69by.hop.clickbank.net' },
        { id: 24, nome: "Renew Dental", imagem: RenewDental, descricao: "Saúde bucal e dentes mais fortes", preco: "US$ 49", link: 'https://43c8aaii9fzbecddhathjzwedd.hop.clickbank.net' },
        { id: 25, nome: "GlucoBerry", imagem: GlucoBerry, descricao: "Controle natural da glicose no sangue", preco: "US$ 39", link: 'https://a0f03krk3kq2m5gdphllk9udal.hop.clickbank.net' },
        { id: 26, nome: "FoliPrime", imagem: FoliPrime, descricao: "Suplemento para crescimento capilar", preco: "US$ 49", link: 'https://05deb8pewa14sdr6yald04110i.hop.clickbank.net' },
        { id: 27, nome: "Moringa", imagem: Moringa, descricao: "Fonte de vitaminas e minerais essenciais", preco: "US$ 49", link: 'https://bc63aegq6d0-qzmh1nydu4q9os.hop.clickbank.net' },
        { id: 28, nome: "Okinawa Flat", imagem: OkinawaFlat, descricao: "Apoio para metabolismo e emagrecimento", preco: "US$ 39", link: 'https://07b95hge9jxbqaeckp38m8frcg.hop.clickbank.net' },
        { id: 29, nome: "MetaboFlex", imagem: MetaboFlex, descricao: "Regulação do metabolismo e energia", preco: "US$ 39", link: 'https://63c07ccnxmpbecmapfo003p0-g.hop.clickbank.net' },
        { id: 30, nome: "VidaCalm", imagem: VidaCalm, descricao: "Redução do estresse e equilíbrio emocional", preco: "US$ 59", link: 'https://29ff0ijd1lp1h1jtybo0o71n8v.hop.clickbank.net' },
        { id: 31, nome: "Tea Burn", imagem: TeaBurn, descricao: "Queima de gordura e energia extra", preco: "US$ 49", link: 'https://74469kpn-ju0k9iqt0hlt94ner.hop.clickbank.net' },
        { id: 32, nome: "KeySlim", imagem: KeySlim, descricao: "Auxilia na perda de peso e controle do apetite", preco: "US$ 49", link: 'https://eb66ffph6azdr1e6fs36nh7x71.hop.clickbank.net' },
        { id: 33, nome: "Ikaria Juice", imagem: IkariaJuice, descricao: "Desintoxicação e suporte para emagrecimento", preco: "US$ 39", link: 'https://d2b91lmbzkr1m1qjch6dha5zek.hop.clickbank.net' },
        { id: 34, nome: "BalmorexPro", imagem: BalmorexPro, descricao: "Vitalidade feminina e bem-estar geral", preco: "US$ 49", link: 'https://5735amcq8ap0pbe5idtcxa4vdp.hop.clickbank.net' },
        { id: 35, nome: "GUT VITA", imagem: GUTVITA, descricao: "Saúde intestinal e digestão equilibrada", preco: "US$ 59", link: 'https://55859hij4gq9f7qc6h7dx10k7c.hop.clickbank.net' },
        { id: 36, nome: "Clear Crystal Vision", imagem: ClearCrystalVision, descricao: "Apoio para a saúde dos olhos", preco: "US$ 49", link: 'https://55565cfbxkx3scc101mdop2q2l.hop.clickbank.net' },
        { id: 37, nome: "Pineal Pure", imagem: PinealPure, descricao: "Equilíbrio mental e clareza cognitiva", preco: "US$ 49", link: 'https://df532ghq8a06o4gizbof5gwa13.hop.clickbank.net' },
        { id: 38, nome: "Neurodrine", imagem: Neurodrine, descricao: "Saúde neurológica e cognição aprimorada", preco: "US$ 49", link: 'https://d8b7fncgwhw7icmyh9pes3-ips.hop.clickbank.net' },
        { id: 39, nome: "NeuroPrime", imagem: NeuroPrime, descricao: "Melhora da memória e concentração", preco: "US$ 49", link: 'https://f82f6fml2j2anbgflmvfrjogt1.hop.clickbank.net' },
        { id: 40, nome: "Sync", imagem: Sync, descricao: "Energia e suporte para rotina ativa", preco: "US$ 49", link: 'https://7d2839kj6dpbm-hrcgqizxcm8s.hop.clickbank.net' },
        { id: 41, nome: "Puravive", imagem: Puravive, descricao: "Suporte ao metabolismo feminino, queima de gordura e equilíbrio hormonal", preco: "US$ 39", link: 'https://96e8ddji7hr8jzfkwqp8q2jf1m.hop.clickbank.net' },
        { id: 42, nome: "Meno Rescue", imagem: MenoRescue, descricao: "Suporte para equilíbrio hormonal na menopausa", preco: "US$ 39", link: 'https://25210hik2e-0e9mdkewbkgptr1.hop.clickbank.net' },
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

export default ProdutoDois;
