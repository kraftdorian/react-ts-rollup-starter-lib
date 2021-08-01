import React from 'react';
import { render } from 'test-setup';

import { Basic as Component } from './index.stories';

describe('Component', () => {
  it('renders without crashing', () => {
    const component = render(<Component />);
    expect(component).toBeTruthy();
  });
});