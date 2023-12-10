'use client'

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
    children: React.ReactNode
}
// State is shared with all nextui components eg. modals, input fields etc. 
export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
    )
}

