import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { highlightText } from '../shared/utils/highlight';

describe('highlightText', () => {
  it('destaca o termo pesquisado dentro do texto', () => {
    render(<div>{highlightText('Aventura no Espaço', 'Aventura')}</div>);

    const highlightedElement = screen.getByText('Aventura');

    expect(highlightedElement.tagName).toBe('MARK');
  });
});