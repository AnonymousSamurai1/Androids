import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import LoaderImage from '../assets/icon.png';
import Credentials from '../screens/Credentials';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Image source={LoaderImage} style={styles.logo} resizeMode="contain" />
      </View>
    );
  }

  return <Credentials />;
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
