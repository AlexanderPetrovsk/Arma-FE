import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function ForumCreate() {
    const [value, setValue] = useState('');

    return (
        <div className='forum-create-container'>
            <div className='f-s-32 f-w-700 m-b-2'>Start Conversation</div>
            <div className='f-s-18 m-b-5'>
                Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.
            </div>
            <div className='forum-create-form d-flex flex-column flex-wrap'>
                <div className='d-flex j-content-between m-b-2'>
                    <input className='text-input f-basis-45' placeholder='Title'></input>
                    <input className='text-input f-basis-45' placeholder='Recipient'></input>
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                <div className='privacy-policy m-b-2'>
                    <input type='checkbox' />
                    <label>I agree to the Privacy Policy</label>
                </div>
                <button className='primary-button md-button a-self-end'>Submit</button>
            </div>
        </div>
    )
}

export default ForumCreate;