import React, { useEffect, useState} from 'react';
import { Modal } from '../../styles/Dialog.style';
import { FcCancel } from 'react-icons/fc'

const ErrorModal: React.FC<{message: string; open: boolean; handleClose: () => void}> = ({message, open, handleClose}) => {

    const [openModal, setOpenModal] = useState(false);



    useEffect(() => {
        const close = () => {
            setOpenModal(false);
            handleClose()
        }
        console.log(open)
        if (open) {
            setOpenModal(true);
            setTimeout(() => {
                close()
            }, 2000) 
        }
        
    }, [open, handleClose])
    return (
        <Modal visible={openModal}>
            <div className="error">
                <FcCancel /> <p>Oops!! {message}</p>
            </div>
        </Modal>
    )
}
export default ErrorModal
