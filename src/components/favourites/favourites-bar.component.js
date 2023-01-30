import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Spacer } from '../spacer/spacer.component'
import { Text } from '../typography/text.component'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'

const FavouritesWrapper = styled.View`
  padding: 10px;
`
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return (
      <FavouritesWrapper>
        <Spacer position="left" size="medium">
          <Text variant="caption">No Favourites :(</Text>
        </Spacer>
      </FavouritesWrapper>
    )
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', {
                    restaurant
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          )
        })}
      </ScrollView>
    </FavouritesWrapper>
  )
}
