import React, { Component, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from './context';
import axios from 'axios';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default Login = ({ navigation }) => {

    const [getPasswordVisible, setPasswordVisble] = useState(false)
    const [username, setUsername] = useState("sv1");
    const [password, setPassword] = useState("123123az");
    const { setToken, setCurrentUser } = React.useContext(AuthContext);

    async function login(){
        console.log(username);
        console.log(password);
        const userDTO = {username, password};
        const response = await axios.post("http://192.168.1.5:8080/api/login", userDTO);
        if(response.data) {
            setToken(response.data);
            const user_id = username.substring(2,99);
            const response2 = await axios.get("http://192.168.1.5:8080/api/student/getStudentById/"+user_id, {headers: {"Authorization": response.data}});
            setCurrentUser(response2.data);
            Toast.show({
                type: 'success',
                text1: 'Login successfully',
                text2: 'We"ll redirect you soon.. Please wait!'
            });
            setTimeout(() => {
              navigation.navigate("Home");
            }, 200);
        } else {
            Toast.show({
                type: 'error',
                text1: 'Wrong',
                text2: 'Sai mật khẩu vui lòng thử lại!'
            });
        }
        // setCurrentUser(response.data);
        // navigation.navigate('Home');
    }

    return (
        <ImageBackground style={{ height: '100%', width: '100%' }}
            source={require('../images/backgroundLogin.png')}
            resizeMode='stretch'
        >
            <Toast position='top' />
            <View style={styles.partLogin1}>
                <View style={styles.partLogin2}>
                    <View style={styles.partLogin}>

                        {/* Nhập mã số sinh viên */}
                        <TouchableOpacity
                        >
                            <AntDesign name="user" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Nhập vào mã số sinh viên của bạn ?'
                            style={styles.input}
                            onChangeText={(e) => setUsername("sv" + e)}
                            />

                    </View>
                    {/* 
                    Nhập mật khẩu */}
                    <View style={styles.partLogin}>
                        <TouchableOpacity
                        >
                            <AntDesign name="search1" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Nhập mật khẩu của bạn ?'
                            style={styles.input}
                            // use interface Dot view
                            secureTextEntry={getPasswordVisible ? false : true}
                            autoCapitalize='none'
                            onChangeText={(e) => setPassword(e)}
                        />

                        {/* Hiện/ tắt mật khẩu */}
                        <TouchableOpacity
                            style={{ height: '100%', width: 30, position: 'absolute', right: 0 }}
                            onPress={() => {
                                setPasswordVisble(!getPasswordVisible)
                            }}
                        >
                            {getPasswordVisible ?
                                <Image source={require('../images/invisible.png')}
                                    style={{ height: '100%', width: 30 }}
                                    resizeMode="contain"
                                >
                                </Image>
                                :
                                <Image source={require('../images/visible.png')}
                                    style={{ height: '100%', width: 30 }}
                                    resizeMode="contain"
                                >
                                </Image>
                            }
                        </TouchableOpacity>


                    </View>
                    {/* Dăng nhập */}
                    <TouchableOpacity
                        style={styles.btnAdd1}
                        onPress={() => {login()}}
                    >
                        <View style={styles.btnAdd}
                        >
                            <Text style={styles.txtct1}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    partLogin1: {
        flex: 1,
        // backgroundColor: '#f0fff0',
    },
    partLogin: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
    },
    partLogin2: {
        marginTop: '90%',
    },
    iconSearch: {
        marginTop: 10,
    },
    input: {
        height: 44,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 1,


    },
    input1: {
        height: 44,
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginLeft: 70,
    },
    btnAdd: {

        width: '60%',
        height: 40,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        marginTop: 19,
        marginRight: 60,
        marginLeft: 70,


    },
    txtct1: {
        fontWeight: '500',
        fontSize: 18,
    },
    btnAdd1: {
        flex: 1,
        marginLeft: 5,

    },
});
