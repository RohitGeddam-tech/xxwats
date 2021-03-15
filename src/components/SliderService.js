import React,{useState} from 'react'

const SliderService = () => {

    const [check, setCheck] = useState(false)

    console.log(check);

    return (
        <>
            <div className='inputslider'>
                <div className='inputslide'>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true);console.log('creative strategy',check)}}>creative strategy</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}}/>
                    </div>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true)}}>Brand Campaigns</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}} />
                    </div>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true)}}>Social media Campaigns</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}} />
                    </div>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true)}}>video campaigns</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}} />
                    </div>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true)}}>on-ground engagements</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}} />
                    </div>
                    <div className='insideslide'>
                    <label className='serviceslider-btn' onClick={()=>{setCheck(true)}}>Post-production</label>
                    <input type='checkbox' defaultChecked={check} style={{display:'none'}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderService
