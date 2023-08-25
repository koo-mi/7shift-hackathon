import "./HomePage.scss";

import { useState } from "react";
import { DateFilter, TimeRangeField, TimeField, Form, FormRow, FormFooter, Button, SelectField, TextAreaField } from "@7shifts/sous-chef";
import closeIcon from "../../assets/icons/close_icon.png";
import clockIcon from "../../assets/icons/clock_icon.png"
import trashIcon from "../../assets/icons/trash_icon.png"
import plusIcon from "../../assets/icons/plus_icon.png"
import calculateHour from "../../utils/timeCalc.js"

const HomePage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Setting date for DateFilter 
    const [date, setDate] = useState(new Date());

    // Setting start/end time for TimeRangeField
    const [start, setStart] = useState("9:00 AM");
    const [end, setEnd] = useState("9:00 AM");

    // On change for TimeRangeField
    function handleTimeRange(e) {
        if (e.start) {
            setStart(e.start);
        }
        if (e.end) {
            setEnd(e.end);
        }
    }

    if (!isFormVisible) {
        return (
            <div className="background">
                <div className="click" onClick={() => { setIsFormVisible(true) }}></div>
            </div>
        )
    }

    return (
        <div className="background">
            <section className="modal">
                <div className="modal__header">
                    <h2 className="modal__title">Header</h2>
                    <img className="icon__close" src={closeIcon} alt="close icon" onClick={() => { setIsFormVisible(false) }} />
                </div>

                <DateFilter value={date} onChange={setDate} />

                <Form>
                    {/* Row 1 - Time */}
                    <FormRow>
                        <div className="modal__row1">
                            <TimeRangeField name="time_range" interval={30} onChange={handleTimeRange} startTime="9:00 AM" value={{ start, end }} placeholder="9:00 AM" />
                            <div className="modal__common-shift">
                                <a className="modal__common-shift-link">or use common shift times</a>
                                <img className="icon__clock" src={clockIcon} alt="clock icon" />
                                <p className="modal__total-hours">{calculateHour(start, end)} Hours</p>
                            </div>
                        </div>
                    </FormRow>

                    {/* Row 2 - Break */}
                    <FormRow columns={2}>
                        <div className="modal__break">
                            <SelectField
                                label="Breaks"
                                name="breaks"
                                onBlur={function noRefCheck() { }}
                                onChange={function noRefCheck() { }}
                                options={[
                                    {
                                        label: 'Unpaid Meal Break - 30 min',
                                        value: '30'
                                    },
                                    {
                                        label: 'Unpaid Meal Break - 60 min',
                                        value: '60'
                                    },
                                    {
                                        label: 'Paid Meal Break - 15 min',
                                        value: '15'
                                    }]}
                            // value={{
                            //     label: 'Unpaid Meal Break - 30 min',
                            //     value: '30'
                            // }}
                            />
                        </div>

                        <div className="modal__start-time-box">
                            <div className="modal__start-time-heading">
                                <label className="modal__start-time-label">Start time:</label>
                                <p>(Optional)</p>

                            </div>
                            <TimeField
                                interval={30}
                                onBlur={function noRefCheck() { }}
                                onChange={function noRefCheck() { }}
                                onClick={function noRefCheck() { }}
                                onFocus={function noRefCheck() { }}
                                onKeyDown={function noRefCheck() { }}
                                onMouseEnter={function noRefCheck() { }}
                                onMouseLeave={function noRefCheck() { }}
                            />
                            <img className="icon__trash" src={trashIcon} alt="delete icon" />
                        </div>
                    </FormRow>

                    {/* Row 3 - Add Break */}
                    <FormRow>
                        <div className="modal__add-break">
                            <img className="icon__plus" src={plusIcon} alt="add icon" />
                            <p>Add break</p>
                        </div>
                    </FormRow>

                    {/* Row 4 - Incentive / Skill Level */}
                    <FormRow columns={3}>
                        {/* Incentive */}
                        <div className="modal__incentive">
                            <SelectField
                                name="incentive"
                                label="Incentive"
                                options={[
                                    {
                                        label: '3 (Promotion)',
                                        value: '3'
                                    },
                                    {
                                        label: '2 (Something)',
                                        value: '2'
                                    },
                                    {
                                        label: '1 (Something)',
                                        value: '1'
                                    },
                                ]}
                            // value={{
                            //     label: '3 (Promotion)',
                            //     value: '3'
                            // }}
                            />
                        </div>

                        {/* Skill Level */}
                        <div className="modal__skill-level">
                            <SelectField
                                name="skill_level"
                                label="Skill Level"
                                options={[
                                    {
                                        label: '1 (Beginner)',
                                        value: '1'
                                    },
                                    {
                                        label: '2 (Intermediate)',
                                        value: '2'
                                    },
                                    {
                                        label: '3 (Experienced)',
                                        value: '3'
                                    },
                                ]}
                            // value={{
                            //     label: '1 (Beginner)',
                            //     value: '1'
                            // }}
                            />
                        </div>
                    </FormRow>

                    {/* Row 5 - Shift Notes */}
                    <FormRow>
                        <div className="modal__text-area">
                            <TextAreaField
                                caption="Let the employee know any important details about this shift."
                                label="Shift notes"
                                onBlur={function noRefCheck() { }}
                                onChange={function noRefCheck() { }}
                            />
                        </div>
                    </FormRow>

                    {/* Form Footer */}
                    <FormFooter>
                        <Button onClick={() => { setIsFormVisible(false) }} theme="default">
                            Cancel
                        </Button>
                        <Button onClick={() => { }} theme="primary">
                            Save
                        </Button>
                    </FormFooter>
                </Form>
            </section>
        </div>
    );
};

export default HomePage;
