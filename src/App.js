import React from 'react';
import './App.css';
import data from './component/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { ReactPhotoCollage } from "react-photo-collage";
import DonutChart from 'react-donut-chart';
import ProgressBar from 'react-bootstrap/ProgressBar'

const setting = {
  width: '700px',
  height: ['400px', '170px'],
  layout: [1, 4],
  photos: [
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
    { src: "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg" },
  ],
  showNumOfRemainingPhotos: true
};


function App() {
  return (
    <div className="App"> 
    <header>
      Restaurant Review
    </header>
      {data.map((profileData, index) => {
        return <div>
          <Row>
            <Col sm={5.5}>
            <ReactPhotoCollage  {...setting} />
            </Col>
            <Col sm={7}>
              <h1 style={{textAlign: "left", fontWeight: "bolder"}}>{profileData.name}</h1>
              <h5>
                {profileData.area},{profileData.city}
              </h5>
              <h3>
                Category: {profileData.category + ','}
              </h3><br/>
              <Row>
                <Col>
                  <h2>Review Ratings:</h2>
                  <DonutChart 
                    width={300}
                    height={300}
                    legend={false}
                    colors={['#0096FF','#007FD7','#006DB9','#005C9D','#004F86','#B9B9B9','#7CDDDD']}
                    data={
                      profileData.review_rating.votes.map((votes,i)=>{
                        return {
                          label: votes.rating+'/5',  
                          value: votes.votes
                      }})
                    }/>
                  <h3>Total Review Ratings: {profileData.review_rating.total} </h3>
                </Col>
                <Col>
                    <h2>Feature Rating:</h2>
                    <p>Place</p>
                    <ProgressBar now={profileData.feature_rating.place} label={profileData.feature_rating.place+"/5"} max={5} />
                    <p>Breakfast</p>
                    <ProgressBar now={profileData.feature_rating.breakfast} label={profileData.feature_rating.breakfast+"/5"} max={5} />
                    <p>Food</p>
                    <ProgressBar now={profileData.feature_rating.food} label={profileData.feature_rating.food+"/5"} max={5} />
                    <p>Service</p>
                    <ProgressBar now={profileData.feature_rating.service} label={profileData.feature_rating.service+"/5"} max={5} />
                    <p>Staff</p>
                    <ProgressBar now={profileData.feature_rating.staff} label={profileData.feature_rating.staff+"/5"} max={5} />
                </Col>
              </Row>            
            </Col>
          </Row>
        </div>
      })}
    </div>
  );
}

export default App;
