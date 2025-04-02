import React from "react";
import { Text, View } from "react-native";

interface TarefaProps {
    titulo: string,
    concluida?: boolean
}

export const Tarefa: React.FC<TarefaProps> = ({ concluida, titulo }) => {
    return (
        <View>
            <Text style={{ fontSize: 32, color: concluida ? "blue" : 'black' }}>
                {titulo}
            </Text>
        </View>
    )
}

export default Tarefa