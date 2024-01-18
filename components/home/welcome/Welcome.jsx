import React, { useState } from 'react'
import { View, Text ,TextInput,Image , TouchableOpacity ,FlatList} from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons ,SIZES } from '../../../constants'



const jobTypes = ["Full-time" ,"Contarctor" , "Part-time" ];
const Welcome = () => {

  const router = useRouter();
  const [activeJobType ,setActiveJobType] = useState("Full-tiem")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello kartik
        </Text>
        <Text style = {styles.welcomeMessage}>
          Find Your Perfect Job
        </Text>
      </View>
      <View style = {styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
           value=""
           onChange={()=>{}}
           placeholder='What are you looking for ?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode='contain'style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList  data={jobTypes} renderItem={({item})=> (
          <TouchableOpacity style = {styles.tab(activeJobType,item)}
          onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style = {styles.tabText(activeJobType,item)}>
              {item}
            </Text>
          </TouchableOpacity>
        )} keyExtractor={item => item}
        contentContainerStyle = {{columnGap :SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome