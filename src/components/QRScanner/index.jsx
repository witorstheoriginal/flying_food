import React, { useState } from 'react'
import {QrScanner} from '@yudiel/react-qr-scanner'

export const QRScanner = () => {
  const [delay, setDelay] = useState(100)
  const [result, setResult] = useState('No result')
  const [startScan, setStartScan] = useState(false)

  const handleScan = (data) => {
    setResult(data)
    data && setStartScan(false)
  }
  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320
  }

  return (
    <div >
      <button
        onClick={() => {
          setStartScan(!startScan)
        }}
      >
        Click me
      </button>
      {startScan && (
        <QrScanner
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onDecode={handleScan}
          containerStyle={{width: 400, height: 400, paddingTop: '0%'}}
          videoStyle={{width: 400, height: 400}}
          legacyMode={true}
        />
      )}
      <p>{result !== 'No result' && result && JSON.stringify(result)}</p>
    </div>
  )
}
