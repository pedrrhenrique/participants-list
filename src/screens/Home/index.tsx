
import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {

    if (participants.includes(participantName)) {
      return Alert.alert('Erro ao adicionar!', `Participante ${participantName} já consta na lista.`)
    }
    setParticipants(state => [...state, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {



    Alert.alert(`Realmente deseja excluir ${name} da sua lista?`, `Esta ação não poderá ser desfeita`, [
      {
        text: 'Sim',
        onPress: () => {
          try {
            setParticipants(state => state.filter(participant => participant !== name)),
            Alert.alert('', 'Participante excluído com sucesso!')
          }
          catch {
            Alert.alert('Erro', 'Não foi possível excluir o participante, tente novamente!')
          }
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>ReactJS Básico ao Avançado</Text>
      <Text style={styles.eventDate}>22/12 até 29/12</Text>

      <View style={styles.form}>
        <TextInput testID='inputName'
          style={styles.input}
          placeholder="Adicionar participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonContent}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.emptyList}>
              Adicione participantes à sua lista de presença
            </Text>
          )
        }}
      />
    </View>
  )
}