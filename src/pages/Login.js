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
  const [logo] = useState(new Animated.ValueXY({x:130, y: 155}));

  useEffect(()=> {

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


    return (
        <KeyboardAvoidingView style={styles.background}>
            
            <View style={styles.containerLogo}>
                <Animated.Image 
                source={require('../assets/hat.png')}
                style={
                    { width: 200, height: 200}
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