'use client';

import Image from 'next/image';
import { useDeleteDispatch } from '../hooks/useDeleteDispatch';
import { openMessage } from '../lib/features/messageSlice';
import { closeModal, selectDeleteInfo } from '../lib/features/modalSlice';

import { useAppDispatch, useAppSelector } from '../lib/hooks';

import { MessageType } from '../types/MessageType';
import { TrashIcon } from './UI/TrashIcon';
import { useMediaQuery } from 'react-responsive';
import { BlurIn } from './Transitions/BlurIn';
import { BlurInOut } from './Transitions/BlurInOut';
import { useTranslation } from 'react-i18next';

export const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const {
    displayModal: isDisplay,
    dataForDelete,
    item,
  } = useAppSelector(selectDeleteInfo);
  const handleDeleteDispatch = useDeleteDispatch();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 330px)' });

  const serialNumber = 'serialNumber' in item ? item.serialNumber : undefined;
  const productsAmount = 'products' in item ? item.products.length : undefined;
  const photo = 'photo' in item ? item.photo : undefined;
  const { title } = item;
  const { t } = useTranslation('common');

  if (!isDisplay) {
    return null;
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleConfirmDeletion = () => {
    handleDeleteDispatch(dataForDelete);
    dispatch(closeModal());
    dispatch(openMessage({ type: MessageType.success, info: 'success' }));
  };

  if (isSmallScreen) {
    return (
      <div className="modal" tabIndex={-1} onClick={handleCloseModal}>
        <div className="modal-dialog " onClick={handleDialogClick}>
          <BlurIn className="bg-light text-center border border-3 border-success">
            <p className="bg-success p-2">{t('too-tight')}</p>

            <Image
              src="/icons/icon-eyes.svg"
              className="p-2"
              width={50}
              height={50}
              alt="eyes"
            />
          </BlurIn>
        </div>
      </div>
    );
  }

  return (
    <div className="modal" tabIndex={-1} onClick={handleCloseModal}>
      <div className="modal-dialog min-width" onClick={handleDialogClick}>
        <BlurInOut className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-semibold">{t('modal-title')}</h5>

            <button
              type="button"
              className="btn-close rounded-circle position-absolute shadow-bottom"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>

          <div className="modal-body py-1">
            <ul className="list-group-disc mb-0">
              <li className="row d-flex align-items-center column-gap-3">
                {photo && (
                  <span className="col-2">
                    <Image
                      src="/img/monitor.png"
                      alt={title}
                      width={50}
                      height={35}
                    />
                  </span>
                )}

                <span className="col-6 d-flex flex-column">
                  <span>{title}</span>
                  <span className="fs-8 text-muted">{serialNumber}</span>
                </span>

                {productsAmount && (
                  <span className="col-2 d-flex column-gap-3 align-items-center">
                    <span
                      className={`rounded-circle border border-muted p-2 icon 
                      d-flex align-items-center justify-content-center`}
                    >
                      <Image
                        src="/icons/list-icon.svg"
                        alt="list"
                        width={15}
                        height={15}
                      />
                    </span>

                    <span>
                      {productsAmount}{' '}
                      <span className="d-sm-none text-light fs-7">
                        {t('pc')}
                      </span>
                      <span className="d-none d-sm-block fs-7 text-light">
                        {t('products')}
                      </span>
                    </span>
                  </span>
                )}
              </li>
            </ul>
          </div>

          <div className="modal-footer column-gap-2">
            <button
              type="button"
              className="btn btn-light rounded-pill text-uppercase fs-8"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              {t('close')}
            </button>

            <button
              type="button"
              className="btn btn-confirm rounded-pill px-4 text-danger d-flex align-items-baseline column-gap-2 text-uppercase fs-8"
              onClick={handleConfirmDeletion}
            >
              <TrashIcon width={10} height={10} />
              {t('delete')}
            </button>
          </div>
        </BlurInOut>
      </div>
    </div>
  );
};
