import React from 'react';
import './introduction.css';
import { Technologies } from '../tech-list/technologies';
import { Timeline } from '../timeline/timeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import pdf from '../resume.pdf';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export function Introduction() {
    return (
        <>
            <section className='p-xxl-5 vh-100 position-relative'>
                <div className='position-absolute top-50'>
                    <h1 className='greeting position-relative'>
                        Hi, I'm Nilesh;
                        <span className='d-inline-block text-warning fs-1 resume-icon'>
                            <FontAwesomeIcon icon={faFile} />
                        </span>
                        <a
                            className='d-inline-block text-warning fs-3 position-absolute text-decoration-none download'
                            href={pdf}
                            target="_blank"
                            rel="noreferrer"
                        >
                                <FontAwesomeIcon icon={faArrowDown} />
                        </a>
                    </h1>
                    <div className='text-warning social'>
                        <div>
                            <span className='d-inline-block fs-3 hi'>
                                Say hi
                            </span>
                            <a target="_blank" rel="noreferrer" href='mailto:nilesh22.a67@gmail.com' className='d-inline-block m-2 icon'>
                                <FontAwesomeIcon icon={faMessage} />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/nilesh-kumar-developer' className='d-inline-block m-2 icon'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://github.com/kumar-nilesh-101' className='d-inline-block m-2 icon'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://stackoverflow.com/users/9391556/nilesh-kumar' className='d-inline-block m-2 icon'>
                                <FontAwesomeIcon icon={faStackOverflow} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='position-relative section-gap'>
                <article className='p-5 mb-5 fs-3'>
                    <span className='d-inline-block my-4'>
                        My typical workday involves using <span className='text-warning'> NodeJS </span> with <span className='text-warning'>Typescript</span>, <span className='text-warning'>Angular 8</span>, <span className='text-warning'>MongoDB</span> and some service on <span className='text-warning'>AWS</span> lends a hand.
                    </span>
                    <br />
                    <span className='d-d-inline-block'>
                        These typical days have accumulated to <span className='text-warning'>4 years</span>.
                    </span>
                </article>
                <Timeline />
            </section>
            <section className="position-relative p-5">
                <h3 className='mb-5'>
                    Besides my routine I get to fiddle around with several popular libraries and frameworks, here are the ones I'm confident about
                    <span className='text-warning'>...</span>
                </h3>
                <Technologies></Technologies>
            </section>
        </>
    );
}