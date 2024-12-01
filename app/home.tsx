import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24acf0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
    text: {
        color:"#fff",
        fontSize: 30,
        fontWeight: 'bold',
        }
})
