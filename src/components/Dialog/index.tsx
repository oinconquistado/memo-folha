import type React from 'react';
import { useState, useEffect, useRef, type ReactNode } from 'react';

interface DialogProps {
  title: string;
  body: string;
  confirmText: string;
  confirmAction: () => void;
  cancelText: string;
  cancelAction: () => void;
  children: (props: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openDialog: () => void;
    closeDialog: () => void;
  }) => ReactNode;
}

export default function Dialog({
  title,
  body,
  confirmText,
  confirmAction,
  cancelText,
  cancelAction,
  children,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleConfirm = () => {
    confirmAction();
    closeDialog();
  };

  const handleCancel = () => {
    cancelAction();
    closeDialog();
  };

  return (
    <>
      {children({ isOpen, setIsOpen, openDialog, closeDialog })}
      {isOpen && (
        <dialog
          className='flex flex-col justify-center items-center rounded h-48 w-4/12 overflow-hidden p-8 shadow-2xl'
          ref={dialogRef}
          id='dialog'
        >
          <div className='flex items-center flex-col gap-4'>
            <div className='flex justify-center items-center'>
              <h3 className='text-xl font-bold' id='textModal'>
                {title}
              </h3>
            </div>
            <div className='flex items-center w-full'>
              <p className='text-center'>{body}</p>
            </div>
            <div className='flex items-end flex-row gap-6 justify-between w-full mt-4'>
              <button
                className='flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-bold'
                type='button'
                id='confirmButton'
                onClick={handleConfirm}
              >
                {confirmText}
              </button>
              <button
                className='flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-bold'
                type='button'
                id='cancelButton'
                onClick={handleCancel}
              >
                {cancelText}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
