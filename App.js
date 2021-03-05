
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import axios from 'axios';

export default function app(){
  const [cep, setCep] = useState(0);
  const [resposta, setResposta] = useState(" ")

function consultar() {
  return axios.get(`http://viacep.com.br/ws/${cep}/json/`)
  .then(function (response) {
    setResposta(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 }


  return(
    <View style={styles.container}>
      <TextInput
       style={styles.input}
       Value={cep}
       onChangeText={cep => setCep(cep)}
       keyboardType= 'numeric'
     />
     <TouchableOpacity style={styles.botao}
      onPress= {() => consultar()}
     >
     <Text style={styles.botaoText}>
       CONSULTAR CEP
     </Text>
   </TouchableOpacity>
     <Text style={styles.respostaText}>
       Cidade: {resposta.localidade} {"\n"}
       Estado: {resposta.uf} {"\n"}
       Bairro: {resposta.bairro} {"\n"}
       Rua: {resposta.logradouro} {"\n"}
       DDD: {resposta.ddd} {"\n"} 
       Ibge: {resposta.ibge}
     </Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    width: 250,
  },
  botao: {
    marginTop: 30,
    backgroundColor: '#add8e6',
    padding: 15,
    borderRadius: 3
  },
  botaoText: {
    fontSize: 17,
  },
  respostaText: {
    marginTop: 30,
    fontSize: 20,
    padding: 30,
  }
});

