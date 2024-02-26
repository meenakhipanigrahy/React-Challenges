import './accordion.css';
import questions from './data';
import { useState } from 'react';

const Accordion = () => {
    const [showAccordion, setShowAccordion] = useState(null);

    const handleClick = (index) => {
        setShowAccordion(showAccordion === index ? null : index);
    }

    return (
        <div className="accordion-app">
            <h1>Accordion</h1>
            {
                questions.map((item, index) => {
                    const isAccordionOpen = showAccordion === index;

                    return (
                        <div className="accordion-wrapper" key={item.id}>
                            <div 
                                className="accordion-title"
                                onClick={() => handleClick(index)}
                            >
                               <h3>{item.title}</h3>
                            </div>
                            {
                                isAccordionOpen && <div className="accordion-content">{item.info}</div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion;