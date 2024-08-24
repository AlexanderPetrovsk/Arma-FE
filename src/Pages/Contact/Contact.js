import './contact.scss';
import phone from '../../assets/icons/phone-bl.svg';
import email from '../../assets/icons/email-bl.svg';
import location from '../../assets/icons/location-bl.svg';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-us-form-container'>
                <div className='contact-us-text'>
                    <div className='contact-us-title'>
                        CONTACT US
                    </div>
                    <div className='contact-us-description'>
                        Lorem ipsum dolor sit amet consectetur. Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim. Consectetur eros nisl fringilla at.
                        Donec in lectus venenatis adipiscing egestas gravida magnis duis.
                    </div>
                </div>
                <div className='contact-us-form'>
                    <input className='text-input' placeholder='Name Surname' />
                    <input className='text-input' placeholder='Email Address' />
                    <textarea className='text-input' placeholder='Your Message'></textarea>
                    <button className='primary-button md-button'>Send</button>
                </div>
            </div>
            <div className='how-to-find-container'>
                <div className='how-to-find-info'>
                    <div className='how-to-find-info-title'>
                        HOW TO FIND US
                    </div>
                    <div className='how-to-find-info-item'>
                        <img src={phone} alt=''/>
                        <p>+(389)65 434 345</p>
                    </div>
                    <div className='how-to-find-info-item'>
                        <img src={email} alt=''/>
                        <p>infoarma@gmail.com</p>
                    </div>
                    <div className='how-to-find-info-item'>
                        <img src={location} alt=''/>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='map-container'>
                    <iframe 
                        title='store-location'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d752.4774304073751!2d21.333307269705205!3d41.027231009935655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzM4LjAiTiAyMcKwMjAnMDIuMiJF!5e0!3m2!1sen!2smk!4v1724237576705!5m2!1sen!2smk"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;