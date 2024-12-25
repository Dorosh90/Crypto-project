import { Layout } from 'antd';
import { CryptoContextProvider } from './Crypto-context';
import AppLayout from './components/layout/AppLayout';

export default function App() {
  return (
    <CryptoContextProvider> 
      <AppLayout />
    </CryptoContextProvider>
  )
}
