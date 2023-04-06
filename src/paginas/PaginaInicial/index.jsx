import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";

export default function PaginaInicial() {
	return (
		<>
			<Cabecalho />
			<main>
				<section className={styles.principal}>
					<Menu />
					<div className={styles.principal__imagem}>
						<h1>A galeria mais completa do espaço</h1>
						<img src={banner} alt="Imagem da Terra vista do espaço" />
					</div>
				</section>
				<div>
					<Galeria />
					<Populares />
				</div>
			</main>
			<Rodape />
		</>
	)
}