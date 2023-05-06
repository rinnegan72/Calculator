/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { create, all } from 'mathjs';
const config = { };
const math = create(all, config);

function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("");


    const handleClick = (value: any) => {
        console.log("input before", input, "value  ", value)
        setInput((prevInput) => prevInput + value);
        console.log("input", input, "value  ", value)
    };

    const handleClear = () => {
        setResult(0);
        setInput("");
    };

    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    const handleEqual = () => {
        try {
            setResult(math.evaluate(input));
            console.log("handleEqual ",input)
        } catch (error) {
            setResult(0);
            window.alert("Wrong input"); 
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;
        console.log("key", key); 
        console.log("input" ,input); 
        if (((key === "Enter")) || ((key === "="))){
            handleEqual();
        } else if (key === "Escape") {
            handleClear();
        } else if (key === "Backspace") {
            handleDelete();
        } else if (key.startsWith('F')) {
            console.log('Function key pressed:', event.code);
        } else if (/[0-9+\-*/.]/.test(key)) {
            handleClick(key);
        }
        else {
            console.log("Wrong key pressed"); 
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);
    return (
        <Container>
            <Row>
                <Col md={3} className="mx-auto border">
                    <div className="Calculator">
                        <h1>Calculator</h1>
                        <div className="input w-20 p-3 border border-secondary rounded" style={{ width: '220px', height: '50px' }}>
                            {input}</div>
                        <br></br>
                        <div className="result w-20 p-3 border border-primary rounded" style={{ width: '220px', height: '50px' }}>
                            = {result}</div>
                        <br></br>
                        <div>
                            <Button variant="danger" className="mb-3" style={{ width: '100px' }} onClick={handleClear}>
                                Clear
                            </Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="danger" className="mb-3" style={{ width: '100px' }} onClick={handleDelete}>
                                Delete
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("7")}>
                                7
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("8")}>
                                8
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("9")}>
                                9
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="info" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("+")}>
                                +
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("4")}>
                                4
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("5")}>
                                5
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("6")}>
                                6
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="info" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("-")}>
                                -
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("1")}>
                                1
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("2")}>
                                2
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("3")}>
                                3
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="info" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("*")}>
                                x
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("0")}>
                                0
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="primary" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick(".")}>
                                .
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="info" className="mb-3" style={{ width: '50px' }} onClick={() => handleClick("/")}>
                                ÷
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="success" className="mb-3" style={{ width: '50px' }} onClick={handleEqual}>
                                =
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Calculator;