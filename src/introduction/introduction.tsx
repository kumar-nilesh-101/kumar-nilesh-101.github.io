import React from 'react';
import './introduction.css';
import { Technologies } from '../tech-list/technologies';
import { Timeline } from '../timeline/timeline';

export function Introduction() {
    return (
        <>
            <section className='p-xxl-5 vh-100 position-relative'>
                <div className='position-absolute top-50'>
                    <h1 className='greeting'>Hi, I'm Nilesh;</h1>
                    <h3 className='text-warning'>professional fullstack developer.</h3>
                </div>
            </section>
            <section className='position-relative vh-100'>
                <article className='p-xxl-5 fs-3 position-absolute top-50 translate-middle-y'>
                    <span className='d-inline-block my-4'>
                        A typical workday involves using <span className='text-warning'>NodeJS</span> with <span className='text-warning'>Typescript</span>, <span className='text-warning'>Angular 8</span>, <span className='text-warning'>MongoDB</span> and some service on <span className='text-warning'>AWS</span> lends a hand.
                    </span>
                    <br />
                    <span className='d-d-inline-block'>
                        These typical days have accumulated to <span className='text-warning'>4 years</span>.
                    </span>
                </article>
            </section>
            <section className="position-relative p-xxl-5 d-flex flex-column">
                <h3 className='mb-5'>
                    Besides my routine I get to fiddle around with several popular libraries and frameworks, here are the ones I'm confident about
                    <span className='text-warning'>...</span>
                </h3>
                <div className='h-100 w-100 d-flex align-items-center justify-content-around flex-grow-1'>
                    <Technologies></Technologies>
                </div>
            </section>
            <section className="postion-relative min-vh-100 p-xxl-5">
                <h3 className="mb-5">
                    What I have done so far
                </h3>
                <Timeline />
            </section>
        </>
    );
}