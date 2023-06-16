import { CmpWithSuspense } from "./cmp";

function fetchData() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('RESULT')
        }, 3000); // 3 sec
    })
}

export default async function Page() {
    const result = await fetchData();

    const longComputation = [];
    for (let i = 0; i <= 10000; i++) {
      longComputation.push(<div key={i}>Test {i}</div>);
    }
  
    return (
      <main className="flex flex-col items-center justify-between bg-yellow-300 w-full h-80">
        LOADING ENDED {result}
        <CmpWithSuspense></CmpWithSuspense>
        {longComputation}
      </main>
    )
  }
  