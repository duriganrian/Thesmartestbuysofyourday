import Navegacao from "../Navegacao/Navegacao";
import styles from './CursosUm.module.css';
import { useTranslation } from "react-i18next";

function CursosUm() {
    const { t } = useTranslation();

    // 🔥 Cursos definidos diretamente no frontend
    const cursos = [
        {
            id: 1,
            nome: t("course_1_name", { defaultValue: "Curso de Marketing Digital" }),
            descricao: t("course_1_description", { defaultValue: "Aprenda estratégias para crescer no digital." }),
            preco: t("course_1_price", { defaultValue: "R$ 499,90" }),
            imagem: 'https://via.placeholder.com/150',
            data: "12/08/2023",
            vendedor: "Academia Digital",
            link: '#'
        },
        {
            id: 2,
            nome: t("course_2_name", { defaultValue: "Curso de Programação Web" }),
            descricao: t("course_2_description", { defaultValue: "Desenvolva aplicações web modernas." }),
            preco: t("course_2_price", { defaultValue: "R$ 599,90" }),
            imagem: 'https://via.placeholder.com/150',
            data: "05/09/2023",
            vendedor: "Code Master",
            link: '#'
        },
        {
            id: 3,
            nome: t("course_3_name", { defaultValue: "Curso de Programação Web" }),
            descricao: t("course_3_description", { defaultValue: "Desenvolva aplicações web modernas." }),
            preco: t("course_3_price", { defaultValue: "R$ 599,90" }),
            imagem: 'https://via.placeholder.com/150',
            data: "05/09/2023",
            vendedor: "Code Master",
            link: '#'
        },
        {
            id: 4,
            nome: t("course_4_name", { defaultValue: "Curso de Programação Web" }),
            descricao: t("course_4_description", { defaultValue: "Desenvolva aplicações web modernas." }),
            preco: t("course_4_price", { defaultValue: "R$ 599,90" }),
            imagem: 'https://via.placeholder.com/150',
            data: "05/09/2023",
            vendedor: "Code Master",
            link: '#'
        },
        {
            id: 5,
            nome: t("course_5_name", { defaultValue: "Curso de Programação Web" }),
            descricao: t("course_5_description", { defaultValue: "Desenvolva aplicações web modernas." }),
            preco: t("course_5_price", { defaultValue: "R$ 599,90" }),
            imagem: 'https://via.placeholder.com/150',
            data: "05/09/2023",
            vendedor: "Code Master",
            link: '#'
        }
    ];

    return (
        <>
            <Navegacao />

            
            <div className={styles.container}>
                {/* Sidebar de filtros */}
                <aside className={styles.sidebar}>
                    <h3>Filtros</h3>
                    <div className={styles.filterSection}>
                        <h4>Idioma</h4>
                        <ul>
                            <li>Inglês (200)</li>
                            <li>Espanhol (150)</li>
                        </ul>
                    </div>
                </aside>

                {/* Área principal */}
                <main className={styles.mainContent}>
                    <input type="text" placeholder="Buscar cursos..." className={styles.searchBar} />
                    {cursos.map((curso) => (
                        <div key={curso.id} className={styles.cursoCard}>
                            <img src={curso.imagem} alt={curso.nome} className={styles.cursoImagem} />
                            <div className={styles.cursoInfo}>
                                <h3 className={styles.cursoNome}>{curso.nome}</h3>
                                <p className={styles.cursoDescricao}>{curso.descricao}</p>
                                <p className={styles.cursoPreco}>{curso.preco}</p>
                                <p className={styles.cursoVendedor}>Por: {curso.vendedor}</p>
                                <p className={styles.cursoData}>📅 {curso.data}</p>
                                <a href={curso.link} className={styles.cursoLink} target="_blank" rel="noopener noreferrer">Promover já</a>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}

export default CursosUm;
