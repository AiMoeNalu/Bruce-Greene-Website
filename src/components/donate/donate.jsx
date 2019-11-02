import React from 'react';

import './donate.scss';

import InputMask from 'react-input-mask';
import CustomButton from '../custom-button/custom-button';

class Donate extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            amount: 0,
            msg: '',
            mediaShare: {
                url:'',
                startTime:''
            }
        }
    }

    render(){
        return(
            <div className='donate-container'>
                <div className='username-container'>
                    <input type='text' name='username' placeholder='Username'/>
                </div>
                <div className='amount-container'>
                    <div className='currency'>
                        <div className='currency-icon'>
                            $
                        </div>
                        <div className='currency-selector'>
                            USD
                        </div>
                    </div>
                    <input type="number" name='amount' min="0.01" step="0.01" max="2500" placeholder='2.00' />
                </div>
                <div className='message-container'>
                    <textarea type='text' name='msg' placeholder='Donation Message' maxLength='255' rows='4'/><br/>
                    <span className='emotes'><img src={require('../../assets/img/emote-icon.png')} width='21px' height='24px' alt='emotes'/></span>
                    <span className='charsLeft'>255</span>
                </div>

                <span className='share-media'>Share Media</span>
                <div className='share-media-container'>
                    <div className='media-url'>
                        <input type='url' name='url' placeholder='Youtube Video URL'/>
                    </div>
                    <div className='start-time-container'>
                        <InputMask 
                        name='startTime'
                        type='text' 
                        mask='99:99' 
                        placeholder='00:00' 
                        maskChar=' '
                        />
                    </div>
                </div>
                <CustomButton name='Donate'/>
            </div>
        );
    }
};

export default Donate;