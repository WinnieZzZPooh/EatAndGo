import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'

import { FadeInView } from '@app/components/animations/fade.animation'
import { SafeArea } from '@app/components/utility/safe-area.component.js'
import { Spacer } from '@app/components/spacer/spacer.component.js'
import { Text } from '@app/components/typography/text.component'
import { FavouritesBar } from '@app/components/favourites/favourites-bar.component'

import { LocationContext } from '@app/services/location/location.context'
import { RestaurantsContext } from '@app/services/restaurants/restaurants.context'
import { FavouritesContext } from '@app/services/favourites/favourites.context'

import { Search } from '../components/search.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js'
import { RestaurantList } from '../components/restaurant-list.styles'

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext)
  const { isLoading, restaurants, error } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)

  const hasError = !!error || !!locationError

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

      {hasError ? (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      ) : (
        <RestaurantList
          data={restaurants}
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  )
}
