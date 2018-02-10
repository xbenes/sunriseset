import { render } from 'react-dom';
import React from 'react';

const wrapper = document.getElementById('app');
if (wrapper) {
    render(<div>Hello world</div>, wrapper);
}
