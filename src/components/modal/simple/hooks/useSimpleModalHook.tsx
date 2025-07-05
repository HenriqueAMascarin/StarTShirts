import { useState } from 'react';

export default function useSimpleModalHook() {
    const [simpleModalState, changeSimpleModalState] = useState(false);

    return { simpleModalState, changeSimpleModalState };
}
