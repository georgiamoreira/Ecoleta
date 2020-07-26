import React, { useEffect, useState, ChangeEvent } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground,  Text, Image,  StyleSheet, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

// interface Uf {
//   label: string;
//   value: string;
//   placeholder: string;
// }

// interface City {
//   label: string;
//   value: string;
//   placeholder: string;
// }

const Home = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const navigation = useNavigation();

  const [selectedUf, setSelectedUf] = useState('RN');
  const [selectedCity, setSelectedCity] = useState('Natal');

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => {
        console.log(city);
        return city.nome
      });
      console.log(selectedUf)
      
      setCities(cityNames);
    });
  }, [selectedUf]);

  function handleSelectUf(itemValue: React.ReactText, itemIndex: number) {
    // 1. identifiquei o que era esse event usando console.log
    // 2. criei uma interface Uf para representar o tipo de event
    // 3. usei o valor event.value para setar o setSelectedUf

    const uf = itemValue.toString();
    setSelectedUf(uf);
    
  }

   
  // TODO: Corrigir o CITY
  function handleSelectCity(itemValue: React.ReactText, itemIndex: number) {
    const city = itemValue.toString();
    setSelectedCity(city);
  }

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      selectedUf,
      selectedCity,
    });
  }

  // const [isUfVisible, setIsUfVisible] = useState(false);
  // const [isCityVisible, setIsCityVisible] = useState(false);

  // const handleOpenUf = () => {
  //   // 1. Tornar visivel o dropdown atual.
  //   // 2. Fechar outros dropdowns que estejam abertos.
  //   setIsUfVisible(true);
  //   if (isCityVisible === true) {
  //     setIsCityVisible(false);
  //   }
  // }

  // const handleOpenCity = () => {
  //   setIsCityVisible(true);
  //   if (isUfVisible === true) {
  //     setIsUfVisible(false);
  //   }
  // }

  // const handleCloseUf = () => {
  //   setIsUfVisible(false);
  // }

  // // TODO: Fazer o handleCloseCity 

  // const handleCloseCity = () => {
  //   setIsCityVisible(false);
  // }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >    
    <ImageBackground source={require('../../assets/home-background.png')} style={styles.container} imageStyle={{ width: 274, height: 368 }} >
      <View style={styles.main}>
        <View>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>      
      </View>
      </View>

      <View style={styles.footer}>

      <Picker
        selectedValue={selectedUf}
        style={styles.picker}
        onValueChange={handleSelectUf}
      >
        <Picker.Item label={selectedUf} value='Selecione um Estado'/>
        {ufs.map(uf => (
          <Picker.Item key={uf} label={uf} value={uf}/>
        ))}
      </Picker>
      
      <Picker
        selectedValue={selectedCity}
        style={styles.picker}
        onValueChange={handleSelectCity}
      >
        <Picker.Item label={selectedCity} value='Selecione uma cidade'/>
        {cities.map(city => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>


      
        
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
    </KeyboardAvoidingView>    
    );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 32,
      },
    
      main: {
        flex: 1,
        justifyContent: 'center',
      },
    
      title: {
        color: '#322153',
        fontSize: 24,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
      },
    
      description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
      },
    
      footer: {},
    
      select: {},
    
      picker: {
        color: '#000',
        fontSize: 10,
        height: 60,  
        width: "100%",  
        justifyContent: 'center',  
        marginTop: 0,
        overflow: 'hidden',

      },

      button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 50,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
      }
    });

export default Home;

