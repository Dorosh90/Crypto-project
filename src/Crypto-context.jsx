import { createContext, useContext } from "react";
import { useEffect, useState } from 'react';
import { fakeFetchCrypto, fetchAssets } from './api';
import { percentDifference } from './utils'

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
})

export function CryptoContextProvider({ children }) {
  const [loading, setLoding] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [assets, setAssets] = useState([])

  useEffect(() => {
    async function preload() {
      setLoding(true)

      const { result } = await fakeFetchCrypto()
      const assets = await fetchAssets()

      setAssets(assets.map((asset) => {
        const coin = result.find((c) => c.id === asset.id)

        return {
          grow: asset.price < coin.price,
          growPercent: percentDifference(asset.price, coin.price),
          totalAmount: asset.amount * coin.price,
          totalProfit: asset.amount * coin.price - asset.amount * asset.price,
          ...asset
        }
      }))

      setCrypto(result)

      setLoding(false)
    }

    preload()
  }, [])
  return <CryptoContext.Provider value={{ loading, crypto, assets }}>
    {children}
  </CryptoContext.Provider>
}

export default CryptoContext;

export function useCrypto() {
  return useContext(CryptoContext);
}