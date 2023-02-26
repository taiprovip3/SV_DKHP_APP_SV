import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';




export default Home = (navigation) => {
    
    return (
        <ScrollView>


            <View style={styles.FrameTrangChu}>
                <View style={styles.TopTaskTC}>



                    <Image source={require('../images/logo.png')}
                        style={styles.logo}
                    />

                    <TouchableOpacity>
                        <AntDesign name="downcircleo" size={24} color="black"
                            style={styles.CaretDown}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="bars" size={24} color="black"
                            style={styles.bars}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.ThongTinSV}>
                    <Text style={styles.txtThongTinSV}>Thông tin sinh viên</Text>
                    <Text style={styles.lineHozital}>
                        ______________________________________________________________________
                    </Text>
                    <Image source={require('../images/anhthe1.png')}
                        style={styles.avatar}
                    />
                    <TouchableOpacity>
                        <Text style={styles.XemChiTiet}
                        >Xem chi tiết</Text>
                    </TouchableOpacity>
                    <View style={styles.titThongTinSV}>
                        <View style={styles.cot1TTSV}>
                            <Text style={styles.txtTTSV}>
                                MSSV: 19528321
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Họ Tên: Lê Văn Tùng
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Giới tính: Nam
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Ngày sinh: 08/12/2001
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Nơi sinh: Tỉnh Đăk Nông
                            </Text>
                        </View>
                        <View style={styles.cot2TTSV}>
                            <Text style={styles.txtTTSV}>
                                Lớp học: DHKTPM15CTT
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Khóa học: 2019-2020
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Bậc đào tạo: Đại học
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Loại hình đào tạo: Tiên tiến
                            </Text>
                            <Text style={styles.txtTTSV}>
                                Ngành: Kỹ thuật phần mềm
                            </Text>
                        </View>


                    </View>
                </View>
                {/* Phần thông báo, nhắc nhở */}
                <View style={styles.partThongBaoNhacNho}>
                    <Text style={styles.txtNhacNho}>
                        Nhắc nhở mới, chưa xem
                    </Text>
                    <View style={styles.soLuongTB}>
                        <Text style={styles.nbsoTB}>
                            0
                        </Text>
                        <Ionicons name="notifications-circle-outline" size={24} color="black" />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.xemChiTietTB}
                            onPress={() => { navigation.navigate('Login') }}
                        >
                            Xem chi tiết
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Phần lịch học trong tuần và lịch thi trong tuần */}
                <View style={styles.partLichHocAndThi}>
                    <View style={styles.partLichHocTrongTuan}>
                        <Text style={styles.txtLHTT}>
                            Lịch học trong tuần
                        </Text>
                        <View style={styles.SoLHTT}>
                            <Text style={styles.txtSoLHTT}>
                                2
                            </Text>
                            <EvilIcons name="calendar" size={40} color="black"
                                style={styles.calendar}
                            />
                        </View>
                        <Text style={styles.XemChiTietLHTT}>
                            Xem chi tiết
                        </Text>
                    </View>
                    <View style={styles.partLichThiTrongTuan}>
                        <Text style={styles.txtLTTT}>
                            Lịch thi trong tuần
                        </Text>
                        <View style={styles.SoLTTT}>
                            <Text style={styles.txtSoLTTT}>
                                0
                            </Text>
                            <FontAwesome name="calendar-check-o" size={24} color="black"
                                style={styles.calendar}
                            />
                        </View>
                        <Text style={styles.XemChiTietLTTT}>
                            Xem chi tiết
                        </Text>

                    </View>
                </View>
                {/* Phần Menu các chưc năng cuar sinh viên */}
                <View style={styles.partChucNangSinhVien}>
                    <View style={styles.partCot1}>
                        <EvilIcons name="calendar" size={45} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Lịch theo tuần
                        </Text>
                    </View>
                    <View style={styles.partCot2}>
                        <EvilIcons name="chart" size={45} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Kết quả học tập
                        </Text>
                    </View>
                </View>
                {/* Hàng ngang thứ 2 */}
                <View style={styles.partChucNangSinhVien}>
                    {/* Đăng ký học phần */}

                    <View style={styles.partCot1}  >
                        <TouchableOpacity>
                            <AntDesign name="book" size={30} color="mediumturquoise"
                                style={styles.calendar2}
                                // onPress={() => { navigation.navigate('Đăng ký học phần') }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.txtCot1}
                                // onPress={() => { navigation.navigate('Đăng ký học phần') }}
                            >
                                Đăng ký học phần
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.partCot2}>
                        <Feather name="dollar-sign" size={30} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Tra cứu công nợ
                        </Text>
                    </View>
                </View>
                {/* Hàng ngang thứ 3 */}
                <View style={styles.partChucNangSinhVien}>
                    <View style={styles.partCot1}>
                        <FontAwesome5 name="amazon-pay" size={28} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Thanh toán trực tuyến
                        </Text>
                    </View>
                    <View style={styles.partCot2}>
                        <Foundation name="page-copy" size={29} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Phiếu thu tổng hợp
                        </Text>
                    </View>
                </View>
                {/* Hàng ngang thứ 4 */}
                <View style={styles.partChucNangSinhVien}>
                    <View style={styles.partCot1}>
                        <MaterialCommunityIcons name="calendar-text-outline" size={30} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Lịch theo tiến độ
                        </Text>
                    </View>
                    <View style={styles.partCot2}>
                        <Entypo name="notification" size={28} color="mediumturquoise"
                            style={styles.calendar2}
                        />
                        <Text style={styles.txtCot1}>
                            Nhắc nhở
                        </Text>
                    </View>
                </View>
                <View style={styles.partTienDoHocTap}>
                    <Text style={styles.txtThongTinSV}>Tiến độ học tập</Text>
                    <Text style={styles.lineHozital}>
                        ______________________________________________________________________
                    </Text>
                    <Image source={require('../images/Tiendo.png')}
                        style={styles.imgTiendo}
                    />
                </View>
                <View style={styles.partLopHocPhan}>
                    <View style={styles.titleLopHocPhan}>
                        <Text style={styles.txtThongTinSV}>Tiến độ học tập</Text>
                        <View style={styles.chonHK}>
                            <Text>HK2(2022-2023)</Text>
                        </View>
                    </View>
                    <Text style={styles.lineHozital}>
                        ______________________________________________________________________
                    </Text>
                    <Text style={styles.txtLopHocPhan}>
                        19528321 Khóa luận tốt nghiệp
                    </Text>
                    <Text style={styles.txtLopHocPhan}>
                        19528321 Thực tập doanh nghiệp
                    </Text>
                </View>
            </View>
        </ScrollView>   
    );
}

const styles = StyleSheet.create({
    FrameTrangChu: {
        flex: 1,
        backgroundColor: '#fffafa',
        marginTop:40,
    },
    TopTaskTC: {
        paddingHorizontal: 30,
        height: 70,
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 1,
        borderRadius: 10,
        backgroundColor: '#ffff'
    },
    CaretDown: {
        marginLeft: 120,
    },
    bars: {
        marginLeft: 13,
    },
    logo: {
        width: 170,
        height: 50,
    },
    ThongTinSV: {
        height: 400,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    txtThongTinSV: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 10,
    },
    lineHozital: {
        marginHorizontal: 10,
        fontWeight: '200',
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginHorizontal: 130,
    },
    XemChiTiet: {
        color: '#4169e1',
        fontSize: 16,
        marginHorizontal: 142,
        marginBottom: 22,
    },
    titThongTinSV: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    cot1TTSV: {
        marginRight: 60,
        marginLeft: 20,
    },
    cot2TTSV: {

    },
    txtTTSV: {
        marginBottom: 21,
    },
    partThongBaoNhacNho: {
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 0.3,
    },
    txtNhacNho: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 20,
        marginTop: 10,
    },
    soLuongTB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    nbsoTB: {
        fontWeight: '500',
        fontSize: 40,
    },
    xemChiTietTB: {
        color: '#4169e1',
        fontSize: 16,
        marginLeft: 20,
    },
    partLichHocAndThi: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffafa',
        marginTop: 20,
    },
    partLichHocTrongTuan: {
        flex: 1,
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#e0ffff',
        borderRadius: 20,
        borderWidth: 0.3,
    },
    partLichThiTrongTuan: {
        flex: 1,
        height: 110,
        marginHorizontal: 10,
        backgroundColor: '#fafad2',
        borderRadius: 20,
        borderWidth: 0.3,
    },
    txtLHTT: {
        marginTop: 10,
        marginLeft: 20,
        color: '#00bfff',
        fontWeight: '400',
    },
    SoLHTT: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSoLHTT: {
        marginLeft: 20,
        fontSize: 40,
    },
    calendar: {
        marginLeft: 81,
        marginTop: 7,
    },
    XemChiTietLHTT: {
        marginLeft: 20,
        marginTop: 5,
        color: '#00bfff',
    },
    txtLTTT: {
        marginTop: 10,
        marginLeft: 20,
        color: '#ffa500',
        fontWeight: '400',
    },
    SoLTTT: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSoLTTT: {
        marginLeft: 20,
        fontSize: 40,
    },
    XemChiTietLTTT: {
        marginLeft: 20,
        marginTop: 5,
        color: '#ffa500',
    },
    partChucNangSinhVien: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffafa',
        marginTop: 20,
    },
    partCot1: {
        flex: 1,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 18,
    },
    partCot2: {
        flex: 1,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
    },
    calendar2: {
        marginBottom: 5,
    },
    txtCot1: {
        fontSize: 14,
        fontWeight: '400',
    },
    partTienDoHocTap: {
        height: 380,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    imgTiendo: {
        marginTop: 20,
        marginLeft: 80,
        width: 210,
        height: 250,
    },
    partLopHocPhan: {
        height: 380,
        marginHorizontal: 10,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 0.3,
    },
    titleLopHocPhan: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chonHK: {
        width: 150,
        height: 30,
        borderWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 70,
        marginTop: 25,
    },
    txtLopHocPhan: {
        fontSize: 14,

    },


});
