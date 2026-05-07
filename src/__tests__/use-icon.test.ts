import { describe, expect, it } from 'vitest';
import { useIcon } from '../hooks/use-icon';

describe('useIcon', () => {
  it('returns width and height based on the size prop', () => {
    const result = useIcon({ size: 32 });

    expect(result.iconProps).toEqual({ width: 32, height: 32 });
  });

  it('defaults to 1em and forwards extra props', () => {
    const result = useIcon({ color: '#61DAFB' });

    expect(result.iconProps).toEqual({ width: '1em', height: '1em', color: '#61DAFB' });
  });
});
