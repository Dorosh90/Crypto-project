import { DatePicker } from 'antd';
import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext, useEffect } from 'react';
import CryptoContext from '../../Crypto-context';


export default function AppLayout() {
  const { loading } = useContext(CryptoContext)

  if(loading) {
    return <Spin fullscreen />
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>

        <AppSider />
        <AppContent />

      </Layout>
    </Layout>
  )
}