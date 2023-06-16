function fetchData() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('RESULT')
    }, 3000); // 3 sec
  })
}

export default async function Home() {

  const result = await fetchData();

  return (
    <main className="flex flex-col items-center justify-between bg-yellow-300 w-full h-80">
      LOADING ENDED {result}
    </main>
  )
}
