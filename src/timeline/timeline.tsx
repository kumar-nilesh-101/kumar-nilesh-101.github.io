import React from "react"
import { Chrono } from "react-chrono";
import { Experience } from "./experience-list";
import './timeline.css';

export function Timeline() {
    return (
        <div className="d-flex align-items-center justify-content-start">
            <Chrono
                items={Experience.map(e => ({ title: e.timePoint }))}
                classNames={{
                    active: 'my-class'
                }}
                mode="VERTICAL"
                hideControls="true"
                theme={{
                    primary: '#ffc107',
                    secondary: '#ffc107',
                    cardBgColor: 'transparent',
                    titleColor: 'white',
                    titleColorActive: 'ffc107',
                    titleHighlightActive: 'transparent',
                    iconBackgroundColor: 'black'
                }}
                timelinePointDimension={75}
                lineWidth="2"
            >
                <div className="chrono-icons">
                    {
                        Experience.map(e => {
                            return (
                                <img src={e.org.icon} alt={e.org.name} />
                            );
                        })
                    }
                </div>
                {
                    Experience.map(e => {
                        return (
                            <div className="card bg-transparent mt-5 text-white">
                                <h4 className="card-header pl-0 mb-4">
                                    { (e.role && e.org.name) ? `${e.role}, ${e.org.name}` : '' }
                                </h4>
                                <div className={ "card-body" + ( e.description.length ? "card-border" : "") + "p-4" }>
                                    <div className="card-text">
                                        {
                                            e.description.map(d => {
                                                return (
                                                    <p>{d}</p>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </Chrono>
        </div>
    )
}