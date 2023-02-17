import React from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Card } from './components/Card'
import { Icon } from './components/Icon'
import { Image } from './components/Image'
import { BaseButton } from './components/MainButton/BaseButton'
import { Paper } from './components/Paper'
import { QRScanner } from './components/QRScanner'
import { Text } from './components/Text'
import { theme } from './style/theme'

/* Burger King</
Angus Burger<
Buffalo Burge
Hawaii Burger
Burger King</
Mex Burger</C
Real Burger</
Italian Burge
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Icon name={'fullStar'} color={'blue'} />
          <BaseButton bgColor={'textInverse'} radius={3} size="lg" bold outlined={false}>
            <Text color="secondary" variant="p">
              test
            </Text>
          </BaseButton>
        </div>
        <Image
          alt={'image'}
          src={'https://tinypic.host/images/2023/02/16/Immagine.png'}
        />
          <Card />
        </div>
    </ThemeProvider>
  )
}

export default App
