import React from 'react'
import { connect } from 'react-redux';
import { eat, play, nap } from '../redux/actions'

const Activity = ( { activity, eat, play, nap }) => (
    <>
        <h1>Cat soup tastes good???</h1>
        <p>The Cat is {activity}</p>
        <button type='button' onClick={() => eat()}>Eating</button>
        <button type='button' onClick={() => nap()}>Napping</button>
        <button type='button' onClick={() => play()}>Playing</button>
    </>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(mapStateToProps, { eat, play, nap })(Activity);