import React from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';
import Icon from './Icon';
import Button from '../Button/Button';

import './Modal.css';

const Modal = ({
                   title, isOpen, onCancel, onSubmit, children,
               }) => {

    return (
        <>
            { isOpen &&
            <Portal>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <Icon name="times" onClick={onCancel} />
                        </div>
                        <div className="modalBody">
                            {children}
                            <Button onClick={()=>{alert("Я кнопка добавить пользователя!!!")}}>Add</Button>
                            <Button onClick={()=>{alert("Я кнопка удалить пользователя!!!")}}>Delete</Button>
                            <Button onClick={()=>{alert("Я кнопка редактировать пользователя!!!")}}>Edit</Button>
                        </div>
                        <div className="modalFooter">
                            <Button onClick={onCancel} invert>Cancel</Button>
                            <Button onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal title',
    //isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};

export default Modal;
