import React from 'react';
import { technologies } from './technologies-list';
import { Tooltip } from 'react-tooltip'
import './technologies.css';

export function Technologies() {
    return (
        <div className='row px-5'>
            {
                technologies.map((t, i) => {
                    return (
                        <>
                            <Tooltip
                                className='text-warning'
                                anchorSelect={`#tech-list-item-${i}`}
                            >
                                <h3>
                                    {t.name}
                                </h3>
                            </Tooltip>
                            <div
                                key={i}
                                className='col-1 d-flex align-items-center justify-content-around m-4'
                            >
                                <img
                                    id={`tech-list-item-${i}`}
                                    src={t.thumbUrl}
                                    alt={t.name}
                                />
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}