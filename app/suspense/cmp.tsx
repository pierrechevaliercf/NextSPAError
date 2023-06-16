import {Suspense, use} from 'react'

function fetchData() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('RESULT')
        }, 3000); // 3 sec
    })
}

export default function Cmp() {
    const result = use(fetchData())

    return (
        <main className="flex flex-col items-center justify-between bg-yellow-300 w-full h-80">
            LOADING ENDED FOR CMP {result}
        </main>
    )
}


export function CmpWithSuspense(){
    return (
        <Suspense fallback={<div className="flex items-center justify-center bg-gray-300">LOADING CMP</div>}>
            <Cmp></Cmp> 
        </Suspense>
    )
}