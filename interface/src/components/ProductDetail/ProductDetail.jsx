{/*
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./ProductDetail.module.css";

import TitanFlow from '../../assets/TitanFlow.jpg'
import JackHammer from '../../assets/JackHammer.jpg';
import Gluco6 from '../../assets/Gluco6.jpg'
import Endopump from '../../assets/Endopump.jpg';

const produtos = [
    {
        id: "1",
        nome: "Endopump",
        descricao: "Apoio avançado para performance esportiva.",
        preco: "R$ 399,90",
        imagem: Endopump,
        sobre: "NeuroPure é um suplemento premium desenvolvido para apoiar a saúde dos nervos. Formulado com ingredientes naturais, ajuda a reduzir o desconforto e melhora a função nervosa.",
        informacoes: [
            { chave: "Marca", valor: "Premium Vitality" },
            { chave: "Quantidade", valor: "60 cápsulas" },
            { chave: "Origem", valor: "Fabricado nos EUA" },
            { chave: "Ingredientes principais", valor: "Extrato de Raiz de Corydalis, Papoula da Califórnia, Raiz de Marshmallow" },
            { chave: "Indicação", valor: "Apoio à saúde dos nervos e alívio de desconfortos" },
            { chave: "Benefícios", valor: "Reduz o desconforto nervoso, melhora a função neuromuscular e promove bem-estar geral." },
            { chave: "Modo de uso", valor: "Tomar 2 cápsulas ao dia, preferencialmente com as refeições." }
        ],
        link: "https://example.com/neuro-pure"
    },
    {
        id: "2",
        nome: "Gluco6",
        descricao: "Suplemento para controle do açúcar no sangue.",
        preco: "R$ 299,90",
        imagem: Gluco6,
        video: "/videos/Gluco6.mp4",
        sobre: "Gluco6 ajuda a manter níveis saudáveis de glicose no sangue com ingredientes naturais.",
        informacoes: [
            { chave: "Marca", valor: "HealthPlus" },
            { chave: "Quantidade", valor: "60 cápsulas" },
            { chave: "Origem", valor: "Fabricado no Brasil" },
            { chave: "Ingredientes principais", valor: "Canela, Ácido Alfa-Lipóico, Berberina" },
            { chave: "Indicação", valor: "Controle do açúcar no sangue." }
        ],
        link: "https://d5db1glq49s7hbg8qmldeybk8o.hop.clickbank.net"
    },
    {
        id: "3",
        nome: "Jack Hammer",
        descricao: "Suplemento para saúde bucal.",
        preco: "R$ 249,90",
        imagem: JackHammer,
        video: "/videos/Dentavim.mp4",
        sobre: "Dentavim fortalece dentes e gengivas com nutrientes essenciais.",
        informacoes: [
            { chave: "Marca", valor: "OralCare" },
            { chave: "Quantidade", valor: "30 cápsulas" },
            { chave: "Origem", valor: "Fabricado no Canadá" },
            { chave: "Ingredientes principais", valor: "Cálcio, Zinco, Vitamina D" },
            { chave: "Indicação", valor: "Saúde bucal e fortalecimento dos dentes." }
        ],
        link: "https://example.com/dentavim"
    },
    {
        id: "4",
        nome: "TitanFlow",
        descricao: "Probióticos para saúde bucal.",
        preco: "R$ 319,90",
        imagem: TitanFlow,
        video: "/videos/ProDentim.mp4",
        sobre: "ProDentim melhora a flora bucal e promove gengivas saudáveis.",
        informacoes: [
            { chave: "Marca", valor: "DentalBalance" },
            { chave: "Quantidade", valor: "45 comprimidos mastigáveis" },
            { chave: "Origem", valor: "Fabricado na Alemanha" },
            { chave: "Ingredientes principais", valor: "Lactobacillus Reuteri, Ácido Málico, Hortelã" },
            { chave: "Indicação", valor: "Equilíbrio da microbiota oral." }
        ],
        link: "https://example.com/prodentim"
    }
];

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        const produtoEncontrado = produtos.find((p) => p.id === id);
        if (!produtoEncontrado) {
            navigate("/produtos");
        } else {
            setProduto(produtoEncontrado);
        }
    }, [id, navigate]);

    if (!produto) return null;

    return (
        <div className={styles.container}>
            <div className={styles.productView}>
                <div 
                    className={styles.imageSection}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {produto.imagem ? (
                        <img 
                            src={produto.imagem} 
                            alt={produto.nome} 
                            className={styles.produtoImagem}
                            />
                    ) : (
                        <div className={styles.produtoPlaceholder}>Sem imagem</div>
                    )}
                </div>
                <div className={styles.detailsSection}>
                    <h1 className={styles.productTitle}>{produto.nome}</h1>
                    <p className={styles.productDescription}>{produto.descricao}</p>
                    <h2 className={styles.productPrice}>{produto.preco}</h2>
                    <ul className={styles.infoList}>
                        {produto.informacoes.map((item, index) => (
                            <li key={index}>
                                <strong>{item.chave}:</strong> {item.valor}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.buySection}>
                        <Button className={styles.buyButton}>
                            <a href={produto.link} target="_blank" rel="noopener noreferrer">
                                Buy now
                            </a>
                        </Button>
                        <button onClick={() => navigate(-1)} className={styles.voltarBotao}>
                        Back
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.productInfo}>
                <h3>Informações sobre o Produto</h3>
                <p>{produto.sobre}</p>
                <ul className={styles.infoList}>
                    {produto.informacoes.map((item, index) => (
                        <li key={index}>
                            <strong>{item.chave}:</strong> {item.valor}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
     */}