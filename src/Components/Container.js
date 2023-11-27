import React from 'react';


export default function Container(props) {
  return (
        
        
        <div className='cont'>
               
                <ul className='list'>
                <div className="row1">
                <li>  {props.placeName}</li>
                <li className='local-name'>{props.localName}</li>
                </div>
                <div className="row2">
                <li><strong>Temperature :</strong> {props.temp} °celcius <br></br>
                <div className="feels-like">
                Feels like  {props.tempFeelsLike}°celcius 
                </div>
                </li>
                </div>
                <li><strong>Wind:</strong>  {props.windSpeed}m/sec</li>
                
                <li><strong>Clouds :</strong> {props.clouds} %</li>
            </ul>
            

            
        </div>
    
      
    
  )
}
