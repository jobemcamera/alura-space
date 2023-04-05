import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'

export default function Galeria() {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul></ul>
        </section>
    )
}
