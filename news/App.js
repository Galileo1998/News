import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, YellowBox } from 'react-native';
import { getNewsApi } from './src/api/news';
import New from './src/components/New';

YellowBox.ignoreWarnings(['Remote debugger is in a background tab',
                          'YellowBox has been replaced with LogBox',
                          'Each child in a list should'])

//yarn develope / para arrancar strapi

export default function App() {

  const [news, setNews] = useState(null);
  useEffect(() => {
    getNewsApi()
      .then((response) => {
        setNews(response);
      });
  }, []);

  if (!news) return null;

  return (
    <SafeAreaView>
      <Text style={styles.title}>Últimas noticias</Text>
      <ScrollView styles = {styles.scrollView}>
       {news.data.map((noti) => (
          <New key={noti.attributes.id} noti = {noti} title={noti.attributes.title} url ={noti.attributes.url} description = {noti.attributes.description} created_at={noti.attributes.createdAt}/>
        ))}
        <View style = {styles.height}></View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
    color: "#000"
  },
  scrollView: {
    height: '100%',
  },
  height: {
    height: 40
  }
});
