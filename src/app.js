import { render } from 'react-dom';
import React from 'react';
import '../css/style.css';

const wrapper = document.getElementById('app');
if (wrapper) {
    render(<div className="hello">Hello world</div>, wrapper);
}
