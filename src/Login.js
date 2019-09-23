import { View,Text,Stlyesheet,Image, } from 'react-native';
import react,{Component} from 'react';

export default function Login() {
    return(
        <View style = { styles.container }>
            <Text> Login </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        height : 50
    },
});
