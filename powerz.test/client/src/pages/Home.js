import React, { useState } from 'react'
import axios from 'axios'
import history from '../history';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [Fav, setFav] = useState('')
  const [allfavsdata, setFavs] = useState(Array)



 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e28c03929337d8290ebf5f46e7657620`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        console.log(response.data.name)
      })
      setLocation('')
    }
   
  }



  
	async function logout(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/logout', {
			method: 'POST',
		})
    const data = await response.json()
    if (data.status === 'ok') {
      history.push('/login')
			alert('Logout successful')
		}
		
	}


  async function addFav(event) {
		event.preventDefault()

    setFav(data.name)
    const response = await fetch('http://localhost:1337/api/addFav', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
        Fav: data.name,
			}),
		})

    //setFavlist(data.name)
    console.log(data.name)

	}

  async function get(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/allfavs', {
      method: 'GET',
    });
    const favsdata = await response.json();
    setFavs(favsdata)
    console.log(allfavsdata)

  }

  



  /*var city = "";
  async function fechText(){
    let url = "https://ipinfo.io/json?token=7571311e154d60";
    let response = await fetch(url);
    let data = await response.json();
    city = JSON.stringify(data.city);
    console.log(city);
    setcurrentLocation("Paris");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=metric&appid=e28c03929337d8290ebf5f46e7657620`).then((response) => {
      setcurrentData(response.currentdata)
      console.log(response.currentdata)
    })
    setcurrentLocation('')
  }
fechText();*/



  return (
    <div>
    <div>
    <div className="card">
      <form onSubmit={logout}>
				<br />
				<input type="submit" value="Logout" />
			</form>
      <div className="search">
        <input class="search-bar" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter Location' type="text" />
        <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 class="temp">{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div class="flex" className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            <form onSubmit={addFav}>
				        <br />
				        <input type="submit" value="Add to Fav" />
			      </form>

            

            


            
            
     
          </div>
          
        }
        <form onSubmit={get}>
				        <br />
				        <input type="submit" value="get favs list" /><br/>
                <select>
                    {allfavsdata.map((fav, i) => (
                    <option key={i}>{fav}</option>
              
                  ))}
                </select>
                
			      </form>
        



      </div>
      
    </div>



    </div>
    
   
    </div>


    
  );
}

export default App;
