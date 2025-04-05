import BestSeller from "../components/bestseller/BestSeller"
import Hero from "../components/hero/Hero"
import LatestCollection from "../components/latestcollection/LatestCollection"
import NewsletterBox from "../components/newsletterbox/NewsletterBox"
import OurPolicy from "../components/ourpolicy/OurPolicy"


const Home = () => {
  return (
   <>
   <Hero/>
   <LatestCollection/>
   <BestSeller/>
   <OurPolicy/>
   <NewsletterBox/>
   </>
  )
}

export default Home