import './club.scss';
import DatePicker from '../../components/Datepicker/datepicker';
import mission from '../../assets/images/mission.png';
import clubBgAddon from '../../assets/images/club-bg-addon.png';
import carbine from '../../assets/images/trainingPrograms/carbine.png';
import gunRange from '../../assets/images/trainingPrograms/gunRange.png';
import privateTrain from '../../assets/images/trainingPrograms/private.png';

function Club() {
    const trainingPrograms = [
        {
            title: 'Gun Range Training',
            description: 'Lorem ipsum dolor sit amet consectetur. Facilisi ornare arcu facilisis sagittis lorem in egestas.',
            image: gunRange
        },
        {
            title: 'Gun Range Training',
            description: 'Lorem ipsum dolor sit amet consectetur. Facilisi ornare arcu facilisis sagittis lorem in egestas.',
            image: gunRange
        },
        {
            title: 'Carbine Training',
            description: 'Lorem ipsum dolor sit amet consectetur. Facilisi ornare arcu facilisis sagittis lorem in egestas.',
            image: carbine
        },
        {
            title: 'Private Training',
            description: 'Lorem ipsum dolor sit amet consectetur. Facilisi ornare arcu facilisis sagittis lorem in egestas.',
            image: privateTrain
        },
        {
            title: 'Carbine Training',
            description: 'Lorem ipsum dolor sit amet consectetur. Facilisi ornare arcu facilisis sagittis lorem in egestas.',
            image: carbine
        }
    ]
    return (
        <div className='club-page-container'>
            <div className='club-page-landing'>
                <img className='club-page-bg-addon' src={clubBgAddon} alt='' />
                <div className='club-page-landing-text'>
                    <div className='club-page-title'>FROM NOVICE TO EXPERT</div>
                    <div className='club-page-description'>LOREM IPSUM DOLOR SIT AMET CONSECTETUTR.</div>
                </div>
            </div>
            <div className='club-page-information'>
                <div className='info-paragraph'>
                    <div className='paragraph-title'>
                        FIRST TIME ON THE RANGE?
                    </div>
                    <div className='paragraph-description'>
                        Lorem ipsum dolor sit amet consectetur.
                        Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim. Consectetur eros nisl fringilla at.
                        Donec in lectus venenatis adipiscing egestas gravida magnis duis.lor sit amet consectetur. Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim. Consectetur eros nisl fringilla at. Donec in lectus venenatis adipiscing egestas gravida magnis duis.
                    </div>
                </div>
                <div className='info-paragraph'>
                    <div className='paragraph-title'>
                        RANGE RESTRICTIONS
                    </div>
                    <div className='paragraph-description'>
                        Children must be at least 12 years old to shoot firearms on the range.
                        Children under the age of 14 must be accompanied/assisted at all times by a parent or guardian.
                        No one under the age of 18 is allowed to shoot on the range without a parent or guardian. Must be 21 years old to rent a handgun or purchase handgun ammunition.
                        If pregnant, we discourage the use of the shooting ranges due to the loud environment and concussion produced by live-fire.
                        Our ranges do have observation windows for those not participating on the shooting range.
                    </div>
                </div>
            </div>
            <div className='our-mission-container'>
                <div className='picture-container'>
                    <img src={mission}  alt=''/>
                </div>
                <div className='mission-text-container'>
                    <div className='mission-text'>
                        <div className='mission-title'>OUR MISSION & VISION</div>
                        <div className='mission-description'>
                            Lorem ipsum dolor sit amet consectetur. Eget mattis enim feugiat fermentum tempus.
                            Fermentum ac tortor urna mattis viverra dignissim.
                            Consectetur eros nisl fringilla at. Donec in lectus venenatis adipiscing egestas gravida
                        </div>
                    </div>
                </div>
            </div>
            <div className='benefits-container'>
                <div className='benefits-title'>
                    WE PROVIDE BEST SHOOTING RANGE & GUN CLUB
                </div>
                <div className='benefits-description'>
                    Lorem ipsum dolor sit amet consectetur. Fermentum aliquam augue faucibus massa interdum eget orci elit at.
                    Elementum malesuada consectetur tincidunt imperdiet amet tellus. Mattis suspendisse quisque luctus blandit turpis cras cras risus tellus.
                    Malesuada dignissim nunc imperdiet pellentesque commodo. Orci amet tellus ut nec enim vestibulum in ut ipsum. Est in sit eget elementum.
                    Pulvinar vitae scelerisque platea est ipsum viverra at malesuada sit. Morbi magna velit sem diam tristique ipsum felis. Sit urna quis et tempus mi eu ut erat egestas.
                </div>
            </div>
            <div className='training-programs-container'>
                <div className='training-title'>
                    TRAINING PROGRAMS
                </div>
                <div className='training-description'>
                    Lorem ipsum dolor sit amet consectetur. Fermentum aliquam augue faucibus massa interdum eget orci elit at.
                    Elementum malesuada consectetur tincidunt imperdiet amet tellus. Mattis suspendisse quisque luctus blandit turpis cras cras risus tellus.
                </div>
                <div className='training-programs-list'>
                    { trainingPrograms.map((program, index) => {
                        return (
                            <div className='training-program-container' style={{ backgroundImage: `url(${program.image})`}} key={index}>
                                <div className='training-program-title'>
                                    { program.title.toUpperCase() }
                                </div>
                                <div className='training-program-description'>
                                    { program.description }
                                </div>
                                <button className='primary-button sm-button'>Read More</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='join-program-container'>
                <div className='join-program-text'>
                    <div className='join-program-title'>
                        JOIN PROGRAM
                    </div>
                    <div className='join-program-description'>
                        Lorem ipsum dolor sit amet consectetur. Eget mattis enim feugiat fermentum tempus.
                        Fermentum ac tortor urna mattis viverra dignissim. Consectetur eros nisl fringilla at.
                        Donec in lectus venenatis adipiscing egestas gravida magnis duis.
                    </div>
                </div>
                <div className='join-program-form'>
                    <input className='text-input' placeholder='Name Surname' />
                    <input className='text-input' placeholder='Email Address/Phone Number' />
                    <select className='text-input'>
                        {
                            trainingPrograms.map((program, index) => {
                                return (
                                    <option key={index}>{program.title}</option>
                                )
                            })
                        }
                    </select>
                    <div className='d-flex j-content-between relative'>
                        <DatePicker classes='f-basis-45' placeholder='Start date' />
                        <DatePicker classes='f-basis-45' placeholder='End date' />
                    </div>
                    <div className='privacy-policy'>
                        <input type='checkbox' />
                        <label>I agree to the Privacy Policy</label>
                    </div>
                    <button className='primary-button md-button'>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Club;