import type { SVGProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';


const ICON_NAME = 'React';

describe('DynamicIconLoad', () => {
  it('renders a dynamic icon and forwards props', async () => {
    const { default: DynamicIconLoad } = await import('../components/dynamic/DynamicIconLoad');

    render(<DynamicIconLoad name={ICON_NAME} size={32} color="#61DAFB" data-testid="dynamic-icon" />);

    const svg = await screen.findByTestId('dynamic-icon');

    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });
});
