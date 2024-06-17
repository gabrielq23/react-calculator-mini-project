import React, { useState } from "react";
import { evaluate } from "mathjs";


function Calculator() {

    const [value, setValue] = useState("");

    function makeStatement(input) {
        return () => {
            setValue(v => v + input);
        }
    }

    function clearStatement() {
        setValue("");
    }

    function deleteCharacter() {
        setValue(v => v.slice(0, -1));
    }

    function evaluateStatement() {
        try {
            setValue(String(evaluate(value)));
        }
        catch {
            setValue("ERROR");
        }
    }

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="calculator">
                <input type="text" value={value} readOnly />
                <br />
                <input type="button" value="AC" onClick={clearStatement} />
                <input type="button" value="DEL" onClick={deleteCharacter} />
                <input type="button" value="." onClick={makeStatement(".")} />
                <input type="button" value="/" onClick={makeStatement("/")} />
                <br />
                <input type="button" value="7" onClick={makeStatement("7")} />
                <input type="button" value="8" onClick={makeStatement("8")} />
                <input type="button" value="9" onClick={makeStatement("9")} />
                <input type="button" value="*" onClick={makeStatement("*")} />
                <br />
                <input type="button" value="4" onClick={makeStatement("4")} />
                <input type="button" value="5" onClick={makeStatement("5")} />
                <input type="button" value="6" onClick={makeStatement("6")} />
                <input type="button" value="+" onClick={makeStatement("+")} />
                <br />
                <input type="button" value="1" onClick={makeStatement("1")} />
                <input type="button" value="2" onClick={makeStatement("2")} />
                <input type="button" value="3" onClick={makeStatement("3")} />
                <input type="button" value="-" onClick={makeStatement("-")} />
                <br />
                <input type="button" value="00" onClick={makeStatement("00")} />
                <input type="button" value="0" onClick={makeStatement("0")} />
                <input type="button" value="=" onClick={evaluateStatement} />
            </div>
        </div>

    );
}

export default Calculator