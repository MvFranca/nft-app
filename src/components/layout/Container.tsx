import { Dimensions, ScrollView, ScrollViewProps, StatusBar, View, ViewProps } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";
import { PropsWithChildren } from "react";

type props = {
    children: React.ReactNode;
    style?: ScrollViewProps
}

const ContainerLayout = ({children, style}: props) => {
    return ( 
        <ScrollView style={[styles.container, style]}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundPrincipal} />
            {children}
        </ScrollView>

     );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrincipal,
    paddingTop: 20,
    width: Dimensions.get("window").width
  }
});
 
export default ContainerLayout;