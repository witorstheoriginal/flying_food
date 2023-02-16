import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Icon } from './components/Icon'
import { Image } from './components/Image'
import { MainButton } from './components/MainButton'
import { IconButton } from './components/MainButton/IconButton'
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
          <MainButton backgroundColor="text">
            <Text color="secondary" variant="p">
              test
            </Text>
          </MainButton>
          <IconButton backgroundColor={'secondary'} name="shoppingBag" color="white" />
        </div>
        <div style={{ width: 100, height: 100 }}>
          <Image
            alt={'image'}
            src={'https://upload.wikimedia.org/wikipedia/en/8/88/Bugcat_Capoo.jpg'}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
