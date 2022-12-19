import React, { useContext } from 'react'
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { SafeArea } from '@app/components/utility/safe-area.component.js'
import { Spacer } from '@app/components/spacer/spacer.component.js'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js'

import { RestaurantsContext } from '@app/services/restaurants/restaurants.context'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

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
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
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
