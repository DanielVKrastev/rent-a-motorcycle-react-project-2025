import { it, expect, vi, describe } from 'vitest'
import ReactDom from 'react-dom/client'
import { fireEvent, render, screen } from '@testing-library/react'
import DetailsBox from './DetailsBox'

const motorcycle = {
    "_id": "67ddc9dfa663cac7fddd2a5c",
    "brand": "Suzuki",
    "model": "GSX 650",
    "type": "Touring",
    "engine": 650,
    "power": 105,
    "maxSpeed": 212,
    "weight": 155,
    "category": "A",
    "year": 2013,
    "tank": 15,
    "image": "https://lh3.googleusercontent.com/d/1uhoTcdwI--XE72n9U4QG4GkymHYkmcZU",
    "reservationCount": 3,
    "active": "yes",
    "__v": 0,
    "pricePerDay": 55,
    "owner": "67d93ba5ba9801bce10714fc"
}

describe('DetailsBox component', () => {
    it('Should display Motorcycle title', () => {
        const { container } = render(<DetailsBox motorcycle={motorcycle} comments={[]} />);

        const titleBox = container.querySelector('.page-box-left > .moto-title');

        expect(titleBox).toBeInTheDocument();
        expect(titleBox.textContent).toBe(`${motorcycle.brand} ${motorcycle.model}`);
    });

    it('Should be checked when clicked', () => {
        const mockSetAddOptions = vi.fn();
        render(
            <DetailsBox
                motorcycle={motorcycle}
                comments={[]}
                setAddOptions={mockSetAddOptions}
            />
        );

        const passengerEquipmentLabel = screen.getByLabelText(/Passenger equipment/);
        expect(passengerEquipmentLabel).toBeInTheDocument();

        const checkbox = screen.getByLabelText(/Passenger equipment/);
        fireEvent.click(checkbox);

        expect(mockSetAddOptions).toHaveBeenCalledWith(expect.any(Function));
    });
});