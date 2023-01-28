import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'

import { SafeArea } from '@app/components/utility/safe-area.component.js'
import { Spacer } from '@app/components/spacer/spacer.component.js'

import { RestaurantsContext } from '@app/services/restaurants/restaurants.context'

import { Search } from '../components/search.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js'

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
