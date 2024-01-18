import React from 'react'
import { View, Text ,TouchableOpacity , FlatList , ActivityIndicator} from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS ,SIZES } from '../../../constants'
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard'
import { useFetch } from '../../../hook/useFetch'
const Popularjobs = () => {

  const router = useRouter();
  const {error , isLoading ,data } = useFetch('search',{
    query :"Frontend Developer",
    num_pages : "1",
  });
  return (
    <View style={styles.container}>
      <View styles={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
      <Text style = {styles.headerBtn}>
        Show all
      </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary}/>
          ) : error ? (
            <Text>Somethinf went wrong</Text>
          ) : (
            <FlatList 
            data={data}
            renderItem={({item}) => (
              <PopularJobCard 
              item = {item}
              />
            ) }
            keyExtractor={(item) => item.job_id}
            contentContainerStyle = {{columnGap  :SIZES.medium}}
            horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs