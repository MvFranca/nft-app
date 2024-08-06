import { BlurView } from "@react-native-community/blur";
import { StatusBar, StyleSheet, Text, TouchableOpacity, Animated, ViewProps } from "react-native";
import { theme } from "../../theme/fonts";
import { useState, useRef } from "react";

type props = {
  style?: ViewProps
}

const ExploreStarted = ({style}: props) => {
  const [animated, setAnimated] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const AnimatedLogin = () => {
    setAnimated(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300, // Duração da animação em milissegundos
      useNativeDriver: false, // Se você quiser usar a animação nativamente, mude para true
    }).start();
  }

  const marginTop = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -220], // Define os valores inicial e final de marginTop
  });

  return ( 
    <>
      <StatusBar backgroundColor={"#6166A0"} />

      <Animated.View style={[styles.container, { marginTop }]}>
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.5)"
        />
        <Text style={styles.title}>Explore and Mint NFTs</Text>
        <Text style={styles.subtitle}>You can buy and sell the NFTs of the best artists in the world.</Text>
        <TouchableOpacity style={styles.button} onPress={AnimatedLogin}>
          <BlurView
            style={styles.blurButton}
            blurType="light"
            blurAmount={67}
            reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.389)"
          />
          <Text style={styles.buttonText}>Get started now</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    borderRadius: 15,
    padding: 20,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: theme.colors.black,
  },  
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0000002e', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  button: {
    overflow: "hidden",
    paddingVertical: 13,
    width: 198.2,
    textAlign: "center",
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: theme.colors.black,
  },
  blurButton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#020f1318', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExploreStarted;
