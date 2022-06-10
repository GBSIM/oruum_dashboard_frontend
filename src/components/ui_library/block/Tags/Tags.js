import RoundedButton from "../../unit/RoundedButton/RoundedButton";

import './Tags.css';

export default function Tags(props) {
    const tagList = props.tagList;

    const Tags = tagList.map((tag,index) => (<RoundedButton key={index} buttonText={tag}></RoundedButton>));

    return (
        <div className='tags-container'>
            {Tags}
        </div>
    )
}