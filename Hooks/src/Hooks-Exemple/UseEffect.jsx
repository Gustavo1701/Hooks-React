import { useEffect, useState } from "react";

const UseEffect = () => {

    // const [posts, setPost] = useState([]);
    // const [carregando, setCarregando] = useState(true);
    // const [erro, setErro] = useState(null);
    ///////////////// useStates exemplo simples ///////////////
    const [cor, setCor] = useState(0);
    const [frase, setFrase] = useState('');

    const cores = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#f3ff33'];

    const atualizerCor = () => {
        setCor((Cor) => (Cor + 1) % cores.length);
        setFrase('Você utilizou o useEffect')
    }
    useEffect(() => {
        // const GetPosts = async () => {
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //         if (response !== 200) {
        //             console.error("Erro");
        //         }
        //         const data = await response.json();
        //         setPost(data);
        //     } catch (err) {
        //         setErro(err.message);
        //     } finally {
        //         setCarregando(false);
        //     }
        // }
        // GetPosts();
        //////////////////////// exemplo simples //////////////////////////////////

        document.title = frase;
        /////////////////////// fim exemplo simples ///////////////////////////////
    }, [frase]);

    // if (carregando) return <p>Carregando...</p>;
    // if (erro) return <p>{erro}</p>;

    return (
        <>
            <div className="card " >
                <div className="card-body">
                    <h4 className="card-text">O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Isso pode incluir operações como chamadas de API, manipulação de DOM, ou a configuração de timers. O useEffect é chamado após a renderização do componente, permitindo que você responda a mudanças no estado ou nas propriedades.</h4>
                    <div style={{ backgroundColor: cores[cor], width: '100%', padding: '20px', textAlign: 'center' }}>
                        <h1>{frase}</h1>
                        <button className="btn btn-dark" onClick={atualizerCor}>Clique aqui</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseEffect;