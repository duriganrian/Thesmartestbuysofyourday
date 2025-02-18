import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navegacao.module.css';

function Navegacao({ produtos, setProdutosFiltrados }) {
    const [menuAberto, setMenuAberto] = useState(false);
    const [dropdownAberto, setDropdownAberto] = useState(false);
    const { t, i18n } = useTranslation();
    const [busca, setBusca] = useState("");

    const handleSearch = (e) => {
        const termo = e.target.value.toLowerCase();
        setBusca(termo);

        if (Array.isArray(produtos)) {
            const produtosFiltrados = produtos.filter((produto) =>
                produto.nome.toLowerCase().includes(termo)
            );
            setProdutosFiltrados(produtosFiltrados);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.containerFluid}>

                <div className={styles.navbarLeft}>
                    <a className={styles.navbarBrand} href="/">Home</a>
                </div>

                <div className={`${styles.navbarCollapse} ${menuAberto ? styles.show : ''}`}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/produtosUm">Men</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/produtosDois">women</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/produtosTres">elderly</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/produtosQuatro">mental health</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="/produtosGeral">general products</a>
                        </li>
                    </ul>
                    {/* 
                    <select
                        className={styles.languageSelector}
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                        <option value="pt">🇧🇷 Português</option>
                        <option value="en">🇺🇸 English</option>
                    </select>
                    */}
                </div>
            </div>
        </nav>
    );
}

export default Navegacao;
