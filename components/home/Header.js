
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
        <View>
    <TouchableOpacity>
    <Image style={styles.logo} source={require('../../assets/instalogo.png')} />
      </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
        <Icon style={styles.icon} name="plussquareo" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon style={styles.icon} name="hearto" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.unreadBadge}><Text style={styles.unreadBadgeText}>3</Text></View>
        <Icon style={styles.icon} name="mail" size={25} color="#fff" />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,

    },
    iconsContainer: {
        flexDirection: 'row',

    },
    icon: {
        marginLeft: 10,

    },
    logo: {
        width: 130,
        height: 50,
        resizeMode: 'contain',
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,

    },
    unreadBadgeText: {
        color: '#FFF',
        fontWeight: '600',
    }
})

export default Header;
