import React, {useState, useEffect} from 'react';
import {
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Animated,
    Keyboard
} from 'react-native';

export default function Login() {

  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:145, y: 155}));

  useEffect(()=> {
    KeyboardDidShowListener = Keyboard.addListener('KeyboardDidShow', KeyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('KeyboardDidHide', KeyboardDidHide);

    Animated.parallel([
        Animated.spring(offset.y, {
            toValue:0,
            speed:4,
            useNativeDriver: true,
         }),
         Animated.timing(opacity, {
             toValue: 1,
             duration: 500,
             useNativeDriver: true,
         })
    ]).start();


  }, []);

  function KeyboardDidShow() {
    alert("Abero")
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: 55,
            duration: 100,
        }),
        Animated.timing(logo.y, {
            toValue: 65,
            duration: 100,
        }),
    ]).start();
  }

  function KeyboardDidHide() {
    alert("fechado")
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: 145,
            duration: 100,
        }),
        Animated.timing(logo.y, {
            toValue: 155,
            duration: 100,
        }),
    ]).start();
  }

    return (
        <KeyboardAvoidingView style={styles.background}>
            
            <View style={styles.containerLogo}>
                <Animated.Image 
                source={require('../assets/hat.png')}
                style={
                    { width: logo.x, height: logo.y}
                }
                />
            </View>

            <Animated.View 
                style={[
                    styles.container, 
                    {   
                        opacity: opacity,
                        transform:[ 
                                    { translateY: offset.y } 
                        ] 
                    }
                ]}>

                <TextInput 
                    placeholder="E-mail" 
                    autoCorrect={false} 
                    onChangeText={()=>{}}
                    style={styles.input}
                ></TextInput>
                
                <TextInput 
                    placeholder="Senha" 
                    secureTextEntry={true}
                    autoCorrect={false} 
                    onChangeText={()=>{}}
                    style={styles.input}
                ></TextInput>

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       width: "90%",
       paddingBottom: 50
    },
    input: {
        backgroundColor: "#ffffff",
        width: "90%",
        marginBottom: 15,
        color: "#222",
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        backgroundColor: "#fff",
        width: "90%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },
    submitText: {
        color: "#333"
    },
    btnRegister: {
        marginTop: 10,
    },
    registerText: {
        color: "#FFF"
    }
});