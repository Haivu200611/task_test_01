import { useEffect, useState } from "react"

export function useFetchData(url: string) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError("Error fetching data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}