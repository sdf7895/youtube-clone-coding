import styles from './search_header.module.css';
import React, { useRef } from 'react';

const Search_header = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
    }
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = event => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }
    /*
        입력event 를 처리하는 메소드를 알고싶다면 on 을먼저 쳐보면 그뒤에 event의 메소드들이 나온다
    */
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo"/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.input} 
                type="search" 
                placeholder="Search..." 
                onKeyPress={onKeyPress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img 
                    className={styles.buttonImg} 
                    src="/images/search.png" 
                    alt="search"
                />
            </button>
        </header>
    )
}

export default Search_header;