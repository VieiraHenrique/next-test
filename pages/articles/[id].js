import axios from "axios";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../../lib/variables";

export default function SingleArticle({ article }) {
    return (
        <div>
            <h2>{article.attributes.title}</h2>
            <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
        </div>
    );
}

export async function getStaticProps(context) {
    const { data } = await axios.get(`${API_URL}/articles/${context.params.id}`);

    return {
        props: {
            article: data.data,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const { data } = await axios.get(`${API_URL}/articles`);

    const paths = data.data.map((article) => {
        return {
            params: { id: `${article.id}` },
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
}
