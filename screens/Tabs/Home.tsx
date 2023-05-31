import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import userMark from '../images/homeImages/userMark.png';
import avatar from '../images/avatar.png';

import statusPic1 from '../images/homeImages/statusPic1.png';
import statusPic2 from '../images/homeImages/statusPic2.png';
import statusPic3 from '../images/homeImages/statusPic3.png';
import statusPic4 from '../images/homeImages/statusPic4.png';

import trending1 from '../images/homeImages/trending1.png';
import trending2 from '../images/homeImages/trending2.png';
import trending3 from '../images/homeImages/trending3.png';

import addImage from '../images/homeImages/addImage.png';
import rightArrow from '../images/homeImages/rightArrow.png';

interface IProps {
  item: any;
}

interface IState {
  currentType: string;
}

const status = [
  {
    id: 1,
    image: statusPic1,
    text: 'Royryan Merc...',
  },
  {
    id: 2,
    image: statusPic2,
    text: 'Neil Gaiman',
  },
  {
    id: 3,
    image: statusPic3,
    text: 'Mark mcallister',
  },
  {
    id: 4,
    image: statusPic4,
    text: 'Michael Doug...',
  },
  {
    id: 5,
    image: statusPic1,
    text: 'Royryan Merc...',
  },
  {
    id: 6,
    image: statusPic1,
    text: 'Royryan Merc...',
  },
];

const trending = [
  {name: 'Trending', image: trending1},
  {name: '5-Minutes Read', image: trending2},
  {name: 'Quick Listen', image: trending3},
];

// Flat List Item
const Item = ({item}: any) => (
  <View style={styles.statusItem}>
    <Image source={item.image} />
    <Text
      style={{color: 'white', fontSize: 12, alignSelf: 'center', padding: 7}}>
      {item.text}
    </Text>
  </View>
);

export default class Home extends Component {
  state = {currentType: 'Trending'};

  handlePress = (name: string) => {
    this.setState({currentType: name});
  };

  Trending = ({item}: any) => (
    <View style={{padding: 10}}>
      <Text
        onPress={() => this.handlePress(item.name)}
        style={
          this.state.currentType === item.name
            ? styles.activeTrending
            : styles.trendingTexts
        }>
        <Image
          style={
            this.state.currentType === item.name
              ? styles.activeImage
              : styles.normalImage
          }
          source={item.image}
        />{' '}
        {item.name}
      </Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <View style={styles.homeContainer}>
          <View style={styles.greetingContainer}>
            <View>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
                Good Morning
              </Text>
              <Image source={userMark} />
            </View>
            <Image source={avatar} />
          </View>
          {/* Flat list */}
          <View>
            <FlatList
              horizontal
              data={status}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
          {/* Trending */}
          <View>
            <FlatList
              horizontal
              data={trending}
              renderItem={item => this.Trending(item)}
            />
          </View>

          <Image style={{width: '100%'}} source={addImage} />
          <View style={{flexDirection:"row"}}>
            <Text style={{color:"white"}}>Trending</Text>
            <Text style={{color:"#CDE7BE"}}>Show all <Image source={rightArrow}/></Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10,
    height: '100%',
    backgroundColor: 'black',
  },
  homeText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 80,
  },
  greetingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusItem: {
    marginTop: 20,
    width: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendingContainer: {
    flexDirection: 'row',
    width: 100,
  },
  trendingTexts: {
    color: 'white',
    fontWeight: '600',
    padding: 15,
    textAlign: 'center',
  },
  activeTrending: {
    backgroundColor: '#CDE7BE',
    padding: 13,
    fontWeight: '600',
    borderRadius: 20,
    textAlign: 'center',
  },
  normalImage: {
    tintColor: 'white',
  },
  activeImage: {
    tintColor: 'black',
  },
});
