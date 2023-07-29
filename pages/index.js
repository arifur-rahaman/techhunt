import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";
import Comment from "@/components/Comment/Comment";
import ContactUs from "@/components/ContactUs/ContactUs";
import ITSolution from "@/components/ITSolution/ITSolution";
import Layout from "@/components/Layout";
import Mission from "@/components/Mission/Mission";
import PaymentPlan from "@/components/PaymentPlan/PaymentPlan";
import TrustedBrands from "@/components/TrustedBrands/TrustedBrands";
import WhyChooseus from "@/components/WhyChooseus/WhyChooseus";
import FacebookMsg from "./facebookMsg";
import HomeServices from "@/components/Services/HomeServices";


export default function Home() {
  return (
    <Layout title="Home" >
      <Banner />
      <HomeServices />
      <TrustedBrands />
      <WhyChooseus />
      <ITSolution />
      <Mission />
      <ContactUs />
      <PaymentPlan />
      <Comment />
      <Blog />
      <FacebookMsg />
    </Layout>
  );
}
