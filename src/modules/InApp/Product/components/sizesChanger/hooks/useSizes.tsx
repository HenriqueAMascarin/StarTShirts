import { useState } from 'react';

export default function useSizes() {
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const sizesArray = sizes.map((size) => { return { text: size, isSelected: size === 'XS' }; });

    const [stateSizes, changeStateSizes] = useState(sizesArray);

    return {stateSizes, changeStateSizes};
}
