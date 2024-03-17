import { useState } from 'react'
import JoinModal from './modal';

export default function JoinButton() {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <button
                onClick={openModal}
                className="bg-skin-secondary py-4 px-8 rounded-lg">
                Çekilise Katıl
            </button>
            <JoinModal isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}