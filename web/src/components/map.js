import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import { getAllPr } from '../../../api1/controller/AdminsController';
import '../App.css'


const Maps =()=> {

        return (
           
            <>
                <YMaps >
               <p>Наш адрес:</p> 
               <p>г. Судогда Советский Большой пер. д. 15</p>

                    <Map style={{ display: 'block', width: '500px', height: '400px'}} defaultState={{ center: [55.952081, 40.862116], zoom: 17, }} >
                    <Placemark 
                    geometry={{ 
                        type: 'Point',
                        coordinates:[55.952081, 40.862116]}}  
                    properties={{
                        iconContent: 'Мы находимся здесь',
                        hintContent :'Большой Советский пер., 15, Судогда, Россия'}} 
                    options={{  
                        preset: 'islands#orangeStretchyIcon' 
                    }}   />
                        </Map>
                    
                </YMaps>
            </>
        )
    
}
export default Maps