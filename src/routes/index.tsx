import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackRoutes';
import { StatusBar } from 'react-native';
import { theme } from '../theme/fonts';



const Routes = () => {
    return ( 
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
     );
}
 
export default Routes;