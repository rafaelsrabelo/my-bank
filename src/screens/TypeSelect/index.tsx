import {
  Container,
  Header,
  Title,
  Category,
  Name,
  // Icon,
  Separetor,
  Content,
  Deposit,
  Exit,
  Icon
} from "./styles"
import { FlatList, View } from 'react-native';
import { Button } from "../../components/Button";
import { CategorySelect } from "../../components/CategorySelect";
import { Feather } from '@expo/vector-icons'

interface Type {
  id: number;
  name: string;
}

export interface Props {
  type: Type;
  setCategory: (type: Type) => void;
  closedSelectType: () => void;
}

const proptypes = [
  { id: 1, name: 'up' },
  { id: 2, name: 'down'},

]
export function TypeSelect({ 
  type,
  setCategory,
  closedSelectType
}: Props) {
  function handleCategoryTyoe(type: Type) {
    setCategory(type)
  }
  return (
    <Container>
      <Header>
        <Title>Selecione o tipo</Title>
      </Header>
      <Content>
        <FlatList
          data={proptypes}
          keyExtractor={(item) => item.id}
          
          renderItem={({ item }) => (
            <Category
              onPress={() => handleCategoryTyoe(item)}
              isActive={type.id === item.id}
            >
              {
                item.name === 'up' ? <><Feather name='dollar-sign' color={'green'} size={24} style={{ marginRight: 12 }} /><Deposit>Entrada</Deposit></> : <><Feather size={24} color={'red'} name='dollar-sign' style={{ marginRight: 12}}/><Exit>Saída</Exit></>
              }
              {/* <Feather name='dollar-sign' style={{ marginRight: 12}} />
              <Name>{ item.name }</Name> */}
              
            </Category>
          )}
        />
        <View style={{ marginTop: 40}}>
          <Button title="Selecionar" onPress={closedSelectType} />
        </View>
        
      </Content>
    </Container>
  )
} 