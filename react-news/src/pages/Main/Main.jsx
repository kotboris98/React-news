import { useEffect } from "react"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import { getNews } from "../../api/apiNews"

const Main = () => {
    useEffect(() => {
        const fetchNews = async() => {
            try {
                const news = await getNews()
                console.log(news)
            } catch (error) {
                console.log(error)
            }
        fetchNews();
        }
    }, [])
    return (
        <main>
            <NewsBanner />
        </main>
    )
}

export default Main