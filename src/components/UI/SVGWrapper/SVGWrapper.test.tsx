import { render } from '@testing-library/react';
import SVGIcon from '@/components/UI/SVGWrapper/index.tsx';
import User from '@/assets/user.svg';

describe('SVGWrapper component', () => {
  it('renders correctly with valid SVG as children', () => {
    const { container } = render(
      <SVGIcon width={32} height={32}>
        <User  />
      </SVGIcon>,
    );

    // Verifica se o SVGWrapper renderizou corretamente
    expect(container.firstChild).toBeInTheDocument();

    // Verifica se o elemento clonado (o SVG) está presente
    const clonedSvg = container.querySelector('svg');
    expect(clonedSvg).toBeInTheDocument();

    // Verifica se as props width e height foram corretamente propagadas
    expect(clonedSvg).toHaveAttribute('width', '32');
    expect(clonedSvg).toHaveAttribute('height', '32');
  });
});
