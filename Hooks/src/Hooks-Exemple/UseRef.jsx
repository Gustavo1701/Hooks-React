import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [nome, setNome] = useState('');
    const nomeDigitado = useRef(0);
    const prevNome = useRef('');

    useEffect(() => {
        const currentLength = nome.length;
        const previousLength = prevNome.current.length;

        if (currentLength > previousLength) {
            nomeDigitado.current += 1;
        } else if (currentLength < previousLength) {
            nomeDigitado.current -= 1;
        }

        prevNome.current = nome;
    }, [nome]);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-text">
                        O useRef é um hook do React que permite criar uma referência mutável que persiste entre renderizações. Ele é usado principalmente para acessar diretamente elementos DOM ou para armazenar valores que não requerem re-renderização quando mudam, como um contador ou um valor temporário. A referência não causa re-renderização quando é atualizada, o que a torna útil para manipulações diretas e otimização de desempenho.
                    </h4>
                    <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">
                        <h4>Qual o seu nome?</h4>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <br />
                        <h3>Olá, {nome}</h3>
                        <br />
                        <p>Você digitou {nomeDigitado.current} caracteres. Descobrimos utilizando o useRef.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseRef;
