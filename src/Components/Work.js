import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe hic earum consequuntur fugit, placeat suscipit.'

        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum, dolor sit amet earum consequuntur fugit, placeat suscipit.'

        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum, dolor sit amet consectetur earum consequuntur fugit, placeat suscipit.'

        },


    ]
  return (
    <div>
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti adipisci fuga ex laboriosam, a facere hic incidunt et laborum?
                </p>
            </div>
            <div className='work-section-bottom'>
    
                {
                    workInfoData.map((data) => (
                        <div className='work-section-info'>
                                <div className='info-boxes-img-container'>
                                    <img src={data.image}/>
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default Work;