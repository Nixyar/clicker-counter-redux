import {connect} from "react-redux";
import './style.css'
import plus from './img/plus.svg';
import minus from './img/minus.svg';
import reset from './img/reset.svg';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, refr}) => {
    return (
        <div className="container">
            <div className="counter">
                <div className="counter__result">{counter}</div>
                <div className="counter__control-button">
                    <button onClick={inc}>
                        <img src={plus} alt="plus"/>
                    </button>
                    <button onClick={dec}>
                        <img src={minus} alt="minus"/>
                    </button>
                    <button onClick={refr}>
                        <img src={reset} alt="reset"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);
