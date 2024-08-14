import React from 'react';
import { CSSTransition } from 'react-transition-group';

const AccordionSection = ({ title, content, isOpen, onToggle }) => {
    return (
        <li className="w-full">
            <div
                className="flex items-center cursor-pointer"
                onClick={onToggle}
            >
                <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                    style={{ width: '24px', height: '24px' }}
                />
                <span className="ml-2 text-lg font-medium">{title}</span>
            </div>
            {isOpen && (
                <div className="mt-2 p-2 pl-8 text-justify">
                    {content}
                </div>
            )}
        </li>
    );
};

export default AccordionSection;