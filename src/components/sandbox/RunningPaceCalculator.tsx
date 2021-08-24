import React, { useState, SyntheticEvent } from "react";
import "./RunningPaceCalculator.scss";

enum Unit {
    Km = "km",
    Meters = "meters"
};

interface IPaceCalculatorInputForm {
    distance: { value: string };
    unit: { value: string };
    hours: { value: string };
    minutes: { value: string };
    seconds: { value: string };
};

interface ITimes {
    oneKm: string,
    fiveKm: string,
    tenKm: string,
    halfMarathon: string,
    marathon: string
};

interface ISpeeds {
    minPerKm: string,
    kmPerHour: string,
    minPerMi: string
}

const distances = {
    oneKm: 1.000,
    fiveKm: 5.000,
    tenKm: 10.000,
    halfMarathon: 21.097,
    marathon: 42.195
}

const RunningPaceCalculator = () => {

    const [speeds, setSpeeds] = useState({
        minPerKm: "0",
        kmPerHour: "0",
        minPerMi: "0"
    });

    const [times, setTimes] = useState({
        oneKm: "00:00:00",
        fiveKm: "00:00:00",
        tenKm: "00:00:00",
        halfMarathon: "00:00:00",
        marathon: "00:00:00"
    });

    const getHoursSegments = (seconds: number) => {
        return Math.floor(seconds / (60 * 60)).toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });
    };

    const getMinutesSegment = (seconds: number) => {
        return Math.floor(seconds / 60 % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });
    };

    const getSecondsSegment = (seconds: number) => {
        return Math.round(seconds % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        });
    }

    const getFullTime = (seconds: number) => {
        console.log(seconds);
        return `${getHoursSegments(seconds)}:${getMinutesSegment(seconds)}:${getSecondsSegment(seconds)}`;
    };

    const calculateTotalSeconds = (target: IPaceCalculatorInputForm): number => {
        const hours: number = target.hours.value ? parseInt(target.hours.value) : 0;
        const minutes: number = target.minutes.value ? parseInt(target.minutes.value) : 0;
        const seconds: number = target.seconds.value ? parseInt(target.seconds.value) : 0;

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        return totalSeconds;
    };

    const calculateSpeeds = () => {

    };

    const calculateTimes = () => {

    };

    const handleFormOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & IPaceCalculatorInputForm;

        const totalSeconds =  calculateTotalSeconds(target);

        const distance: number = parseInt(target.distance.value);
        const unit: string = target.unit.value

        const distance2Meters = unit === Unit.Meters ? distance : distance * 1000;
        const distance2Miles = (distance2Meters / 1000) * 0.62;

        const secondsPerKm = totalSeconds /  (distance2Meters / 1000);
        const secondsPerMi = totalSeconds /  (distance2Miles);

        const minPerKm = `${getMinutesSegment(secondsPerKm)}:${getSecondsSegment(secondsPerKm)}`;
        const kmPerHour = ((60 * 60) / secondsPerKm).toFixed(2);
        const minPerMi = `${getMinutesSegment(secondsPerMi)}:${getSecondsSegment(secondsPerMi)}`;

        const speeds: ISpeeds = {
            minPerKm,
            kmPerHour,
            minPerMi
        };

        setSpeeds(speeds);

        const times: ITimes = {
            oneKm: getFullTime(secondsPerKm * distances.oneKm),
            fiveKm: getFullTime(secondsPerKm * distances.fiveKm),
            tenKm: getFullTime(secondsPerKm * distances.tenKm),
            halfMarathon: getFullTime(secondsPerKm * distances.halfMarathon),
            marathon: getFullTime(secondsPerKm * distances.marathon)
        };

        console.log('time');
        console.log(times);

        setTimes(times);
    };

    return (
        <section>
            <h2>Running pace calculator</h2>
            <form onSubmit={handleFormOnSubmit}>
                <fieldset>
                    <legend>Distance</legend>
                    <label>
                        <input id="distance" type="number" placeholder="0"/>
                    </label>
                    <select id="unit">
                        <option value="km">Kilometers</option>
                        <option value="meters">Meters</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Expected time</legend>
                    <input id="hours" type="number" placeholder="hh"/><b>:</b> 
                    <input id="minutes" type="number" placeholder="mm"/><b>:</b> 
                    <input id="seconds" type="number" placeholder="ss"/>
                </fieldset>

                <input type="submit" value="Submit"/>
            </form>

            <div>
                <h3>Paces</h3>
                <ul>
                    <li>
                        <span>{speeds.minPerKm} <b>min/km</b></span>
                    </li>
                    <li>
                        <span>{speeds.kmPerHour} <b>km/h</b></span>
                    </li>
                    <li>
                        <span>{speeds.minPerMi} <b>min/mi</b></span>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Course times</h3>
                <ul>
                    <li>
                        <span><b>1 km</b> - {times.oneKm}</span>
                    </li>
                    <li>
                        <span><b>5 km</b> - {times.fiveKm}</span>
                    </li>
                    <li>
                        <span><b>10 km</b> - {times.tenKm}</span>
                    </li>
                    <li>
                        <span><b>Half marathon (21.097 m)</b> - {times.halfMarathon}</span>
                    </li>
                    <li>
                        <span><b>Marathon (42.195 m)</b> - {times.marathon}</span>
                    </li>
                </ul>
                
            </div>
        </section>
    );
};

export default RunningPaceCalculator;