import React from 'react';
import { technologies as tech } from './technologies-list';
import './technologies.css';

export function Technologies() {
    return (
        <div className='w-50'>
            {
                tech.map(t => {
                    return (
                        <>
                            <article className="tech-item">
                                <div className="tech-logo text-start">
                                    <img src={t.thumbUrl} alt={t.name} />
                                </div>
                                <div className="tech-description py-4 pl-4">
                                    <h3 className='mr-3 title'>{ t.name }</h3>
                                    <div className="story text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias quidem vel. Officiis assumenda delectus recusandae rem illo ut iste obcaecati voluptates nemo alias quasi a non, consectetur nihil! Qui consectetur, consequatur incidunt, sapiente, ducimus sed similique dolorem nam illo et excepturi iste fuga quibusdam laboriosam harum! Aut, tempore maiores!
                                    </div>
                                </div>
                            </article>
                        </>
                    );
                })
            }
        </div>
    );
}