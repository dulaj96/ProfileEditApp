import { 
  View, 
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { 
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  IconButton,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      {/* <View style={{alignItems: 'flex-end'}}>                //header bar
        <MaterialCommunityIcons.Button 
          name='account-edit' 
          color='#000' size={25} 
          backgroundColor='#fff'
          onPress={() => {}}
        />
      </View> */}

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/mithun.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop: 15, marginBottom: 5}]}>Dulaj Mithun</Title>
            <Caption style={styles.caption}>@du_la</Caption>
          </View>
          <View style={{marginLeft: 100, marginTop: 5}}>
            <MaterialCommunityIcons.Button 
              name='account-edit' 
              color='#000' size={25} 
              backgroundColor='#fff'
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="map-marker-radius" color='#777777' size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Imbulgasdeniya, Kegalle</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color='#777777' size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+94 711462690</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color='#777777' size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>dulajmithun96@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {borderRightColor: '#dddddd', borderRightWidth: 1}]}>
          <Title>$100</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>10</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name='heart-outline' color='#FF6347' size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name='credit-card' color='#FF6347' size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name='share-outline' color='#FF6347' size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name='account-check-outline' color='#FF6347' size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name='cog-outline' color='#FF6347' size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      flexDirection: 'row',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      height: 100,
    },
    infoBox: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 30,
    }
});

export default Home;