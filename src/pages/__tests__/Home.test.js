import { render, screen, cleanup } from '@testing-library/react';
import Home from '../Home';


test('should render home page', () => {
    render(<Home/>);
    const todoElement = screen.getByTestId('home-page');
    expect(todoElement).toBeInTheDocument();
})