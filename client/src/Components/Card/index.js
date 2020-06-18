import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from '../Button';

const Card = ({ title, edit, remove, classes, children }) => (
    <div className={`card ${classes} `}>
        <div className='card-header bg-primary text-white pl-3 pr-3 '>
            {edit && remove && <div className="float-left">
                <Button classes='btn-danger btn-sm pt-1 pb-1' onClick={remove}
                    icon={faTrashAlt} />
            </div>}
            {title}
        </div>
        <div className='card-body pr-3 pl-3 pt-3 pb-3'>
            {children}
        </div>
    </div>
)
export default Card;