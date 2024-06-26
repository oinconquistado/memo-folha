import { render } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('MainLayout component', () => {
  test('renders main layout with correct text and style', () => {
    const { getByText } = render(<MainLayout />);

    // Verifica se o texto "Main Layout" está presente
    const mainLayoutText = getByText(/Main Layout/i);
    expect(mainLayoutText).toBeInTheDocument();

    // Verifica se a classe ".text" está sendo aplicada corretamente
    const mainLayoutElement = getByText(/Main Layout/i);
    expect(mainLayoutElement).toHaveClass('text');
  });
});
