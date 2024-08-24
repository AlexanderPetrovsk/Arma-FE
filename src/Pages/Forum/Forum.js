import { useState } from 'react';
import './forum.scss';
import ForumList from './List/ForumList';
import ForumCreate from './Create/ForumCreate';

function Forum() {
    const filters = [
        'Latest first',
        'Oldest first',
        'Mixed'
    ];

    const [createMode, setCreateMode] = useState(false);

    const getButtonText = () => {
        if (createMode) {
            return 'Return to Forum Listing';
        }

        return 'Start Conversation';
    }

    return (
        <div className='forum-container'>
            <div className='forum-header'>
                <div className='forum-header-text'>
                    <div className='forum-header-title'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</div>
                    <div className='forum-header-description'>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className='forum-header-filters-container'>
                    <input className='text-input search-input' placeholder='Search'/>
                    <select className='text-input recency-select'>
                        { filters.map((filter, index) => {
                            return (
                                <option className='recency-item' key={index}>
                                    {filter}
                                </option>
                            )
                        })}
                    </select>
                    <button className='primary-button lg-button' onClick={() => setCreateMode(!createMode)}>
                        { getButtonText()}
                    </button>
                </div>
            </div>
            { !createMode ? <ForumList /> : <ForumCreate />}
        </div>
    )
}

export default Forum;