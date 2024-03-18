import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

export default function WebsiteLayout({ children, globalData }) {
  return (
    <div>
      <Header globalData={globalData} />
      {children}
      <Footer globalData={globalData} />
    </div>
  );
}
