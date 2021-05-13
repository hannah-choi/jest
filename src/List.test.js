import { render } from '@testing-library/react';
import List from "./List";

describe('the list component', ()=>{
    it('should render with class "List"', () => {
        const {container, getByTestId}= render(<List/>)
        expect(getByTestId('list'))
        expect(container.firstChild.classList.contains('list'))
    })

})