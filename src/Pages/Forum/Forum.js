import { useState } from 'react';
import './forum.scss';
import ForumList from './List/ForumList';
import ForumCreate from './Create/ForumCreate';
import search from '../../assets/icons/search.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';

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
                    <div className='search-input relative'>
                        <input className='text-input w-100 placeholder-indent' placeholder='Search'/>
                        <img className='absolute center-v-absolute p-l-2' src={search} alt='' />
                    </div>
                    <div className='relative recency-select'>
                        <select className='text-input w-100'>
                            { filters.map((filter, index) => {
                                return (
                                    <option className='recency-item' key={index}>
                                        {filter}
                                    </option>
                                )
                            })}
                        </select>
                        <img className='dropdown-icon absolute center-v-absolute push-icon-left' src={chevronDown} alt='' />
                    </ div>
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