import React from "react"
import { Chrono } from "react-chrono";
export function Timeline() {
    const items = [
        {
            title: "February, 2020",
        },
        {
            title: "December, 2020",
        },
        {
            title: "Novemeber, 2022",
        }
    ];

    return (
        <div className="min-vh-100 w-100">
            <Chrono
                items={items}
                classNames={{
                    active: 'my-class'
                }}
                mode="VERTICAL"
                hideControls="true"
                theme={{
                    primary: '#ffc107',
                    secondary: '#ffc107',
                    cardBgColor: 'black',
                    titleColor: 'white',
                    titleColorActive: 'ffc107',
                    titleHighlightActive: 'transparent',
                    iconBackgroundColor: 'black'
                }}
                scrollable={{ scrollbar: false }}
                enableOutline
                disableClickOnCircle
                timelinePointDimension={50}
            >
                <div className="chrono-icons">
                    <img src="/assets/icons/biz2credit.svg" alt="TTN" />
                    <img src="/assets/icons/ttn.svg" alt="TTN" />
                    <img src="/assets/icons/ttn.svg" alt="TTN" />
                </div>
                <div className="card bg-black text-white">
                    <h4 className="card-header">
                        Software Engineer Trainee, To The New Private Limited
                    </h4>
                    <div className="card-body p-4">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa recusandae fugit tempora, dignissimos molestias voluptatem distinctio alias impedit culpa magni eligendi aspernatur ab, sint expedita numquam aperiam neque harum dolore eaque ipsum id temporibus. Quis at magni modi id a dolores ad, quaerat architecto dolorem soluta, illum sequi minima.</p>
                    </div>
                </div>
                <div className="card bg-black text-white">
                    <h4 className="card-header">
                        Software Engineer, To The New Private Limited
                    </h4>
                    <div className="card-body p-4">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa recusandae fugit tempora, dignissimos molestias voluptatem distinctio alias impedit culpa magni eligendi aspernatur ab, sint expedita numquam aperiam neque harum dolore eaque ipsum id temporibus. Quis at magni modi id a dolores ad, quaerat architecto dolorem soluta, illum sequi minima.</p>
                    </div>
                </div>
                <div className="card bg-black text-white">
                    <h4 className="card-header">
                        Biz2Credit Infoservices Private Limited
                    </h4>
                    <div className="card-body p-4">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa recusandae fugit tempora, dignissimos molestias voluptatem distinctio alias impedit culpa magni eligendi aspernatur ab, sint expedita numquam aperiam neque harum dolore eaque ipsum id temporibus. Quis at magni modi id a dolores ad, quaerat architecto dolorem soluta, illum sequi minima.</p>
                    </div>
                </div>
            </Chrono>
        </div>
    )
}