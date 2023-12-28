import React from 'react';
import { technologies as tech } from './technologies-list';
import './technologies.css';

export function Technologies() {
    return (
        <div className="row my-2">
            {
                tech.map(t => {
                    return (
                        <div className='p-xxl-5 col-3 d-flex align-items-center justify-content-around'>
                            <div title={t.name} className="thumbnail">
                                <img src={t.thumbUrl} alt={t.name} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}