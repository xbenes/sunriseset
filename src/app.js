import { render } from 'react-dom';
import React from 'react';
import '../css/style.css';

import Sun from './sun';

const wrapper = document.getElementById('app');
if (wrapper) {
    render(
        <div>
            <Sun />
        </div>
    , wrapper);
}
