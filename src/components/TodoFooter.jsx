import React from 'react';
import '../style/footer.css'

const TodoFooter = () => {
    return (
        <footer className='footer'>
            <div className="footer__count">{4} items left</div>
            <div className="footer__btns">
                <button className='footer__btns-all'>All</button>
                <button className='footer__btns-activie'>Active</button>
                <button className='footer__btns-completed'>Completed</button>
            </div>
            <button className='footer__btn-clear'>Clear completed</button>
        </footer>
    );
};

export default TodoFooter;