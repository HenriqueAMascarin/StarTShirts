import { useState } from 'react';

export default function useDrawerModalHook() {
    const [drawerModalState, changeDrawerModalState] = useState(false);

    return { drawerModalState, changeDrawerModalState };
}
