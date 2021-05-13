import ListItem from "./ListItem";
import { render } from '@testing-library/react';

describe('the ListItem Component', () => {
    it('should render with a list element', ()=>{
        const {container, getByTestId}= render(<ListItem>
           <li data-testid='list-item'/>
            </ListItem>)

        expect(getByTestId('list-item'));
    });

    it('should render with classname passed in props', () => {
        const {container} = render(<ListItem className='bar'/>)
        expect(container.firstChild.classList.contains('bar')).toBe(true);
    });
})