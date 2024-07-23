import './home.scss';
import plus from '../../assets/icons/plus.svg';

function Home() {
    const rules = [
        'Shooters under the age of 18 must be accompanied and supervised by a parent or legal guardian at all times.',
        'No one will be permitted on the range if they are under the influence of alcohol, drugs, or any other intoxicating substances',
        'If you intend to do bodily harm to yourself or others you are not permitted on the range at any time',
        'Never use drugs or alcohol before or during your stay on the range',
        'All of your weapons must be discharged and safely encased before leaving the shooting tray.'
    ];

    const faqs = [
        'Lorem ipsum dolor sit amet consectetur. Phasellus pretium etiam pellentesque enim fames ?',
        'Lorem ipsum dolor sit amet consectetur. Phasellus pretium etiam pellentesque enim fames ?',
        'Lorem ipsum dolor sit amet consectetur. Phasellus pretium etiam pellentesque enim fames ?',
        'Lorem ipsum dolor sit amet consectetur. Phasellus pretium etiam pellentesque enim fames ?',
        'Lorem ipsum dolor sit amet consectetur. Phasellus pretium etiam pellentesque enim fames ?'
    ];

    return (
        <div className='homepage-container'>
            <div className='slider-container'>
                <div className='slider-image-text'>
                    <div className='slider-image-title'>
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className='slider-image-description'>
                        Lorem ipsum dolor sit amet consectetur. Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim.
                        Consectetur eros nisl fringilla at. Donec in lectus venenatis adipiscing egestas gravida magnis duis.
                    </div>
                </div>
                <div className='marquee-container'>
                    <div className='marquee'>
                        <p className='marquee-text'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <p className='marquee-text'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-us-container'>
                <div className='about-us-text'>
                    <div className='about-us-title'>
                        WHO WE ARE
                    </div>
                    <div className='about-us-description'>
                        Lorem ipsum dolor sit amet consectetur.
                        Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim.
                        Consectetur eros nisl fringilla at.
                        Donec in lectus venenatis adipiscing egestas gravida magnis duis.Lorem ipsum dolor sit amet consectetur.
                        Eget mattis enim feugiat fermentum tempus. Fermentum ac tortor urna mattis viverra dignissim.
                        Consectetur eros nisl fringilla at. Donec in lectus venenatis adipiscing egestas gravida magnis duis.
                    </div>
                </div>
            </div>
            <div className='reservation-container'>
                <div className='reservation-content'>
                    <div className='rules-container'>
                        <div className='rules-title'>
                            RANGE RULES & REQUIREMENTS <br />
                            FOR MEMBERSHIP
                        </div>
                        <ol className='rules-list'>
                            {rules.map((rule, index) => {
                                return (
                                    <li key={index}>
                                        {rule}
                                    </li>
                                )
                            })}
                        </ol>
                        <div className='read-more'>Read More</div>
                    </div>
                    <div className='reservation-form-container'>
                        <div className='reservation-form-title'>
                            ONLINE RESEVRATION
                        </div>
                        <div className='reservation-form-terms'>
                            Before booking please read our <br />Terms and Conditions
                        </div>
                        <div className='reservation-form-note'>
                            <span>NOTE: </span>The Reservation is for one person for a duration of 1 hour 
                        </div>
                        <div className='reservation-form-inputs'>
                            <input className='text-input' placeholder='Name Surname' />
                            <input className='text-input' placeholder='Phone Number' />
                            <input className='text-input' placeholder='Email Address' />
                            <input className='text-input' type='date'/>
                            <div className='privacy-policy'>
                                <input type='checkbox' />
                                <label>I agree to the Privacy Policy</label>
                            </div>
                        </div>
                        <button className='primary-button md-button'>Reserve</button>
                    </div>
                </div>
            </div>
            <div className='faq-container'>
                <div className='faq-title'>FAQ</div>
                { faqs.map((faq, index) => {
                    return (
                        <div className='faq' key={index}>
                            <div className='faq-text'>
                                { faq }
                            </div>
                            <img src={plus} alt='' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;