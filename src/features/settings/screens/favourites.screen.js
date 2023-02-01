import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { FavouritesContext } from '@app/services/favourites/favourites.context'

import { SafeArea } from '@app/components/utility/safe-area.component'
import { Text } from '@app/components/typography/text.component'
import { Spacer } from '@app/components/spacer/spacer.component'

import { RestaurantList } from '@app/features/restaurants/components/restaurant-list.styles'
import { RestaurantInfoCard } from '@app/features/restaurants/components/restaurant-info-card.component'

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext)

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  )
}
