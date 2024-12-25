import { Layout } from 'antd';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
  padding: '1rem',
};

export default function AppContent() {
  return ( <Layout.Content style={contentStyle}>Content</Layout.Content>);
}