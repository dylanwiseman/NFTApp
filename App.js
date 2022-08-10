/* eslint-disable */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const App = () => {
    // prettier-ignore
    const [loaded] = useFonts({
        // prettier-ignore
        'InterBold': require('./assets/fonts/Inter-Bold.ttf'),
        'InterSemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'InterMedium': require('./assets/fonts/Inter-Medium.ttf'),
        'InterRegular': require('./assets/fonts/Inter-Regular.ttf'),
        'InterLight': require('./assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
