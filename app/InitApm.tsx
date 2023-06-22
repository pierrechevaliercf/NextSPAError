'use client';

import init from "@elastic/apm-rum";

export function InitApm() {
    const a  = init; // just importing this function and calling it cause the error

    return null;
}