import axios from "axios";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../lib/variables";

export default function Home({ articles }) {
    console.log(articles);
    return (
        <>
            {articles &&
                articles.map((article) => {
                    return (
                        <Link href={`/articles/${article.id}`} key={article.id}>
                            <a>
                                <h2>{article.attributes.title}</h2>
                                <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
                            </a>
                        </Link>
                    );
                })}
        </>
    );
}

export async function getStaticProps(context) {
    const { data } = await axios.get(`${API_URL}/articles`);
    console.log(data);

    return {
        props: {
            articles: data.data,
        },
        revalidate: 1
    };
}
