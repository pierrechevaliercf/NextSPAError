'use client';

import init from "@elastic/apm-rum";
import { useEffect } from "react";

export function InitApm() {
    useEffect(() => {
        // Comment this line to get the correct SPA behavior again
        const a  = init; // just importing this function and calling it cause the error
    }, [])
    return null;
}