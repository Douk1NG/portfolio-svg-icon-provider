import type { SVGProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@/svg/react.svg', () => ({
  default: (props: SVGProps<SVGSVGElement>) => <svg {...props} />,
}));

describe('React icon component', () => {
  it('renders an svg and forwards size and custom props', async () => {
    const { default: ReactIcon } = await import('@/components/React');

    render(<ReactIcon size={32} color="#61DAFB" data-testid="react-icon" />);

    const svg = screen.getByTestId('react-icon');

    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });
});
