import { BlurView } from "@react-native-community/blur";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ExploreStarted = ({navigation}: any) => {
    return ( 
        <View style={styles.container}>
        <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.5)"
        />
        <Text style={styles.title}>Explore and Mint NFTs</Text>
        <Text style={styles.subtitle}>You can buy and sell the NFTs of the best artists in the world.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("")}>
            <BlurView
                style={styles.blurButton}
                blurType="light"
                blurAmount={67}
                reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.389)"
            />
            <Text style={styles.buttonText}>Get started now</Text>
        </TouchableOpacity>
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 30,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.464)',
      },  
      blurContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#0000002f', 
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
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
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
})

 
export default ExploreStarted;