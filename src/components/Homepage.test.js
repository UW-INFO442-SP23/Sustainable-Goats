import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HomePage from '../components/homepage'
import Navbar from './navbar'

describe('test homepage', () => {
    test("page renders correctly", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
            
        )

        expect(screen.getByText("About the Map")).toBeInTheDocument(); 
    })

    test("navbar is correct", () => {
       render(
        <Navbar/>
       )
       expect(screen.getByText("Map")).toBeInTheDocument();
       expect(screen.getByText("Resources")).toBeInTheDocument();
    })

    test("filter can be clicked", () => {
        

        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
            
        )

        userEvent.click(screen.getByLabelText("Adult Fitness Equipment"))

        expect(screen.getByLabelText("Adult Fitness Equipment").checked).toBe(true);
    })
})