import React, { useState } from 'react';
import {
    Container,
    Image,
    TextoFrase,
    ContainerButton,
    Button,
    TextButton,
    ButtonReiniciar,
    BackGround
} from '../Home/Index.styled'

function Home() {
    const [img, setImg] = useState(require('../Images/biscoito.png'));
    const [textoFrase, setTextoFrase] = useState('');

    let frases = [
        'A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.'
    ];

    function quebrarBiscoito() {
        let numeroAleatorio = Math.floor(Math.random() * frases.length)
        setImg(require('../Images/biscoitoAberto.png'))
        setTextoFrase(frases[numeroAleatorio])
    }

    function reiniciarBiscoito() {
        setImg(require('../Images/biscoito.png'))
        setTextoFrase('')
    }

    return (
        <BackGround>
            <Container>
                <Image source={img} />
                <TextoFrase>{textoFrase}</TextoFrase>

                <ContainerButton>
                    <Button onPress={quebrarBiscoito}>
                        <TextButton>Quebrar Biscoito</TextButton>
                    </Button>
                </ContainerButton>

                <ContainerButton>
                    <ButtonReiniciar onPress={reiniciarBiscoito}>
                        <TextButton>Reiniciar Biscoito</TextButton>
                    </ButtonReiniciar>
                </ContainerButton>
            </Container>
        </BackGround>
    )
}

export default Home