import Nav from "./components/navbar/Nav"
import Heropage from "./components/heropage/Heropage"
import Team from "./components/ourteam/Team"
import Customer_review from "./components/whyus/Customer_review"
import Map_contact from "./components/map & contact/Map_contact"
export default function App(){
  return(
    <>
    <Nav />
    <Heropage />
    <Customer_review />
    <Map_contact />
    <Team />
    </>
  )
}