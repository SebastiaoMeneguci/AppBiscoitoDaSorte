import styled from "styled-components/native";

export const BackGround = styled.View`
    flex: 1;
    background-color: #4b1313;

`;

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #611313;
    top: 50px;
    border-radius: 20px;
`;
export const Image = styled.Image`
    width: 230px;
    height: 230px;
`;

export const TextoFrase = styled.Text`
    font-size: 20px;
    margin: 30px;
    font-style: italic;
    text-align: center;
    color: #dd7b22;
`;

export const ContainerButton = styled.View`
`;

export const Button = styled.TouchableOpacity`
    background-color: #077b33;
    width: 230px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    margin: 10px;

`;

export const ButtonReiniciar = styled.TouchableOpacity`
    background-color: #583333;
    width: 230px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    margin: 10px;

`;

export const TextButton = styled.Text`
   font-size: 20px;
   font-style: bold;
   text-align: center;
   color: #ffff;
`;