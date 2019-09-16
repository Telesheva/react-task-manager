import React from 'react';
import './Grid.css';
import { Col } from 'antd';

const Grid = props => {
    return (
            <Col span={6}>
                { props.children }
            </Col>
    )
};

export default Grid;


