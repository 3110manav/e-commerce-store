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
          <h1 id="title"><u>SAKSHAM</u></h1>
          <h3>A Marketplace for Specially Abled</h3>

          <p id="info" className="w3-left w3-animate-left">
            We are an e-commerce platform designed exclusively to sell amazing handicraft products made by very talented, specially abled artisans. This provides a source of income for these artisans and you can buy exquisite products at a very reasonable price.
            So SHOP NOW !!!

          </p>
        </div>
      </div>

      <div className="intro1">
        <div className="rect1 reveal">
          <img id="ngo1" src="ngo1a.jpg" alt="Prarambh NGO Image" />
        </div>
        <div className="rect2 reveal">
          <p>
          <i>Success Stories ..</i><br/><br/>
"Jayant Prakash is a wheelchair user from Odissa who is a known artist as well. 
            <br/><br/>
            Apart from working on beautiful mural paintings, Jayant makes umbrellas, paper pens and straw baskets for a living. Mural paintings are his specialty. Jayant has done over 30 mural paintings till date, and all of them have been sold off too. A disability has not stopped this youngster from living an independent and happy life."
        </p>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
