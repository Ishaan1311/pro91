import {Stylesheet, View} from "react-native"

const Row = ({ children }) => {
    <View style = {styles.container}>{children}</View>
}

const styles = Stylesheet.create({
    container: {
        flexDirection: 'row'
    },
})

export default Row