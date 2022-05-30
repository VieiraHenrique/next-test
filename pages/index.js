import axios from "axios";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../lib/variables";

export default function Home({ articles }) {
    return (
        <>
            {articles.length > 0 ? (
                articles.map((article) => {
                    return (
                        <Link href={`/articles/${article.id}`} key={article.id}>
                            <a>
                                <h2>{article.attributes.title}</h2>
                            </a>
                        </Link>
                    );
                })
            ) : (
                <p>No articles found</p>
            )}
        </>
    );
}

export async function getStaticProps() {
    const { data } = await axios.get(`${API_URL}/articles`);

    return {
        props: {
            articles: data.data,
        },
    };
}
