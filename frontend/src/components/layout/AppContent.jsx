import { Layout, Typography } from "antd";
import { useCrypto } from "../../Crypto-context";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  const cryptoPriceMap = crypto.reduce((accum, coin) => {
    accum[coin.id] = coin.price;
    return accum;
  }, {})


  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "white", textAlign: "left" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            return asset.amount * cryptoPriceMap[asset.id];
          })
          .reduce((accum, value) => (accum += value), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
