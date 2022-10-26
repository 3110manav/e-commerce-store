import './HomeScreen.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import Product from '../components/Product'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'
import { setUserDeatils } from '../redux/actions/userAction'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <div >
      <div className="intro0">
       
        <div className="head w3-container">
          <h1 id="title"><u>SHAKSHAM</u></h1>
          <h3>A Marketplace for Handicpped</h3>

          <p id="info" className="w3-left w3-animate-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis beatae, mollitia dolore quas cumque,
            dolorum reiciendis quaerat quia repellat doloremque non, distinctio eius voluptas. Velit quibusdam
            doloribus
            molestias perspiciatis voluptates, expedita, et, repudiandae blanditiis ad quas enim consectetur nam!
            Atque,
            culpa tenetur. Aliquid pariatur veritatis quia in cum animi porro.
          </p>
        </div>
      </div>

      <div class="intro1">
        <div class="rect1 reveal">
          <img id="ngo1" src="../src/images/ngo1a.jpg" alt="Prarambh NGO Image"/>
        </div>
        <div class="rect2 reveal">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum commodi vitae! Maxime, vel
                tenetur
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quo fugiat. Quibusdam cum quasi
                dolore iure, animi sit, obcaecati omnis et optio aliquid asperiores possimus!
            </p>
        </div>
    </div>
    </div>
  )
}

export default HomeScreen
