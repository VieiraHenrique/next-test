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

    console.log(data.data);

    return {
        props: {
            article: data.data,
        },
    };
}

export async function getStaticPaths() {
    const { data } = await axios.get(`${API_URL}/articles`);

    const paths = data.data.map((article) => {
        return {
            params: { id: `${article.id}` },
        };
    });

    console.log(paths);

    return {
        paths,
        fallback: "blocking", // goes to 404 if not valid
    };
}
