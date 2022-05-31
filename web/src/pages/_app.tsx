import { AppProps } from "next/app";
import Head from "next/head";
import { Widget } from "../components/Widget";
import "../global.css";
import "../styles/styles.scss";
import '../assets/bug.svg';
import '../assets/idea.svg';
import '../assets/thought.svg';

export default function MyApp({Component, pageProps} : AppProps<any>){
    return (
    <>
        <Head>
            <meta name="theme-color" content="#FFFFFF"/>
            <title>Portifolio</title>
            <meta name="description" content="Informaçoes profissionais" />
            <link rel="shortcut icon" href="/imagem/c.png" />
            <link rel="stylesheet" href="styles/styles.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <Component {...pageProps}/> 
            <Widget/>
    </>
    )
}