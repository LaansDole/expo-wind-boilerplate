import { View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function CircleButton({ onPress }) {
    return (
        <View className="w-20 h-20 mx-15 border-4 border-yellow-400 rounded-full p-1">
            <Pressable className="flex justify-center items-center rounded-full bg-white" onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    );
}