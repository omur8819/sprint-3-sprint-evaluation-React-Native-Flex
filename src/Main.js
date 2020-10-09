import React from 'react';
import {SafeAreaView, View, Text, StyleSheet,TouchableOpacity} from 'react-native';

import MyBanner from './components/MyBanner';
import MyButton from './components/MyButton';

const food_data = [
  {
    id: 0,
    title: 'Çorbalar',
    desc: 'Birbirinden leziz çorbalar',
    color: '#e57373',
    isActive: false,
  },
  {
    id: 1,
    title: 'Ara Sıcaklar',
    desc: 'Lezzetli aparetifler',
    color: '#81d4fa',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ana Yemekler',
    desc: 'Doyurucu Lezzetler',
    color: '#ffd54f',
    isActive: true,
  },
  {
    id: 3,
    title: 'Alkolsüz İçecekler',
    desc: 'Serinletici Lezzetler',
    color: '#ffd5f0',
    isActive: false,
  },
  {
    id: 4,
    title: 'Alkollü İçecekler',
    desc: 'Sert Lezzetler',
    color: '#b0f300',
    isActive: false,
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {food_data.map((food) => {
          return (
            <MyBanner
              title={food.title}
              desc={food.desc}
              color={food.color}
              isActive={food.isActive}
            />
          );
        })}

        <TouchableOpacity
          style={styles.container}
          onPress={() => alert('Hello')}
          onLongPress={() => alert('Long Press')}>
          <Text style={styles.text}>Yenile</Text>
        </TouchableOpacity>

        {/* <MyBanner 
                title="Çorbalar" 
                desc="Birbirinden leziz çorbalar" 
                color="#e57373"
                isActive={false}
                />

        <MyBanner 
                title="Ara Sıcaklar" 
                desc="Lezzetli aparetifler"
                color="#81d4fa" 
                isActive={true}
        />

        <MyBanner 
                title="Ana Yemekler" 
                desc="Doyurucu Lezzetler" 
                color="#ffd54f"
                isActive={false}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0277bd',
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    text: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  });
