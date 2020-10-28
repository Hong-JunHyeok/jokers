import React, { useState, useEffect } from "react";
import { GiPunchBlast } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import axios from "axios";
const JokeBody = () => {
    const [state, setState] = useState({
        isLoading: true,
        setup: "",
        punch: "",
    });
    const getData = async () => {
        await axios
            .get("https://official-joke-api.appspot.com/random_joke")
            .then((res) => {
                setState({
                    ...state,
                    isLoading: false,
                    setup: res.data.setup,
                    punch: res.data.punchline,
                });
            })
            .catch((res) => console.log(res));
    };
    const onClick = () => {
        getData();
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="JokeBody">
            <h1 className="JokeBody_setup">{state.setup}</h1>
            <div className="JokeBody_punch">
                <GiPunchBlast size={150} />
                <div className="JokeBody_punch_line">{state.punch}</div>
            </div>
            <div onClick={onClick} className="JokeBody_reload">
                <AiOutlineReload size={100} />
            </div>
        </div>
    );
};

export default JokeBody;
